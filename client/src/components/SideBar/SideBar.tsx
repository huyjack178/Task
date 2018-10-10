import Drawer from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import * as React from "react";

export interface SideBarState {
  selectedIndex: number;
  open: boolean;
}

export default class SideBar extends React.Component<any, SideBarState> {
  public componentWillMount = () => {
    this.setState({ selectedIndex: 0, open: true });
  };

  public handleListItemClick = (index: number) => {
    this.setState({ selectedIndex: index });
  };

  public handleDrawerClose = () => {
    this.setState({ open: false });
  };

  public handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  public render() {
    return (
      <div>
        <Drawer variant="permanent" open={this.state.open}>
          <div>
            <IconButton onClick={this.handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
        </Drawer>
      </div>
    );
  }
}
