import Grid from "@material-ui/core/Grid";

import * as React from "react";
import "./App.css";
import TopBar from "./components/TopBar";

class App extends React.Component {
  public render() {
    return (
      <Grid container={true} spacing={16}>
        <TopBar />
        <Grid item={true} xs={2}>
          SideBav
        </Grid>
        <Grid item={true} xs={10}>
          Main
        </Grid>
      </Grid>
    );
  }
}

export default App;
