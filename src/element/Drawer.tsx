import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";

import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { BsInbox } from "react-icons/bs";
import { DiMailchimp } from "react-icons/di";
import { styled } from "@mui/material";
interface drawerType {
  open: boolean;
  toggleDrawer: (newOpen: boolean) => () => void;
}
const CustomDrawer = styled(Drawer)(({ theme }) => ({
  ".css-4nmryk-MuiBackdrop-root-MuiModal-backdrop": {
    backgroundColor: "#03030350",
    backdropFilter: "blur(2px)",
  },

  [theme.breakpoints.up("sm")]: {
    ".css-cyqh1t-MuiPaper-root-MuiDrawer-paper ": {
      width: "50%",
    },
  },
  [theme.breakpoints.down("sm")]: {
    ".css-cyqh1t-MuiPaper-root-MuiDrawer-paper ": {
      width: "80%",
    },
  },
}));
export default function TemporaryDrawer({ open, toggleDrawer }: drawerType) {
  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <BsInbox /> : <DiMailchimp />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <BsInbox /> : <DiMailchimp />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <CustomDrawer open={open} onClose={toggleDrawer(false)}>
      {DrawerList}
    </CustomDrawer>
  );
}
