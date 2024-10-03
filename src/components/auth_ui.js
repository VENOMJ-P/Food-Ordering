import { useState } from "react";

const Auth_UI = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  return isAuthenticated ? (
    <button type="button" onClick={() => setIsAuthenticated(false)}>
      Logout
    </button>
  ) : (
    <button type="button" onClick={() => setIsAuthenticated(true)}>
      Login
    </button>
  );
};

export default Auth_UI;
