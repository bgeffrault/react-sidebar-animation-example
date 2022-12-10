import Box from "@mui/material/Box";
import { useTheme } from "@mui/material";
import { useCallback, useState } from "react";
import { useSidebar, SidebarContainer } from "react-sidebar-animation";
import { Header } from "./Header";
import { MainContent } from "./MainContent";
import { SidebarContent } from "./SidebarContent";

const SIDEBAR_WIDTH = 320;

export const Dashboard = () => {
  const { palette } = useTheme();
  const [leftFullWidth, setLeftFullWidth] = useState(false);
  const [rightFullWidth, setRightFullWidth] = useState(false);
  const {
    toggleSidebar: toggleRightSidebar,
    open: rightOpen,
    state: rightState,
  } = useSidebar({
    initiallyOpen: true,
    sidebarWidth: SIDEBAR_WIDTH,
    fullWidth: rightFullWidth,
  });

  const {
    toggleSidebar: toggleLeftSidebar,
    state: leftState,
    open: leftOpen,
  } = useSidebar({
    initiallyOpen: false,
    sidebarWidth: SIDEBAR_WIDTH,
    leftSide: true,
    fullWidth: leftFullWidth,
  });
  const [leftInTransition, setLeftInTransition] = useState(false);
  const [rightInTransition, setRightInTransition] = useState(false);

  const handleRightToggleSidebar = useCallback(() => {
    setRightInTransition(true);
    toggleRightSidebar(() => {
      setRightInTransition(false);
    });
  }, [toggleRightSidebar]);

  const handleLeftToggleSidebar = useCallback(() => {
    setLeftInTransition(true);
    toggleLeftSidebar(() => {
      setLeftInTransition(false);
    });
  }, [toggleLeftSidebar]);

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Header
        handleLeftToggleSidebar={handleLeftToggleSidebar}
        setLeftFullWidth={setLeftFullWidth}
        toggleRightSidebar={handleRightToggleSidebar}
        setRightFullWidth={setRightFullWidth}
      />
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
            backgroundColor: palette.primary.light,
            color: "white",
            padding: "8px",
            boxShadow: `2px 0px 2px 1px ${palette.primary.dark}`,
            marginRight: "2px",
          }}
          zIndex={2}
        >
          <SidebarContent />
        </SidebarContainer>
        <MainContent
          leftOpen={leftOpen}
          rightOpen={rightOpen}
          leftInTransition={leftInTransition}
          rightInTransition={rightInTransition}
        />
        <SidebarContainer
          {...rightState}
          style={{
            backgroundImage: `linear-gradient(
              140deg,
              hsl(210deg 79% 46%) 0%,
              hsl(215deg 65% 50%) 21%,
              hsl(222deg 62% 54%) 30%,
              hsl(230deg 58% 57%) 39%,
              hsl(240deg 53% 59%) 46%,
              hsl(251deg 52% 57%) 54%,
              hsl(262deg 51% 54%) 61%,
              hsl(272deg 49% 51%) 69%,
              hsl(282deg 54% 47%) 79%,
              hsl(291deg 64% 42%) 100%
            )`,
            color: "white",
            padding: "8px",
            borderLeft: `2px solid ${palette.primary.dark}`,
          }}
        >
          <SidebarContent blurMode />
        </SidebarContainer>
      </Box>
    </Box>
  );
};
