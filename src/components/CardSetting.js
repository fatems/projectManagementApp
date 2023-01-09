import { Typography, Divider, TextField, Box, Button } from "@mui/material";
import GroupAddOutlinedIcon from "@mui/icons-material/GroupAddOutlined";
import PersonAddOutlinedIcon from "@mui/icons-material/PersonAddOutlined";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import AddIcon from "@mui/icons-material/Add";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import CustomizedSelects from "./CustomizedSelects";

import { useState } from "react";
import dayjs from "dayjs";

const CardSetting = (props) => {
  const [cmsChosen, setCmsChosen] = useState(true);
  const [descChosen, setDescChosen] = useState(false);
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
        تنظیمات کارت
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
              عنوان:
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
              انتساب:
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
              اولویت:
            </Typography>
            <CustomizedSelects
              options={["", "زیاد", "متوسط", "کم"]}
              sx={{
                display: "flex",
                mr: "0",
              }}
            />
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
          <Box sx={{ display: "flex", alignItems: "center", mb: "20px" }}>
            <Typography variant="p" sx={{ mr: "24px" }}>
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
        </Box>
        <Box sx={{ width: "95%" }}>
          <Button
            onClick={() => {
              setCmsChosen(true);
              setDescChosen(false);
            }}
            sx={{ color: cmsChosen ? "purple" : "black" }}
          >
            نظر ها
          </Button>
          <Button
            onClick={() => {
              setCmsChosen(false);
              setDescChosen(true);
            }}
            sx={{ color: descChosen ? "purple" : "black" }}
          >
            توضیحات
          </Button>
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
            variant="outlined"
            sx={{
              fontWeight: "bold",
              fontSize: "1rem",
              width: "95.375px",
              height: "40px",
            }}
            onClick={handleReturn}
          >
            بستن
          </Button>
        </Box>
      </Box>
    </>
  );
};
export default CardSetting;
