import { Paper, Typography } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";

const Tag = (props) => {
  return (
    <Paper
      elevation={2}
      sx={{
        borderRadius: "20px",
        display: "flex",
        alignItems: "center",
        px: "5px",
        mr: "7px",
      }}
      endIcon
    >
      <Typography variant="p" sx={{ fontSize: ".8rem", mr: "5px" }}>
        {props.tag}
      </Typography>
      <ClearIcon
        sx={{ fontSize: ".7rem" }}
        onClick={() => {
          props.onDelete(props.tag);
        }}
      />
    </Paper>
  );
};

export default Tag;
