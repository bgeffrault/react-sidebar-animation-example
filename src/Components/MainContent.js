import Box from "@mui/material/Box";
import {
  Avatar,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import FolderIcon from "@mui/icons-material/Folder";
import DeleteIcon from "@mui/icons-material/Delete";

const getStateLabel = (open, inTransition) => {
  if (open) {
    return inTransition ? "opening" : "open";
  }
  return inTransition ? "closing" : "closed";
};

export const MainContent = ({
  leftOpen,
  rightOpen,
  leftInTransition,
  rightInTransition,
}) => {
  return (
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
      <Typography variant="h4" gutterBottom>
        React Sidebar Animation demo
      </Typography>
      <Typography component="div" style={{ width: 300 }}>
        <p>Left sidebar is {getStateLabel(leftOpen, leftInTransition)}.</p>
        <p>Right sidebar is {getStateLabel(rightOpen, rightInTransition)}.</p>
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
  );
};
