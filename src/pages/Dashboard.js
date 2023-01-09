import { styled } from "@mui/system";
import { Box, Grid, Typography, Divider, Button, Paper } from "@mui/material";
import PersistentDrawerLeft from "../components/PersistantDrawerLeft";
import CustomizedSelects from "../components/CustomizedSelects";
import ProjectCard from "../components/ProjectCard";
import TodaysTask from "../components/TodaysTask";
import { Link } from "react-router-dom";

const Dashbaord = () => {
  const projects = [
    { projectName: "پروژه A", dueDate: "موعد تحویل 1401/06/09 ساعت 00:00" },
    { projectName: "پروژه B", dueDate: "موعد تحویل 1401/06/11 ساعت 00:00" },
    { projectName: "پروژه C", dueDate: "موعد تحویل 1401/06/19 ساعت 00:00" },
  ];

  const tasks = [
    { title: "کار A", relatedProject: "پروژه B" },
    { title: "کار B", relatedProject: "پروژه C" },
    { title: "کار C", relatedProject: "پروژه A" },
  ];

  return (
          
    <Box sx={{ backgroundAttachment: 'fixed', display: 'flex', height:"100vh"}}>
      <Box
        sx={{
          display: "flex",
          height: "100vh",
          width: "100%",
          
        }}
      >
        <Box width="100%">
          {/* <PersistentDrawerLeft> */}
            <Grid
              container
              rowSpacing={2}
            >
              {/* Projects */}
              <Grid item xs={12} md={6}>
                <Box sx={{ padding: "30px" }}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      flexDirection: "row",
                    }}
                  >
                    <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                      پروژه ها
                    </Typography>
                    <CustomizedSelects
                    options={["موعد تحویل"," جاری","به اتمام رسیده"]}
                      sx={{
                        display: "flex",
                        flexDirection: "row-reverse",
                        mr: "auto",
                        flexGrow: "1",
                      }}
                    changeBasedOn={()=>
                    {}}

                      
                    />
                  </Box>
                  <Divider sx={{ mt: "5px", mb: "20px" }} />
                  <Box>
                    {projects.map((project) => {
                      return (
                        <ProjectCard
                          projectName={project.projectName}
                          dueDate={project.dueDate}
                        />
                      );
                    })}
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      mt: "20px",
                    }}
                  >
                    <Button variant="contained" component={Link} to="/Projects">نمایش بیشتر</Button>
                  </Box>
                </Box>
              </Grid>

              {/* Tasks */}
              <Grid item xs={12} md={6}>
                <Box sx={{ padding: "30px" }}>
                  <Box

                    sx={{
                      display: "flex",
                      alignItems: "center",
                      // justifyConetent: "start",
                      flexDirection: "row",
                    }}
                  >
                    <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                      کار های امروز{" "}
                    </Typography>
                    <CustomizedSelects
                    options={["موعد تحویل"," جاری","به اتمام رسیده"]}

                      sx={{
                        visibility: "hidden",
                        display: "flex",
                        flexDirection: "row-reverse",
                        mr: "auto",
                        flexGrow: "1",
                      }}
                    />
                  </Box>
                  <Divider sx={{ mt: "5px", mb: "20px" }} />
                  <Box>
                    {tasks.map((task) => {
                      return (
                        <TodaysTask
                          title={task.title}
                          relatedProject={task.relatedProject}
                        />
                      );
                    })}
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      mt: "20px",
                    }}
                  >
                    <Button
                      variant="contained"
                      sx={{ position: "relative", top: "32px" }}
                    >
                      نمایش بیشتر
                    </Button>
                  </Box>
                </Box>
              </Grid>
            </Grid>

            <Box sx={{padding: '30px'}}>
              <Typography variant="h6" sx={{fontWeight: "bold", mb:"20px"}}>آمار پروژه ها</Typography>
              <Grid container columnSpacing={{ xs: 1, sm: 2, md: 2 }} rowSpacing={2}>
              <Grid item xs={12} sm={6} md={4}>
                <Paper elevation={2} sx={{padding: "25px 30px"}}>
                  <Typography variant="p" sx={{display:"block", fontSize: "1rem", fontWeight: "bold", mb: "20px"}}>پروژه های تمام شده</Typography>
                  <Typography variant="p" sx={{display:"block", fontSize: "1.1rem", fontWeight: "bold"}}>3</Typography>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Paper elevation={2} sx={{padding: "25px 30px"}}>
                  <Typography variant="p" sx={{display:"block", fontSize: "1rem", fontWeight: "bold", mb: "20px"}}>پروژه های تمام شده</Typography>
                  <Typography variant="p" sx={{display:"block", fontSize: "1.1rem", fontWeight: "bold"}}>3</Typography>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Paper elevation={2} sx={{padding: "25px 30px"}}>
                  <Typography variant="p" sx={{display:"block", fontSize: "1rem", fontWeight: "bold", mb: "20px"}}>پروژه های تمام شده</Typography>
                  <Typography variant="p" sx={{display:"block", fontSize: "1.1rem", fontWeight: "bold"}}>3</Typography>
                </Paper>
              </Grid>
            </Grid>
            </Box>
            
          {/* </PersistentDrawerLeft> */}
        </Box>
      </Box>
      </Box>
    
  );
};
export default Dashbaord;
