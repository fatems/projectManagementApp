import { Typography, Divider, TextField, Box, Button } from "@mui/material";
import GroupAddOutlinedIcon from "@mui/icons-material/GroupAddOutlined";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import AddIcon from "@mui/icons-material/Add";
import { useDispatch, useSelector } from "react-redux";
import { useRef } from "react";

import { useState } from "react";
import dayjs from "dayjs";
import { newProject } from "../store/projectsSlice";
import { newBoard } from "../store/boardsSlice";

import Tag from "./Tag";

const NewPersonalProject = (props) => {
  const subjectRef = useRef("");
  // to dispatch actions created in slices
  const dispatch = useDispatch();
  // const [projectManager, setProjectManager] = useState(null);
  const [teammates, setTeammates] = useState([]);
  const [startValue, setStartValue] = useState(dayjs());
  const [endValue, setEndValue] = useState(dayjs());
  const hashtagFieldRef = useRef(null);
  const [tags, setTags] = useState([]);
  const descriptionRef = useRef("");
  const wholeProjects = useSelector((state) => state.projectsSlice.projects);

  const projectNumber =
    useSelector((state) => state.projectsSlice.projects.length) + 1;
  const submitHandler = () => {
    const newProj = {
      id: `p${projectNumber}`,
      projectName: subjectRef.current.value,
      projectManager: "سیده فاطمه سیدعباسی",
      teamMates: ["Person A", "PersonB"],
      ManagerAssistant: [],
      startDate: startValue.toString(),
      dueDate: endValue.toString(),
      hashtags: tags,
      description: descriptionRef.current.value,
    };
    const defaultBoard = {
      projectId: `p${projectNumber}`,
      id: `p${projectNumber}b1`,
      boardName: "بدون عنوان",
    };

    dispatch(newProject(newProj));
    dispatch(newBoard(defaultBoard));

    
    console.log(wholeProjects);
    props.onClose();
  };

  const deleteTagHandler = (t) => {
    setTags((tags) => {
      return tags.filter((tag) => {
        return tag !== t;
      });
    });
  };

  // const uname = localStorage.getItem("username");
  // console.log("i am ", uname);

  const startTimeChangeHandler = (newValue) => {
    setStartValue(newValue);
  };

  const endTimeChangeHandler = (newValue) => {
    setEndValue(newValue);
  };

  const handleReturn = () => {
    props.onClose();
  };

  return (
    <Box>
      <Typography variant="p" sx={{ fontWeight: "bold", fontSize: "1.05rem" }}>
        ایجاد پروژه شخصی
      </Typography>
      <Divider sx={{ m: "15px 0 25px" }} />
      <Box
        sx={{
          display: "flex",
          alignContent: "center",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            width: "95%",
            mb: "30px",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography variant="p" sx={{ mr: "20px" }}>
              موضوع:
            </Typography>
            <TextField
              id="filled-multiline-flexible"
              label="موضوع"
              multiline
              maxRows={4}
              variant="filled"
              sx={{ width: "100%" }}
              inputRef={subjectRef}
              // value={subjectRef}
            />
          </Box>
        </Box>

        <Box sx={{ width: "85%" }}>
          <Box sx={{ display: "flex", alignItems: "center", mb: "20px" }}>
            <Typography variant="p" sx={{ mr: "20px" }}>
              مدیر پروژه:
            </Typography>
            <Typography
              variant="p"
              sx={{ fontWeight: "bold", marginLeft: "7px" }}
            >
              سیده فاطمه سیدعباسی
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", mb: "20px" }}>
            <Typography variant="p" sx={{ mr: "20px" }}>
              هم تیمی ها:
            </Typography>
            <Button
              variant="contained"
              endIcon={<GroupAddOutlinedIcon />}
              sx={{ fontWeight: "bold", fontSize: "1rem" }}
            >
              افزودن
            </Button>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", mb: "20px" }}>
            <Typography variant="p" sx={{ mr: "20px" }}>
              تاریخ شروع:
            </Typography>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateTimePicker
                value={startValue}
                onChange={startTimeChangeHandler}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", mb: "20px" }}>
            <Typography variant="p" sx={{ mr: "20px" }}>
              تاریخ اتمام:
            </Typography>
            <Box sx={{ ml: "4px" }}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateTimePicker
                  value={endValue}
                  onChange={endTimeChangeHandler}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
            </Box>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", mb: "10px" }}>
            <Typography variant="p" sx={{ mr: "20px" }}>
              برچسب ها:
            </Typography>

            {/* /do i need to add *value=* prop in here? */}
            <TextField
              id="filled-basic"
              variant="filled"
              inputRef={hashtagFieldRef}
              sx={{ ml: "3px", mr: "10px" }}
            />
            <Button
              variant="contained"
              endIcon={<AddIcon />}
              sx={{ fontWeight: "bold", fontSize: "1rem" }}
              onClick={() => {
                setTags((tags) => {
                  console.log(hashtagFieldRef.current.value);
                  return [...tags, hashtagFieldRef.current.value];
                });
                hashtagFieldRef.current.value = "";
              }}
            >
              افزودن
            </Button>
          </Box>

          {tags.length > 0 && (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                mb: "20px",
                ml: "17%",
              }}
            >
              {tags.map((tag) => (
                <Tag tag={tag} onDelete={deleteTagHandler} />
              ))}
            </Box>
          )}
          <Box sx={{ display: "flex", alignItems: "top", mb: "30px" }}>
            <Typography variant="p" sx={{ mr: "20px" }}>
              توضیحات:
            </Typography>
            <Box sx={{ width: "100%", ml: "11px" }}>
              <TextField
                id="outlined-multiline-flexible"
                label="توضیحات"
                multiline
                rows={5}
                variant="filled"
                sx={{ width: "100%" }}
                inputRef={descriptionRef}
              />
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            width: "95%",
            display: "flex",
            justifyContent: "right",
            flexDirection: "ltr",
          }}
        >
          <Button
            variant="contained"
            sx={{
              fontWeight: "bold",
              fontSize: "1rem",
              width: "95.375px",
              height: "40px",
              mr: "10px",
            }}
            onClick={submitHandler}
          >
            ایجاد
          </Button>
          <Button
            variant="outlined"
            sx={{
              fontWeight: "bold",
              fontSize: "1rem",
              width: "95.375px",
              height: "40px",
            }}
            onClick={handleReturn}
          >
            بازگشت
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
export default NewPersonalProject;
