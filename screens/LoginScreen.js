import AuthContent from "../components/Auth/AuthContent";
import { login } from "../utils/Auth";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import { useState, useContext } from "react";
import { Alert } from "react-native";
import { AuthContext } from "../store/auth-context";

function LoginScreen() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const { authenticate } = useContext(AuthContext);
  async function loginHandler({ email, password }) {
    setIsAuthenticated(true);
    try {
      const token = await login(email, password);
      authenticate(token);
    } catch (error) {
      Alert.alert(
        "Authentication Failed",
        "you could not to login try again later"
      );
      setIsAuthenticated(false);
    }
  }
  if (isAuthenticated) {
    return <LoadingOverlay message="login user..." />;
  }
  return <AuthContent isLogin onAuthenticate={loginHandler} />;
}

export default LoginScreen;
