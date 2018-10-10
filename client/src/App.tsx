import * as React from "react";
import "./App.css";
import SideBar from "./components/SideBar";
import TopBar from "./components/TopBar";

class App extends React.Component {
  public render() {
    return (
      <div>
        <TopBar />
        <SideBar />
        <main>DashBoard</main>
      </div>
    );
  }
}

export default App;
