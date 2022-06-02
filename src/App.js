import React, { useState, useContext, useEffect } from "react";
import "./App.css";
import { getMonth } from "./util";
import Header1 from "./components/Header1";
import Sidebar from "./components/Sidebar";
import Month from "./components/Month";
import GlobalContext from "./context/GlobalContext";
import Modal1 from "./components/Modal1";
function App() {
  const [currenMonth, setCurrentMonth] = useState(getMonth());
  const { monthIndex, showEventModal } = useContext(GlobalContext);

  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex));
  }, [monthIndex]);

  return (
    <React.Fragment>
      {showEventModal && <Modal1 />}

      <div className="h-screen flex flex-col">
        <Header1 />
        <div className="calendario flex flex-1">
          <Sidebar />
          <Month month={currenMonth} />
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
