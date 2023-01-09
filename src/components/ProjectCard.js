import { Paper, Typography, Box } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
const ProjectCard = (props) => {
  const { projectName, dueDate } = props;

  return (
    <Paper
      elevation={2}
      sx={{
          position: "relative", 
        padding: "15px 25px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        mb: "15px",
      }}
    >
      <MoreHorizIcon fontSize="large" sx={{position: "absolute", right: "14px", top: "7px" }} />
      <Typography variant="h6" sx={{ fontWeight: "bold" }}>
        {projectName}
      </Typography>
      <Box sx={{ display: "flex", mt: "5px" }}>
        <CircleIcon sx={{ mr: "5px" }} />
        <Typography variant="p">{dueDate}</Typography>
      </Box>
    </Paper>
  );
};

export default ProjectCard;
