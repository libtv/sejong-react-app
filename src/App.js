import { Route } from "react-router-dom";
import CDBizComponent from "./components/biz/CDBizComponent";
import HomeComponent from "./components/HomeComponent";
import GBizComponent from "./components/biz/GBizComponent";
import IBizComponent from "./components/biz/IBizComponent";
import { createGlobalStyle } from "styled-components";
import IBizMain from "./components/ibiz/IBizMain";
import LoginForm from "./components/member/LoginForm";
import RegisterForm from "./components/member/RegisterForm";

const GlobalStyle = createGlobalStyle`
  html {
    scroll-behavior: smooth;
    font-family: Poppins,Helvetica,sans-serif;
    font-weight: 400;
  }
`;

function App() {
    return (
        <div className="App">
            <GlobalStyle />
            <Route path={"/"} exact={true} component={HomeComponent} />
            <Route path={"/cdbiz"} component={CDBizComponent} />
            <Route path={"/gbiz"} component={GBizComponent} />
            <Route path={"/ibiz"} component={IBizComponent} />
            <Route path={"/main"} component={IBizMain} />
            <Route path={"/member"} component={LoginForm} />
            <Route path={"/register"} component={RegisterForm} />
        </div>
    );
}

export default App;
