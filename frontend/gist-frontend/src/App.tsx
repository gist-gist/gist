import React from "react";
import { theme } from "./theme";
import LoginPageComponent from "./gist-login/LoginPageComponent";

const App: React.FC = () => {
  return <LoginPageComponent theme={theme} />;
};

export default App;
