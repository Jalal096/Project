import React, { useState } from "react";
import {
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  TextField,
  Button,
  InputLabel,
  Select,
  MenuItem,
  Modal,
  Box,
} from "@mui/material";
import "../css/engineForm.css";

// Reusable Radio Group Component
const RadioGroupField = ({ label, name, value, onChange }) => (
  <div className="m-10">
    <FormLabel className="label-color-black">{label}</FormLabel>
    <RadioGroup row name={name} value={value} onChange={onChange}>
      <FormControlLabel value="yes" control={<Radio />} label="Yes" />
      <FormControlLabel value="no" control={<Radio />} label="No" />
    </RadioGroup>
  </div>
);

const NumberDropDown = ({
  name,
  inputId,
  inputLabel,
  labelId,
  selectId,
  rangeUpto,
  value,
  onChange,
}) => (
  <FormControl variant="filled">
    <InputLabel id={inputId}>{inputLabel}</InputLabel>
    <Select
      name={name}
      labelId={labelId}
      id={selectId}
      value={value}
      label="Number"
      onChange={onChange}
      size="small"
    >
      {[...Array(rangeUpto).keys()].map((num) => (
        <MenuItem key={num} value={num}>
          {/* {console.log(num)} */}
          {num}
        </MenuItem>
      ))}
    </Select>
  </FormControl>
);

export default function EngineForm() {
  const initialState = {
    inspectionDone: "",
    kmsRun: "",
    changeYears: "",
    changeMonths: "",
    oilQuality: "",
    changeOil: "",
    confirmOilChange: "",
  };

  const [formData, setFormData] = useState(initialState);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const {
      inspectionDone,
      kmsRun,
      changeYears,
      changeMonths,
      oilQuality,
      changeOil,
      confirmOilChange,
    } = formData;

    // Validation: Check if all required fields are filled
    if (
      !inspectionDone ||
      !kmsRun ||
      !changeYears ||
      !changeMonths ||
      !oilQuality ||
      !changeOil ||
      !confirmOilChange
    ) {
      setModalMessage("Some fields are empty. Please fill in all fields.");
    } else {
      setModalMessage("Details were successfully saved!");
      // Reset form data after submission
      setFormData(initialState);
    }
    setModalOpen(true); // Open the modal after validation
  };

  const handleClose = () => {
    setModalOpen(false); // Close the modal
  };

  return (
    <FormControl
      className="engine-form"
      component="form"
      onSubmit={handleSubmit}
      method="post"
    >
      <RadioGroupField
        label="Inspection Done :"
        name="inspectionDone"
        value={formData.inspectionDone}
        onChange={handleChange}
      />

      <div className="m-10">
        <FormLabel id="oil-age-label" className="label-color-black">
          Oil Age:
        </FormLabel>
        <br />
        <div className="give-some-space">
          <FormLabel id="kms-run-label" className="label-color-black">
            How much your car has run till now?
          </FormLabel>
          <br />
        </div>
        <TextField
          id="kms-run-text"
          label="In Kms"
          variant="filled"
          name="kmsRun"
          value={formData.kmsRun}
          onChange={handleChange}
          size="small"
        />
      </div>

      <div className="m-10">
        <div className="give-some-space">
          <FormLabel id="previous-change-label" className="label-color-black">
            When did you previously change your Oil?
          </FormLabel>
          <br />
        </div>
        <div className="number-drop-down">
          <NumberDropDown
            name="yearsInput"
            inputId="number-label"
            inputLabel="Years"
            labelId="years-category"
            selectId="change-years"
            rangeUpto={5}
            value={formData.changeYears}
            onChange={handleChange}
          />
          <NumberDropDown
            name="monthsInput"
            inputId="number-label"
            inputLabel="Months"
            labelId="months-category"
            selectId="change-months"
            rangeUpto={12}
            value={formData.changeMonths}
            onChange={handleChange}
          />
        </div>
      </div>

      <RadioGroupField
        label="Oil Quality :"
        name="oilQuality"
        value={formData.oilQuality}
        onChange={handleChange}
      />

      <RadioGroupField
        label="Do we need to change oil?"
        name="changeOil"
        value={formData.changeOil}
        onChange={handleChange}
      />

      <RadioGroupField
        label="Did he really change oil?"
        name="confirmOilChange"
        value={formData.confirmOilChange}
        onChange={handleChange}
      />

      <div className="submit-button">
        <Button type="submit" variant="contained">
          Submit
        </Button>
      </div>

      <Modal
        open={modalOpen}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "background.paper",
            boxShadow: 24,
            borderRadius: "10px",
            p: 4,
            textAlign: "center",
          }}
        >
          <h2
            id="modal-title"
            style={{ color: "#1976d2", marginBottom: "16px" }}
          >
            {modalMessage ===
            "Some fields are empty. Please fill in all fields."
              ? "Error"
              : "Success!"}
          </h2>
          <p
            id="modal-description"
            style={{ fontSize: "16px", marginBottom: "24px" }}
          >
            {modalMessage}
          </p>
          <Button
            variant="contained"
            onClick={handleClose}
            sx={{ bgcolor: "#1976d2", "&:hover": { bgcolor: "#1565c0" } }}
          >
            Close
          </Button>
        </Box>
      </Modal>
    </FormControl>
  );
}
