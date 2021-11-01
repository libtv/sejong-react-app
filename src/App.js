import { Route } from "react-router-dom";
import CDBizComponent from "./components/biz/CDBizComponent";
import HomeComponent from "./components/HomeComponent";
import GBizComponent from "./components/biz/GBizComponent";
import IBizComponent from "./components/biz/IBizComponent";
import { createGlobalStyle } from "styled-components";
import IBizMain from "./components/ibiz/IBizMain";
import IBizRegister from "./components/ibiz/IBizRegister";

const GlobalStyle = createGlobalStyle`
  html {
    scroll-behavior: smooth;
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
            <Route path={"/login"} component={IBizMain} />
            <Route path={"/register"} component={IBizRegister} />
        </div>
    );
}

export default App;
