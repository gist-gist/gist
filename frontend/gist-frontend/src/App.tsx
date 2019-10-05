import React from "react";
import { theme } from "./Helpers/theme";
import LoginPageComponent from "./Components/LoginPageComponent";

const App: React.FC = () => {
  return <LoginPageComponent theme={theme} />;
};

export default App;
