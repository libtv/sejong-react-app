import { useSelector } from "react-redux";
import IBizVNSTable from "./IBizVNSTable";

export default function IBizVNSTableList() {
    const loginstate = useSelector((state) => {
        return state.ibizReducer;
    });

    const myList = loginstate.vnstablelist;

    return (
        <div className="IBizVNSTableList">
            {Array.isArray(myList)
                ? myList.map((vns) => (
                      <div>
                          <IBizVNSTable vns={vns} key={vns.vnsIdx}></IBizVNSTable>
                      </div>
                  ))
                : ""}
        </div>
    );
}
