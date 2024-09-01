import React, { useState } from "react";
import axios from "axios";
import "./Reservas.css";

const Reservas = () => {
  const [name, setName] = useState("");
  const [telephone, setTelephone] = useState("");
  const [participants, setParticipants] = useState(1);
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const [errors, setErrors] = useState({
    name: "",
    telephone: "",
    participants: "",
    email: "",
    date: "",
    time: "",
  });

  const generateTimeOptions = () => {
    const times = [];
    for (let hour = 9; hour <= 23; hour++) {
      for (let minute = 0; minute < 60; minute += 30) {
        const timeString = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
        times.push(timeString);
      }
    }
    return times;
  };

  const timeOptions = generateTimeOptions();

  const validateName = (value) => {
    if (/^[a-zA-Z\s]{6,}$/.test(value)) {
      return "";
    }
    return "Nombre inválido.";
  };

  const validateTelephone = (value) => {
    const telephoneStr = value.trim();
    if (telephoneStr.length >= 6 && /^[0-9]+$/.test(telephoneStr)) {
      return "";
    }
    return "Teléfono inválido. Debe tener al menos 6 dígitos.";
  };

  const validateParticipants = (value) => {
    if (value > 0) {
      return "";
    }
    return "Participantes > 0.";
  };

  const validateEmail = (value) => {
    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      return "";
    }
    return "Email inválido.";
  };

  const validateDate = (value) => {
    if (value) {
      return "";
    }
    return "Fecha obligatoria.";
  };

  const validateTime = (value) => {
    if (value) {
      return "";
    }
    return "Hora obligatoria.";
  };

  const handleChange = (e, validator) => {
    const { id, value } = e.target;
    switch (id) {
      case "name":
        setName(value);
        setErrors((prevErrors) => ({ ...prevErrors, name: validator(value) }));
        break;
      case "telephone":
        setTelephone(value);
        setErrors((prevErrors) => ({ ...prevErrors, telephone: validator(value) }));
        break;
      case "participants":
        setParticipants(value);
        setErrors((prevErrors) => ({ ...prevErrors, participants: validator(value) }));
        break;
      case "email":
        setEmail(value);
        setErrors((prevErrors) => ({ ...prevErrors, email: validator(value) }));
        break;
      case "date":
        setDate(value);
        setErrors((prevErrors) => ({ ...prevErrors, date: validator(value) }));
        break;
      case "time":
        setTime(value);
        setErrors((prevErrors) => ({ ...prevErrors, time: validator(value) }));
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let hasError = false;
    const newErrors = {};

    newErrors.name = validateName(name);
    newErrors.telephone = validateTelephone(telephone);
    newErrors.participants = validateParticipants(participants);
    newErrors.email = validateEmail(email);
    newErrors.date = validateDate(date);
    newErrors.time = validateTime(time);

    hasError = Object.values(newErrors).some(error => error);

    if (hasError) {
      setErrors(newErrors);
      return;
    }

    axios.post("http://localhost:3001/api/reservas", {
      name,
      telephone,
      participants,
      email,
      date,
      time,
    })
    .then(response => {
      Swal.fire({
        title: "Reserva exitosa",
        text: "Tu reserva ha sido registrada correctamente.",
        icon: "success",
        confirmButtonText: "OK",
        customClass: {
          confirmButton: "btn btn-dark",
        },
        buttonsStyling: false,
      });
      setName("");
      setTelephone("");
      setParticipants(1);
      setEmail("");
      setDate("");
      setTime("");
    })
    .catch(error => {
      Swal.fire({
        title: "Error",
        text: "Hubo un problema al registrar tu reserva. Por favor, intenta nuevamente.",
        icon: "error",
        confirmButtonText: "OK",
        customClass: {
          confirmButton: "btn btn-dark",
        },
        buttonsStyling: false,
      });
    });
  };

  return (
    <div className="reserva">
      <div className="reservaOverlay">
        <div className="containerFormulario">
          <form onSubmit={handleSubmit} className="reservas-form">
            <div className="row">
              <div className="col-md-6">
                <label htmlFor="name">Nombre:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  onChange={(e) => handleChange(e, validateName)}
                  className={`form-control ${errors.name ? 'input-error' : ''}`}
                />
                {errors.name && <p className="error-message">{errors.name}</p>}
              </div>
              <div className="col-md-6">
                <label htmlFor="telephone">Teléfono:</label>
                <input
                  type="number"
                  id="telephone"
                  name="telephone"
                  value={telephone}
                  onChange={(e) => handleChange(e, validateTelephone)}
                  className={`form-control ${errors.telephone ? 'input-error' : ''}`}
                />
                {errors.telephone && <p className="error-message">{errors.telephone}</p>}
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <label htmlFor="participants">Participantes:</label>
                <input
                  type="number"
                  id="participants"
                  name="participants"
                  value={participants}
                  onChange={(e) => handleChange(e, validateParticipants)}
                  className={`form-control ${errors.participants ? 'input-error' : ''}`}
                  min="1"
                />
                {errors.participants && <p className="error-message">{errors.participants}</p>}
              </div>
              <div className="col-md-6">
                <label htmlFor="email">Correo electrónico:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => handleChange(e, validateEmail)}
                  className={`form-control ${errors.email ? 'input-error' : ''}`}
                />
                {errors.email && <p className="error-message">{errors.email}</p>}
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <label htmlFor="date">Fecha:</label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={date}
                  onChange={(e) => handleChange(e, validateDate)}
                  className={`form-control ${errors.date ? 'input-error' : ''}`}
                  min={new Date().toISOString().split("T")[0]}
                />
                {errors.date && <p className="error-message">{errors.date}</p>}
              </div>
              <div className="col-md-6">
                <label htmlFor="time">Hora:</label>
                <select
                  id="time"
                  name="time"
                  value={time}
                  onChange={(e) => handleChange(e, validateTime)}
                  className={`form-control ${errors.time ? 'input-error' : ''}`}
                >
                  <option value="">Selecciona una hora</option>
                  {timeOptions.map((time, index) => (
                    <option key={index} value={time}>
                      {time}
                    </option>
                  ))}
                </select>
                {errors.time && <p className="error-message">{errors.time}</p>}
              </div>
            </div>
            <button type="submit" className="btn btn-dark mt-3">Registrar Reserva</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Reservas;
