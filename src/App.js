import { Route } from "react-router-dom";
import CDBizComponent from "./components/biz/CDBizComponent";
import HomeComponent from "./components/HomeComponent";
import GBizComponent from "./components/biz/GBizComponent";
import IBizComponent from "./components/biz/IBizComponent";

function App() {
    return (
        <div className="App">
            <Route path={"/"} exact={true} component={HomeComponent} />
            <Route path={"/cdbiz"} component={CDBizComponent} />
            <Route path={"/gbiz"} component={GBizComponent} />
            <Route path={"/ibiz"} component={IBizComponent} />
        </div>
    );
}

export default App;
