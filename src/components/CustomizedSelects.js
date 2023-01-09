import * as React from "react";
import { styled } from "@mui/material/styles";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import NativeSelect from "@mui/material/NativeSelect";
import InputBase from "@mui/material/InputBase";

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(3),
  },
  "& .MuiInputBase-input": {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #ced4da",
    fontSize: 16,
    padding: "10px 26px 10px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      "Shabnam",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:focus": {
      borderRadius: 4,
      borderColor: "#80bdff",
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)",
    },
  },
}));
const CustomizedSelects = (props) => {
  const [basedOn, setBasedOn] = React.useState("");
  const handleChange = (event) => {
    setBasedOn(event.target.value);
    props.changeBasedOn(props.options[event.target.value -1], event.target.value-1);

  };
  const { options } = props;

  const mySx = { my: 1, ...props.sx };
  var i = 0;
  // console.log(props.options);
  return (
    <FormControl sx={mySx} variant="standard">
      {/*    */}
      <NativeSelect
        id="demo-customized-select-native"
        value={basedOn}
        onChange={handleChange}
        input={<BootstrapInput />}
        // sx={{ width: 'fit-content'}}
      >
        {/* <option aria-label="None" value="">none</option> */}
        {options.map((opt) => {
          i++;
          return (
            <option key={i} value={i}>
              {opt}
            </option>
          );
        })}
        {/* <option value={10}></option>
          <option value={20}></option>
          <option value={30}></option> */}
      </NativeSelect>
    </FormControl>
  );
};
export default CustomizedSelects;
