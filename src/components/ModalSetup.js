import { Box, Paper, Typography } from "@mui/material";
const ModalSetup = (props) => {
  return (
    <Box
      sx={{
        display: "flex",

        
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        position: "relative"
      }}
    >
      <Paper sx={{ p: "40px", minWidth: {md: "800px", sm: "600px", xs: "350px"}, position: "absolute", top: "100px" }}><Typography>{props.children}</Typography> </Paper>
    </Box>
  );
};

export default ModalSetup;
