import { Box, Typography, Button, Grid } from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import ViewTimelineOutlinedIcon from "@mui/icons-material/ViewTimelineOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PeopleOutlineOutlinedIcon from "@mui/icons-material/PeopleOutlineOutlined";
import SmsOutlinedIcon from "@mui/icons-material/SmsOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import AddIcon from "@mui/icons-material/Add";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import CustomizedSelects from "../components/CustomizedSelects";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import SettingsIcon from "@mui/icons-material/Settings";

import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";

import { NavLink } from "react-router-dom";
import { fontFamily } from "@mui/system";
import ActivityCard from "../components/ActivityCard";
import Modal from "@mui/material/Modal";
import ModalSetup from "../components/ModalSetup";
import { useState } from "react";
import EditProject from "../components/EditProject";
import CardSetting from "../components/CardSetting";

import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const Workspace = (props) => {
  const params = useParams();

  const [correspondingProject] = useSelector((state) => {
    return state.projectsSlice.projects.filter(
      (project) => project.id === params.projectId
    );
  });
  const correspondingBoards = useSelector((state) => {
    return state.boardsSlice.boards.filter((board) => {
      return board.projectId === params.projectId;
    });
  });
  console.log(correspondingBoards);

  // const correspondingBoards2 = correspondingProject.boards.map((board) => {
  //   return board.boardName;
  // });
  // changeBasedOn={boardChangeHandler}
  const [chosenBoard, setChosenBoard] = useState({
    boardName: correspondingBoards[0].boardName,
    boardId: correspondingBoards[0].id,
  });
  const boardChangeHandler = (board, index) => {
    setChosenBoard({
      boardName: board,
      boardId: correspondingBoards[index].id,
    });
  };
  const correspondingColumns = useSelector((state) => {
    return state.columnsSlice.columns.filter((column) => {
      return (
        column.projectId === params.projectId &&
        column.boardId === chosenBoard.boardId
      );
    });
  });
  console.log(correspondingColumns);
  // console.log("cols nom: " + correspondingColumns.length);

  const colsAndCorrespondingCards = useSelector((state) => {
    return correspondingColumns.map((column) => {
      return {
        columnName: column.columnName,
        columnCards: state.cardsSlice.cards.filter((card) => {
          return (
            card.projectId === params.projectId &&
            card.boardId === chosenBoard.boardId &&
            card.columnId === column.id
          );
        }),
      };
    });
  });
  // console.log(colsAndCorrespondingCards);

  //for project setting modal control
  const [openEditProject, setOpenEditProject] = useState(false);
  const openEditProjectModal = () => {
    setOpenEditProject(true);
  };
  const closeEditProjectModal = () => {
    setOpenEditProject(false);
  };

  //for card setting modal control
  const [openCardSetting, setOpenCardSetting] = useState(false);
  const openCardSettingModal = () => {
    setOpenCardSetting(true);
  };
  const closeCardSettingModal = () => {
    setOpenCardSetting(false);
  };

  return (
    <>
    
      <Modal
        open={openEditProject}
        onClose={closeEditProjectModal}
        sx={{ overflow: "scroll" }}
      >
      
        <ModalSetup>
          <EditProject onClose={closeEditProjectModal} />
        </ModalSetup>
       
        
      </Modal>
      <Modal
        open={openCardSetting}
        onClose={closeCardSettingModal}
        sx={{ overflow: "scroll" }}
      >
        <ModalSetup>
          <CardSetting onClose={closeCardSettingModal} />
        </ModalSetup>
      </Modal>
      <Box
        sx={{
          height: "100vh",
        }}
      >
        <Box
          sx={{
            display: "flex",
          }}
        >
          <Grid container height="fit-content" spacing={2}>
            <Grid item md="8" sm="12"  height="fit-content">
              <Box sx={{ mt: "15px" }}>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <InfoOutlinedIcon />
                  <Typography variant="h6" sx={{ ml: "7px", mb: "5px" }}>
                    {correspondingProject.projectName}
                  </Typography>
                </Box>

                <Box>
                  <Button
                    style={{ color: "black", fontSize: "1.025rem" }}
                    startIcon={<ViewTimelineOutlinedIcon />}
                  >
                    نمایش زمانی
                  </Button>
                  <Button
                    style={{ color: "black", fontSize: "1.025rem" }}
                    startIcon={<ArticleOutlinedIcon />}
                  >
                    داکیومنت پروژه
                  </Button>
                  <Button
                    style={{ color: "black", fontSize: "1.025rem" }}
                    startIcon={<SmsOutlinedIcon />}
                  >
                    مباحث پروژه
                  </Button>
                  <Button
                    style={{ color: "black", fontSize: "1.025rem" }}
                    startIcon={<PeopleOutlineOutlinedIcon />}
                  >
                    اعضا
                  </Button>
                  <Button
                    style={{ color: "black", fontSize: "1.025rem" }}
                    startIcon={<SettingsOutlinedIcon />}
                    onClick={openEditProjectModal}
                  >
                    تنظیمات پروژه
                  </Button>
                </Box>
              </Box>
            </Grid>
            <Grid item  md="4" sm="12"  sx={{ position: "relative", }}>
              {/* <Box sx={{ position: "relative",  }}> */}
              <Box
                sx={{
                  position: { md: "absolute" },
                  // display: { sm: "block" },
                  right: "0",
                  top: "30px",
                  buttom: "30px",
                  
                  

                  // mt: "0"
                }}
              >
                <Button
                  variant="contained"
                  sx={{
                    width: "200px",
                    // mb: "5px",
                    fontSize: "1rem",
                    height: "fit-content",
                  }}
                  endIcon={<AddIcon />}
                >
                  ایجاد بورد جدید
                </Button>
                <CustomizedSelects
                  options={correspondingBoards.map((board) => board.boardName)}
                  changeBasedOn={boardChangeHandler}
                  sx={{
                    width: "200px",
                    display: "flex",
                    flexGrow: 1,
                    fontSize: "1rem",
                    height: "fit-content",
                  }}
                />
              </Box>
              {/* </Box> */}
            </Grid>
            
            <Grid item xs="12">
              <Box
                // startIcon={<SettingsIcon />}
                sx={{
                  // mb: "15px",
                  backgroundColor: "#946C97",
                  height: "50px",
                  display: "flex",
                  alignItems: "center",
                  position: "relative",
                  mt: "10px",
                }}
              >
                <KeyboardArrowRightIcon sx={{ color: "white", ml: "30px" }} />
                <Typography
                  variant="h6"
                  sx={{ fontWeight: "bold", color: "white" }}
                >
                  {chosenBoard.boardName}
                </Typography>
                <KeyboardArrowLeftIcon sx={{ color: "white" }} />
                <SettingsIcon
                  sx={{ color: "white", position: "absolute", right: "45px" }}
                  onClick={openEditProjectModal}
                />
              </Box>
            </Grid>

            {/* links */}
            <Grid item lg="12" xs="6" >
              <Typography
                variant="p"
                sx={{
                  fontWeight: "bold",
                  fontSize: ".85rem",
                  mr: "25px",
                  mt: 0,
                }}
              >
                بر اساس
              </Typography>
              <Button
                component={NavLink}
                to="/workspace"
                sx={{
                  "&:active": {
                    fontWeight: "bold",
                  },
                  color: "black",
                  fontFamily: "Shabnam",
                  fontSize: ".85rem",
                  fontWeight: "light",
                }}
              >
                وضعیت
              </Button>
              <Button
                component={NavLink}
                to="/workspace"
                sx={{
                  "&:active": {
                    fontWeight: "bold",
                  },
                  color: "black",
                  fontFamily: "Shabnam",
                  fontSize: ".85rem",
                  fontWeight: "light",
                }}
              >
                کار های من
              </Button>
              <Button
                component={NavLink}
                to="/workspace"
                sx={{
                  "&:active": {
                    fontWeight: "bold",
                  },
                  color: "black",
                  fontFamily: "Shabnam",
                  fontSize: ".85rem",
                  fontWeight: "light",
                }}
              >
                اولویت
              </Button>
              <Button
                component={NavLink}
                to="/workspace"
                sx={{
                  "&:active": {
                    fontWeight: "bold",
                  },
                  color: "black",
                  fontFamily: "Shabnam",
                  fontSize: ".85rem",
                  fontWeight: "light",
                }}
              >
                موعد
              </Button>
              <Button
                component={NavLink}
                to="/workspace"
                sx={{
                  "&:active": {
                    fontWeight: "bold",
                  },
                  color: "black",
                  fontFamily: "Shabnam",
                  fontSize: ".85rem",
                  fontWeight: "light",
                }}
              >
                همه
              </Button>
            </Grid>

            {/* <Box sx={{overflowX: "scroll" }}>
              <Box> */}
            <Grid item xs={12}>
              <ImageList
                overflowX="auto"
                // rowHeight= {200}
                cols={correspondingColumns.length + 1}
                sx={{
                  py: "10px",
                  my: "45px",
                  gridTemplateColumns:
                    "repeat(auto-fill,minmax(240px,1fr)) !important",
                  gridAutoFlow: "column",
                  gridAutoColumns: "minmax(230px, 1fr)",
                }}
              >
                <ImageListItem>
                  <Box
                    // onClick={addNewColumnHandler}
                    sx={{
                      width: "230px",
                      height: "100px",
                      border: "2px  dashed grey",
                      borderRadius: "5px",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      ml: "20px",
                      position: "relative",
                      top: "35px",
                    }}
                  >
                    <Typography variant="p" sx={{ fontWeight: "bold" }}>
                      افزودن ستون جدید
                    </Typography>
                    <AddCircleOutlineRoundedIcon />
                  </Box>
                </ImageListItem>
                {/* need to retrieve corresponding card for here */}

                {colsAndCorrespondingCards.map((column) => {
                  return (
                    <ImageListItem
                      // minWidth="250px"
                      sx={{ ml: "20px", mb: "30px" }}
                    >
                      <Box sx={{ position: "relative", mb: "10px" }}>
                        <Typography variant="p" sx={{ fontWeight: "600" }}>
                          {column.columnName}
                        </Typography>
                        <Box
                          sx={{
                            backgroundColor: "#FF4848",
                            display: "inline",
                            padding: "0 8px",
                            borderRadius: "100px",
                            position: "relative",
                            bottom: "10px",
                          }}
                        >
                          <Typography
                            variant="p"
                            sx={{
                              fontSize: ".55rem",
                              padding: 0,
                              margin: 0,
                              fontWeight: "bold",
                              color: "white",
                            }}
                          >
                            {column.columnCards.length}
                          </Typography>
                        </Box>
                        <Button
                          variant="contained"
                          startIcon={<AddIcon />}
                          sx={{
                            fontFamily: "Shabnam",
                            fontSize: ".70rem",
                            padding: "3px 5px",
                            position: "absolute",
                            right: "-10px",
                          }}
                        >
                          افزودن کارت
                        </Button>
                      </Box>

                      {column.columnCards.map((card) => {
                        return (
                          <ActivityCard
                            key={card.id}
                            cardName={card.cardName}
                            assignees={card.assignees}
                            priority={card.priority}
                            startDate={card.startDate}
                            dueDate={card.dueDate}
                            color={card.color}
                            onOpenModal={openCardSettingModal}
                          />
                        );
                      })}
                      {/* </Box> */}
                    </ImageListItem>
                  );
                })}
              </ImageList>
            </Grid>
            {/* </Box>
            </Box> */}
            {/* </Box> */}
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default Workspace;
