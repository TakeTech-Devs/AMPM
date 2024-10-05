import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ children, isConsumer, isReseller }) {

  const { consumer, reseller, loading, isAuthenticated } = useSelector(
    (state) => state.user
  );

  if (loading) {
    return null; // or a loader component
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  if (isConsumer && consumer.type !== "consumer") {
    return <Navigate to="/login" />;
  }

  if (isReseller && reseller.type !== "reseller") {
    return <Navigate to="/login" />;
  }

  return children;
}

export default ProtectedRoute;
