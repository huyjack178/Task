import * as React from "react";
import "./App.css";
import SideBar from "./components/SideBar";

class App extends React.Component {
  public render() {
    return (
      <div>
        <SideBar />
        <main>DashBoard</main>
      </div>
    );
  }
}

export default App;