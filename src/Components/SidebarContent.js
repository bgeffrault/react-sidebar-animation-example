import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import BasicList from "./BasicList";

export const SidebarContent = ({ blurMode }) => {
  return (
    <Box
      py={4}
      p={2}
      sx={
        blurMode
          ? {
              background: "#6b7b8a1f",
              borderRadius: "4px",
              boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
              backdropFilter: "blur(6.4px)",
              border: "1px solid #10427342",
            }
          : {}
      }
    >
      Sidebar
      <Typography>
        <strong>A cool title</strong>
      </Typography>
      <BasicList />
    </Box>
  );
};
