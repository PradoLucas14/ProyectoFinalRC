import { useNavigate } from 'react-router-dom';
import { Form, Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Login.css';
import jwtDecode from 'jwt-decode';
import { useForm } from 'react-hook-form';
import { enqueueSnackbar } from 'notistack';

const LoginPage = ({ setUser }) => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm({ mode: 'onBlur' });

  const loginData = async (data) => {
    try {
      console.log(data);
      const response = await fetch('http://localhost:3001/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      console.log('Llegue a la consulta del response :', response.status);
      const loginData = await response.json();
      console.log(loginData);
      if (response.status !== 200) {
        console.log(loginData);
        enqueueSnackbar(loginData.message, { variant: 'error' });
      } else {
        enqueueSnackbar(loginData.message, { variant: 'success' });

        const decoded = jwtDecode(loginData.accessToken);
        localStorage.setItem('isUserLogged', 'true');
        localStorage.setItem('token', loginData.accessToken);

        setUser({
          token: loginData.accessToken,
          id: decoded.userId,
          isLoggedIn: true,
          role: decoded.userRole,
        });
        console.log(decoded.role, setUser);
        navigate('/');
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className='login'>
      <Container className='loginContainer'>
        <div className="form-wrapper">
          <h2 className="text-center">Iniciar Sesión</h2>
          <Form onSubmit={handleSubmit(loginData)}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Ingrese correo:</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Ingresa un correo electrónico"
                {...register('email', {
                  required: 'Este mail es requerido',
                  minLength: {
                    value: 5,
                    message: 'El email debe tener al menos 5 caracteres'
                  },
                  maxLength: {
                    value: 50,
                    message: 'El email no debe exceder los 30 caracteres'
                  }
                })}
                className={errors.email ? 'error-input' : ''}
              />
              {errors.email && <span className="error">{errors.email.message}</span>}
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                className='inportForm'
                type="password"
                placeholder="Ingresa tu contraseña"
                {...register('password', {
                  required: 'La contraseña es requerida',
                  minLength: {
                    value: 6,
                    message: 'Las contraseñas tienen un mínimo de 6 caracteres'
                  }
                })}
              />
              {errors.password && <span className="error">{errors.password.message}</span>}
            </Form.Group>
            <Button variant="primary" type="submit" className="w-100 mt-3">
              Iniciar Sesión
            </Button>
          </Form>
          <p className="text-center mt-3">
            ¿No tienes cuenta?{' '}
            <Link to="/Register" className="register-link">
              Regístrate aquí
            </Link>
          </p>
        </div>
      </Container>
    </div>
  );
};

export default LoginPage;
