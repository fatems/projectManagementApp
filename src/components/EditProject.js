import { Typography, Divider, TextField, Box, Button } from "@mui/material";
import GroupAddOutlinedIcon from "@mui/icons-material/GroupAddOutlined";
import PersonAddOutlinedIcon from "@mui/icons-material/PersonAddOutlined";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import AddIcon from "@mui/icons-material/Add";
import UploadFileIcon from "@mui/icons-material/UploadFile";

import { useState } from "react";
import dayjs from "dayjs";

const EditProject = (props) => {


  const [startValue, setStartValue] = useState(dayjs());
  const [endValue, setEndValue] = useState(dayjs());

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
    <>
      <Typography variant="p" sx={{ fontWeight: "bold", fontSize: "1.05rem" }}>
        تنظیمات پروژه
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
            />
          </Box>
        </Box>

        <Box sx={{ width: "85%" }}>
          <Box sx={{ display: "flex", alignItems: "center", mb: "20px" }}>
            <Typography variant="p" sx={{ mr: "20px" }}>
              مدیر پروژه:
            </Typography>
            <Button
              variant="contained"
              endIcon={<PersonAddOutlinedIcon />}
              sx={{ fontWeight: "bold", fontSize: "1rem", ml: "12px" }}
            >
              افزودن
            </Button>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", mb: "20px" }}>
            <Typography variant="p" sx={{ mr: "20px" }}>
              هم تیمی ها:
            </Typography>
            <Button
              variant="contained"
              endIcon={<GroupAddOutlinedIcon />}
              sx={{ fontWeight: "bold", fontSize: "1rem",  }}
            >
              افزودن
            </Button>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", mb: "20px" }}>
            <Typography variant="p" sx={{ mr: "24px" }}>
              تاریخ شروع:
            </Typography>
              
            <LocalizationProvider  dateAdapter={AdapterDayjs}>
              <DateTimePicker
                value={startValue}
                onChange={startTimeChangeHandler}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", mb: "20px" }}>
            <Typography variant="p" sx={{ mr: "27px" }}>
              تاریخ اتمام:
            </Typography>
            <LocalizationProvider dateAdapter={AdapterDayjs} sx={{ ml: "4px" }}>
              <DateTimePicker
                value={endValue}
                onChange={endTimeChangeHandler}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", mb: "20px" }}>
            <Typography variant="p" sx={{ mr: "20px" }}>
              برچسب ها:
            </Typography>
            <Button
              variant="contained"
              endIcon={<AddIcon />}
              sx={{ fontWeight: "bold", fontSize: "1rem", ml: "7px" }}
            >
              افزودن
            </Button>
          </Box>

          <Box sx={{ display: "flex", alignItems: "top", mb: "30px" }}>
            <Typography variant="p" sx={{ mr: "20px" }}>
              توضیحات:
            </Typography>
            <Box sx={{ width: "100%", ml: "14px" }}>
              <TextField
                id="outlined-multiline-flexible"
                label="توضیحات"
                multiline
                rows={5}
                variant="filled"
                sx={{ width: "100%" }}
              />
            </Box>
          </Box>

          <Box sx={{ display: "flex", alignItems: "top", mb: "30px" }}>
            <Typography variant="p" sx={{ mr: "20px" }}>
              پیوست فایل:
            </Typography>
            <Box
              sx={{
                width: "100%",
                ml: "10px",
                textAlign: "center",
                padding: "20px",
                border: "2px grey dashed",
                borderRadius: "9px",
                backgroundColor: "#f0f0f0",
              }}
            >
              {/* <TextField
                id="outlined-multiline-flexible"
                label="توضیحات"
                multiline
                rows={5}
                variant="filled"
                sx={{width:'100%'}}
              /> */}
              {/* <Typography sx={{my:"15px"}}>برای افزودن، فایل را به اینجا بکشید یا </Typography> */}
              <Button
                variant="contained"
                component="label"
                color="primary"
                endIcon={<UploadFileIcon />}
                sx={{
                  fontWeight: "bold",
                  fontSize: "1rem",
                  mr: "3px",
                  my: "15px",
                }}
              >
                {" "}
                افزودن فایل
                <input type="file" multiple style={{ display: "none" }} />
              </Button>
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
    </>
  );
};
export default EditProject;
