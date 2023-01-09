import { Box, Paper, Typography } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Priority from "./Priority";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

const ActivityCard = (props) => {
  var i = 0;
  const clickHandler = () => {
    return props.onOpenModal();
  };
  return (
    <Paper
        onClick= { clickHandler }

      elevation={2}
      sx={{
        padding: "10px 15px",
        fontSize: ".8rem",
        width: "230px",
        position: "relative",
        mb: "10px",
      }}
    >
      <MoreHorizIcon sx={{ position: "absolute", right: "10px", top: "5px" }} />
      <Typography variant="p" fontWeight="bold">
        {props.cardName}
      </Typography>
      <Box>
        {props.assignees.map((assignee) => {
          if (i === 0) {
            return <AccountCircleIcon />;
          }
          return (
            <AccountCircleIcon sx={{ position: "relative", left: "15px" }} />
          );
        })}
      </Box>

      <Priority priority={props.priority} />
      <Box sx={{ display: "flex", alignItems: "center", mt: "8px" }}>
        <Typography variant="p" sx={{ fontWeight: "light", fontSize: ".6rem" }}>
          {props.startDate}
        </Typography>
        <ArrowBackIcon sx={{ fontSize: "90%", mx: "3px" }} />
        <Typography variant="p" sx={{ fontWeight: "light", fontSize: ".6rem" }}>
          {props.dueDate}
        </Typography>
      </Box>

      <Box
        sx={{
          borderRadius: "0 0 5px 5px",
          position: "absolute",
          bottom: "0",
          left: 0,
          right: 0,
          height: "4px",
          width: "100%",
          backgroundColor: props.color,
        }}
      ></Box>
    </Paper>
  );
};

export default ActivityCard;
