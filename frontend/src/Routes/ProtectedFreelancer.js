import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';

const ProtectedFreelancer = ({ children }) => {
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      enqueueSnackbar('You are not authorized to access this page', { variant: 'error' });
      navigate('/freeflexer-signin');
    }
  }, [navigate, enqueueSnackbar]);

  if (localStorage.getItem('user')) {

    const user = JSON.parse(localStorage.getItem('user'));
    if (user.role !== 'freelancer') {
      localStorage.removeItem('user');
      localStorage.removeItem('token');
      enqueueSnackbar('You are not authorized to access this page', { variant: 'error' });
    }
  }

  return localStorage.getItem('token') ? children : null;
};

export default ProtectedFreelancer;
