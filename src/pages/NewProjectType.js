import {
  Paper,
  Typography,
  RadioGroup,
  FormControlLabel,
  Radio,
  Box,
  Button,
  Modal,
} from "@mui/material";
import { useState } from "react";
import ModalSetup from "../components/ModalSetup";
import NewPersonalProject from "../components/NewPersonalProject";
import NewProposal from "../components/NewProposal";
const NewProjectType = () => {
  const [selectedValue, setSelectedValue] = useState("پروپوزال");
  const [openPersonalModal, setOpenPersonalModal] = useState(false);
  const [openProposalModal, setOpenProposalModal] = useState(false);

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (selectedValue === "پروپوزال") {
      setOpenProposalModal(true);
    } else if (selectedValue === "ایجاد پروژه شخصی") {
      setOpenPersonalModal(true);
    }
  };

  const closeProposal = () => {
    setOpenProposalModal(false);
  };
  const closePersonal = () => {
    setOpenPersonalModal(false);
  };

  return (
    <>
      <Modal open={openPersonalModal} onClose={closePersonal} sx={{overflow: 'scroll' }}>
        <ModalSetup>
          <NewPersonalProject onClose={closePersonal}/>
        </ModalSetup>
      </Modal>

      <Modal open={openProposalModal} onClose={closeProposal} sx={{overflow: 'scroll' }}>
        <ModalSetup>
          <NewProposal onClose={closeProposal} />
        </ModalSetup>
      </Modal>
      <Box
        sx={{
          display: "flex",
          height: "100vh",
          width: "100%",
          alignItems: "flexStart",
        }}
      >
        <Box sx={{ width: "100%" }}>
          <Paper sx={{ padding: "40px", m: "20px" }}>
            <Typography variant={"h6"} fontWeight="bold" sx={{ mb: "15px" }}>
              ایجاد پروژه جدید
            </Typography>
            <RadioGroup
              aria-labelledby="projectType"
              defaultValue="پروپوزال"
              name="project-type"
              value={selectedValue}
              onChange={handleChange}
            >
              <FormControlLabel
                value="پروپوزال"
                control={<Radio />}
                label="پروپوزال"
              />
              <FormControlLabel
                value="ایجاد پروژه شخصی"
                control={<Radio />}
                label="ایجاد پروژه شخصی"
              />
            </RadioGroup>
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                marginTop: "20px",
              }}
            >
              <Button variant="contained" onClick={handleSubmit}>
                ادامه
              </Button>
            </Box>
          </Paper>
        </Box>
      </Box>
    </>
  );
};
export default NewProjectType;
