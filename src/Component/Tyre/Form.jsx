import React, { useState, useRef } from "react";
import {
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Button,
  Checkbox,
  Modal,
  Box,
} from "@mui/material";
import "../css/tyreForm.css";

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

// Main Form Component
export default function TyreForm() {
  const initialState = {
    inspectionDone: "",
    tyrePhoto: null,
    tyreOk: "",
    wearDetails: {
      oneSideWear: false,
      middleWear: false,
      patchyWear: false,
      unknownWear: false,
    },
    requireAlignment: "",
    recommendChange: "",
  };

  const [formData, setFormData] = useState(initialState);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const tyrePhotoRef = useRef(null); // Create a ref for the file input

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData((prevData) => ({
        ...prevData,
        wearDetails: {
          ...prevData.wearDetails,
          [name]: checked,
        },
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleFileChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      tyrePhoto: e.target.files[0],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation: Check if all required fields are filled
    if (
      !formData.inspectionDone ||
      !formData.tyrePhoto ||
      !formData.tyreOk ||
      !formData.requireAlignment ||
      !formData.recommendChange
    ) {
      setModalMessage("Some fields are empty. Please fill in all fields.");
    } else {
      setModalMessage("Details were successfully saved!");

      // Reset form data after submission
      setFormData(initialState);

      // Clear the file input value using the ref
      if (tyrePhotoRef.current) {
        tyrePhotoRef.current.value = ""; // Clear the file input
      }
    }

    setModalOpen(true); // Open the modal after validation
  };

  const handleClose = () => {
    setModalOpen(false); // Close the modal
  };

  const wearOptions = [
    { label: "One Side Wear", name: "oneSideWear" },
    { label: "Middle Wear", name: "middleWear" },
    { label: "Patchy Wear", name: "patchyWear" },
    { label: "Unknown Wear", name: "unknownWear" },
  ];

  return (
    <FormControl
      className="tyre-form"
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

      <div className="m-10 class-tyre">
        <FormLabel id="tyre-photo-label" className="label-color-black">
          Tyre Photo :
        </FormLabel>
        <input
          type="file"
          name="tyrePhoto"
          id="tyre-photo-file"
          onChange={handleFileChange}
          ref={tyrePhotoRef} // Attach the ref to the file input
        />
      </div>

      <RadioGroupField
        label="Is tyre ok ?"
        name="tyreOk"
        value={formData.tyreOk}
        onChange={handleChange}
      />

      <div className="tyre-wear m-10">
        <FormLabel className="label-color-black">Wear details :</FormLabel>
        <br />
        {wearOptions.map((option) => (
          <FormControlLabel
            key={option.name}
            control={
              <Checkbox
                checked={formData.wearDetails[option.name]}
                onChange={handleChange}
                name={option.name}
              />
            }
            label={option.label}
          />
        ))}
      </div>

      <RadioGroupField
        label="Do we require tyre alignment?"
        name="requireAlignment"
        value={formData.requireAlignment}
        onChange={handleChange}
      />

      <RadioGroupField
        label="Recommend tyre change?"
        name="recommendChange"
        value={formData.recommendChange}
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
          className="pop-up--box"
        >
          <h2 id="modal-title" style={{ color: "#1976d2", marginBottom: "16px" }}>
            {modalMessage === "Some fields are empty. Please fill in all fields."
              ? "Error"
              : "Success!"}
          </h2>
          <p id="modal-description" style={{ fontSize: "16px", marginBottom: "24px" }}>
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
