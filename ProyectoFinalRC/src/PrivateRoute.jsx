import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const PrivateRoute = ({ isAllowed, children }) => {
  if (!isAllowed) {
    return <Navigate to='/' />;
  } else {
    return children;
  }
};

PrivateRoute.propTypes = {
  isAllowed: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};

export default PrivateRoute;
