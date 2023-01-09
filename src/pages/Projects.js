import { Box, Button, Grid, Typography } from "@mui/material";
import CustomizedSelects from "../components/CustomizedSelects";
import ProjectCard2 from "../components/ProjectCard2";

import { useSelector } from "react-redux";

const Projects = () => {
  const projects2 = [
    { projectName: "پروژه A", dueDate: "موعد تحویل 1401/06/09 ساعت 00:00" },
    { projectName: "پروژه B", dueDate: "موعد تحویل 1401/06/11 ساعت 00:00" },
    { projectName: "پروژه C", dueDate: "موعد تحویل 1401/06/19 ساعت 00:00" },
  ];
  const handleSelectsChange = (baseOn, num) => {
    console.log(baseOn, num);
  };

  const projects = useSelector((state) => state.projectsSlice.projects);
  //  console.log(projects);

  return (
    <Box
      sx={{
        backgroundColor: "#F6F6F6",
        backgroundAttachment: "fixed",
        display: "flex",
        height: "120vh",
      }}
    >
      <Box
        sx={{
          display: "flex",
          height: "100vh",
          width: "100%",
        }}
      >
        <Box width="100%">
          <Box sx={{ padding: "30px" }}>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              همه پروژه ها
            </Typography>
            <CustomizedSelects
              options={["موعد تحویل", " جاری", "به اتمام رسیده"]}
              onChange={handleSelectsChange}
              sx={{
                display: "flex",
                mr: "0",
                flexGrow: "1",
                width: "150px",
              }}
              changeBasedOn={() => {}}
            />
            <Grid container spacing={2} sx={{ mt: "15px" }}>
              {projects.map((p) => {
                return (
                  <Grid item lg="4" xs="12" md="6">
                    <ProjectCard2
                      projectName={p.projectName}
                      dueDate={p.dueDate}
                      id={p.id}
                    />
                  </Grid>
                );
              })}
            </Grid>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Projects;
