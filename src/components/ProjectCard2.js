import { Paper, Typography, Box, Button } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
import { Link } from "react-router-dom";
// import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
const ProjectCard2 = (props) => {
  const { projectName, dueDate, id } = props;
  const path = `/Projects/${id}`;

  return (
    <Paper
      elevation={2}
      sx={{
        position: "relative",
        padding: "40px 40px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        // mb: "10px",
      }}
    >
      {/* <MoreHorizIcon fontSize="large" sx={{position: "absolute", right: "14px", top: "7px" }} /> */}
      <Typography variant="h6" sx={{ fontWeight: "bold", mb: "10px" }}>
        {projectName}
      </Typography>
      <Box sx={{ display: "flex", mt: "5px" }}>
        <CircleIcon sx={{ mr: "5px" }} />
        <Typography variant="p">{dueDate}</Typography>
      </Box>
      <Box
        sx={{ display: "flex", justifyContent: "center", marginTop: "30px" }}
      >
        <Button variant="contained" component={Link} to={path}>
          نمایش بیشتر
        </Button>
      </Box>
    </Paper>
  );
};

export default ProjectCard2;
