import AuthContent from "../components/Auth/AuthContent";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import { AuthContext } from "../store/auth-context";
import { createUser } from "../utils/Auth";
import { useState, useContext } from "react";
import { Alert } from "react-native";

function SignupScreen() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const { authenticate } = useContext(AuthContext);
  async function signUpHandler({ email, password }) {
    setIsAuthenticated(true);
    try {
      const token = await createUser(email, password);
      authenticate(token);
    } catch (error) {
      Alert.alert(
        "Authentication Failed",
        "you could not to signup try again later"
      );
      setIsAuthenticated(false);
    }
  }

  if (isAuthenticated) {
    return <LoadingOverlay message="creating user..." />;
  }
  return <AuthContent onAuthenticate={signUpHandler} />;
}

export default SignupScreen;
