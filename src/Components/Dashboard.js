import Box from "@mui/material/Box";
import Switch from "@mui/material/Switch";
import {
  Avatar,
  FormControlLabel,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import FolderIcon from "@mui/icons-material/Folder";
import DeleteIcon from "@mui/icons-material/Delete";
import BasicList from "./BasicList";
import { useState } from "react";
import { useSidebar, SidebarContainer } from "react-sidebar-animation";

const SIDEBAR_WIDTH = 320;

export const Dashboard = () => {
  const { palette } = useTheme();
  const [leftFullWidth, setLeftFullWidth] = useState(false);
  const [rightFullWidth, setRightFullWidth] = useState(false);
  const {
    toggleSidebar: handleRightToggleSidebar,
    open: rightOpen,
    state: rightState,
  } = useSidebar({
    initiallyOpen: true,
    sidebarWidth: SIDEBAR_WIDTH,
    fullWidth: rightFullWidth,
  });

  const {
    toggleSidebar: handleLeftToggleSidebar,
    state: leftState,
    open: leftOpen,
  } = useSidebar({
    initiallyOpen: false,
    sidebarWidth: SIDEBAR_WIDTH,
    leftSide: true,
    fullWidth: leftFullWidth,
  });

  // return (
  //   <div
  //     style={{
  //       position: "relative",
  //       display: "flex",
  //       height: "100vh",
  //       width: "100vw",
  //     }}
  //   >
  //     <div
  //       style={{
  //         flexGrow: 1,
  //         padding: "16px",
  //       }}
  //     >
  //       <button onClick={handleRightToggleSidebar}>Toggle sidebar</button>
  //     </div>
  //     <SidebarContainer
  //       {...rightState}
  //       style={{
  //         backgroundImage: `linear-gradient(
  //             120deg,
  //             hsl(240deg 100% 20%) 0%,
  //             hsl(289deg 100% 21%) 11%,
  //             hsl(315deg 100% 27%) 20%,
  //             hsl(329deg 100% 36%) 29%,
  //             hsl(337deg 100% 43%) 38%,
  //             hsl(357deg 91% 59%) 46%,
  //             hsl(17deg 100% 59%) 56%,
  //             hsl(34deg 100% 53%) 68%,
  //             hsl(45deg 100% 50%) 82%,
  //             hsl(55deg 100% 50%) 100%
  //         )`,
  //         color: "white",
  //         padding: "8px",
  //       }}
  //     >
  //       <div>Sidebar</div>
  //     </SidebarContainer>
  //   </div>
  // );

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        component="header"
        sx={{
          display: "flex",
          width: "100%",
          backgroundColor: "grey.50",
          alignItems: "center",
          padding: 1,
          gap: 2,
          borderBottom: "1px solid",
          borderColor: "grey.300",
          height: "55px",
          overflow: "auto",
        }}
      >
        <Typography>
          <strong>Sidebar animations demo</strong>
        </Typography>

        <FormControlLabel
          control={<Switch onChange={handleLeftToggleSidebar} />}
          label={"Left"}
        />
        <FormControlLabel
          control={<Switch onChange={() => setLeftFullWidth((v) => !v)} />}
          label="Left fullWidth"
        />
        <FormControlLabel
          control={
            <Switch onChange={handleRightToggleSidebar} defaultChecked />
          }
          label="Right"
        />
        <FormControlLabel
          control={<Switch onChange={() => setRightFullWidth((v) => !v)} />}
          label="Right fullWidth"
        />
      </Box>
      <Box
        sx={{
          position: "relative",
          display: "flex",
          flexGrow: 1,
          height: "calc(100% - 55px)",
        }}
      >
        <SidebarContainer
          {...leftState}
          style={{
            // backgroundColor: palette.primary.light,
            backgroundImage: `linear-gradient(
              220deg,
              hsl(240deg 100% 20%) 0%,
              hsl(289deg 100% 21%) 11%,
              hsl(315deg 100% 27%) 20%,
              hsl(329deg 100% 36%) 29%,
              hsl(337deg 100% 43%) 38%,
              hsl(357deg 91% 59%) 46%,
              hsl(17deg 100% 59%) 56%,
              hsl(34deg 100% 53%) 68%,
              hsl(45deg 100% 50%) 82%,
              hsl(55deg 100% 50%) 100%
            )`,
            color: "white",
            padding: "8px",
            boxShadow: "2px 0px 2px 1px rgba(0, 0, 0, 0.2)",
            marginRight: "2px",
          }}
        >
          <SidebarContent />
        </SidebarContainer>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            flexGrow: 1,
            overflow: "auto",
            boxSizing: "border-box",
          }}
          p={2}
        >
          <Typography component="div" style={{ width: 300 }}>
            <p>Left sidebar is {leftOpen ? "open" : "closed"}.</p>
            <p>Right sidebar is {rightOpen ? "open" : "closed"}.</p>
          </Typography>
          <Box sx={{ bgcolor: "grey.200", borderRadius: 2 }}>
            <List>
              {Array(10)
                .fill()
                .map((_, i) => (
                  <ListItem
                    key={i}
                    secondaryAction={
                      <IconButton edge="end" aria-label="delete">
                        <DeleteIcon />
                      </IconButton>
                    }
                    component="nav"
                  >
                    <ListItemAvatar>
                      <Avatar>
                        <FolderIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary="Single-line item"
                      secondary={"Secondary text"}
                    />
                  </ListItem>
                ))}
            </List>
          </Box>
        </Box>
        <SidebarContainer
          {...rightState}
          style={{
            backgroundImage: `linear-gradient(
              120deg,
              hsl(240deg 100% 20%) 0%,
              hsl(289deg 100% 21%) 11%,
              hsl(315deg 100% 27%) 20%,
              hsl(329deg 100% 36%) 29%,
              hsl(337deg 100% 43%) 38%,
              hsl(357deg 91% 59%) 46%,
              hsl(17deg 100% 59%) 56%,
              hsl(34deg 100% 53%) 68%,
              hsl(45deg 100% 50%) 82%,
              hsl(55deg 100% 50%) 100%
          )`,
            // backgroundColor: palette.primary.light,
            color: "white",
            padding: "8px",
            borderColor: palette.primary.dark,
            borderLeft: "10px solid red",
          }}
        >
          <SidebarContent />
        </SidebarContainer>
      </Box>
    </Box>
  );
};

const SidebarContent = () => {
  return (
    <div p={2}>
      Sidebar
      <Typography>
        <strong>A cool title</strong>
      </Typography>
      <BasicList />
    </div>
  );
};
