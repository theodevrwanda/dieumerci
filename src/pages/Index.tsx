import { Navigate } from 'react-router-dom';

const Index = () => {
  // Redirect to Home page since we're using Home as the main page
  return <Navigate to="/" replace />;
};

export default Index;
