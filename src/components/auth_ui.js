import { useState } from "react";

const Auth_UI = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  return isAuthenticated ? (
    <button
      type="button"
      className="authbtn"
      onClick={() => setIsAuthenticated(false)}
    >
      Logout
    </button>
  ) : (
    <button
      type="button"
      className="authbtn"
      onClick={() => setIsAuthenticated(true)}
    >
      Login
    </button>
  );
};

export default Auth_UI;
