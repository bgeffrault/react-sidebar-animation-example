import Box from "@mui/material/Box";
import Switch from "@mui/material/Switch";
import { FormControlLabel } from "@mui/material";

export const Header = ({
  handleLeftToggleSidebar,
  setLeftFullWidth,
  toggleRightSidebar,
  setRightFullWidth,
}) => {
  return (
    <Box
      component="header"
      sx={{
        display: "flex",
        width: "100%",
        backgroundColor: "grey.50",
        alignItems: "center",
        justifyContent: "center",
        padding: 1,
        gap: 2,
        borderBottom: "1px solid",
        borderColor: "grey.300",
        height: "55px",
        overflow: "auto",
      }}
    >
      <FormControlLabel
        control={<Switch onChange={handleLeftToggleSidebar} />}
        label={"Left"}
      />
      <FormControlLabel
        control={<Switch onChange={() => setLeftFullWidth((v) => !v)} />}
        label="Left fullWidth"
      />
      <FormControlLabel
        control={<Switch onChange={toggleRightSidebar} defaultChecked />}
        label="Right"
      />
      <FormControlLabel
        control={<Switch onChange={() => setRightFullWidth((v) => !v)} />}
        label="Right fullWidth"
      />
    </Box>
  );
};
