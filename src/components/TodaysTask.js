import * as React from "react";

import { Paper, Typography, Box } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Checkbox from "@mui/material/Checkbox";
import CircleCheckedFilled from "@mui/icons-material/CheckCircle";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
const TodaysTask = (props) => {
  const { title, relatedProject } = props;
  const [checked, setChecked] = React.useState(false);

  const handleChange = (event) => {
    setChecked((prevChecked) => {
      return !prevChecked;
    });
  };
  return (
    <Paper
      elevation={2}
      sx={{
        position: "relative",
        padding: "15px 25px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        // alignItems: "center",
        mb: "15px",
      }}
    >
      <Checkbox
        size="large"
        checked={checked}
        onChange={handleChange}
        icon={<RadioButtonUncheckedIcon />}
        checkedIcon={<CircleCheckedFilled />}
        sx={{ position: "absolute", right: "14px" }}
      />

      <Typography variant="p"   sx={{ fontWeight: "bold"  }}>
        {title}
      </Typography>
      <Box sx={{ display: "flex", alignItems: 'center', mt: "3px" }}>
        <CircleIcon sx={{ mr: "5px", fontSize:"15px"  }} />
        <Typography variant="p">{relatedProject}</Typography>
      </Box>
    </Paper>
  );
};

export default TodaysTask;
