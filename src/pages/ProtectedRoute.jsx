import Button from "../components/elements/Button";
import { useAuth } from "../context/AuthContext";
import { useModal } from "../context/ModalContext";

const ProtectedRoute = ({ element }) => {
  const { user, loading } = useAuth();
  const { openModal } = useModal();

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen text-secondary-600">
        Loading...
      </div>
    );
  }

  return user ? (
    element
  ) : (
    <div className="flex flex-col items-center justify-center text-center h-full text-secondary-600">
      <h1 className="mb-3 font-bold">Start Your Journey with Us </h1>
      <p className="text-base text-secondary-500 mb-6">
        Sign in to access your trips, save your favorite places, check your
        messages, and manage your profile.
      </p>
      <Button
        variant="primary-gradient"
        onClick={() => openModal("LoginModal")}
      >
        Log in to Explore
      </Button>
    </div>
  );
};

export default ProtectedRoute;
