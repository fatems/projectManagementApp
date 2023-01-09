import { Box, Paper, Typography } from "@mui/material";
const Priority = (props) => {
  let bgColor;
  if (props.priority === "زیاد") {
    bgColor = "rgba(248, 43, 12, 0.5)";
  }
  if (props.priority === "متوسط") {
    bgColor = "rgba(255, 132, 36, 0.64)";
  }
  if (props.priority === "کم") {
    bgColor = "rgba(255, 203, 36, 0.64)";
  }
  return (
    <Box
      sx={{
        backgroundColor: bgColor,
        borderRadius: "4px",
        width: "50px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Typography variant="p" sx={{ fontSize: ".65rem" }}>
        {props.priority}
      </Typography>
    </Box>
  );
};

export default Priority;
