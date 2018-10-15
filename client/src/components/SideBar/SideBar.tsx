import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Drawer from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import DraftsIcon from "@material-ui/icons/Drafts";
import MenuIcon from "@material-ui/icons/Menu";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import SendIcon from "@material-ui/icons/Send";
import * as React from "react";
import "./style.scss";

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
        <AppBar position="absolute">
          <Toolbar disableGutters={!this.state.open}>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              className="menu-btn"
              onClick={this.handleDrawerOpen}
            >
              <MenuIcon />
            </IconButton>
            <Typography color="inherit" className="title">
              Title
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={this.state.open}>
          <div>
            <IconButton onClick={this.handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <List>
            <ListItem button={true}>
              <ListItemIcon>
                <SendIcon />
              </ListItemIcon>
              <ListItemText inset={true} primary="Sent mail" />
            </ListItem>
            <ListItem button={true}>
              <ListItemIcon>
                <DraftsIcon />
              </ListItemIcon>
              <ListItemText inset={true} primary="Drafts" />
            </ListItem>
            <ListItem button={true}>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText inset={true} primary="Inbox" />
            </ListItem>
          </List>
        </Drawer>
      </div>
    );
  }
}
