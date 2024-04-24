import "./index.css";
import Auth from "./Authentication";
import UnAuth from "./UnAuthenticaion";
import { useContext } from "react";
import { Context } from "./Context/Context";
function App() {
  const { signInData, signUpData } = useContext(Context);

  if (signUpData) {
    if (
      signUpData.newLogin == signInData.login &&
      signUpData.newPassword == signInData.password
    ) {
      return <Auth />;
    } else {
      return <UnAuth />;
    }
  } else {
    if (signInData.login == "Xasanxon" && signInData.password == 123) {
      return <Auth />;
    } else {
      return <UnAuth />;
    }
  }
}

export default App;
