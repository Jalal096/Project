import React, { useRef, useState } from "react";
import {
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Button,
  Modal,
  Box,
} from "@mui/material";
import "../css/batteryForm.css";

export default function BatteryForm() {
  const [formData, setFormData] = useState({
    inspectionDone: "",
    batteryPhoto: null,
    crankingPower: null,
    batteryQuality: "",
    changeBattery: "",
    confirmBatteryChange: "",
  });

  const [modalOpen, setModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const batteryPhotoRef = useRef(null);
  const crankingPowerRef = useRef(null);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      setFormData((prevData) => ({
        ...prevData,
        [name]: files[0],
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if all required fields are filled
    if (
      !formData.inspectionDone ||
      !formData.batteryPhoto ||
      !formData.crankingPower ||
      !formData.batteryQuality ||
      !formData.changeBattery ||
      !formData.confirmBatteryChange
    ) {
      setModalMessage("Some fields are empty. Please fill in all fields.");
    } else {
      console.log(formData);
      setModalMessage("Details were successfully saved!");
      // Reset form data after submission
      setFormData({
        inspectionDone: "",
        batteryPhoto: null,
        crankingPower: null,
        batteryQuality: "",
        changeBattery: "",
        confirmBatteryChange: "",
      });
      
      if (batteryPhotoRef.current) {
        batteryPhotoRef.current.value = "";
      }
      if (crankingPowerRef.current) {
        crankingPowerRef.current.value = "";
      }
    }

    setModalOpen(true); // Open the modal after validation
  };

  const handleClose = () => {
    setModalOpen(false); // Close the modal
  };

  return (
    <FormControl className="battery-form" component="form" onSubmit={handleSubmit}>
      <div className="inspection-class m-10">
        <FormLabel id="inspection-done-label" className="label-color-black">
          Inspection Done:
        </FormLabel>
        <RadioGroup
          row
          aria-labelledby="inspection-done-label"
          name="inspectionDone"
          value={formData.inspectionDone}
          onChange={handleChange}
        >
          <FormControlLabel value="yes" control={<Radio />} label="Yes" />
          <FormControlLabel value="no" control={<Radio />} label="No" />
        </RadioGroup>
      </div>

      <div className="m-10 class-battery">
        <FormLabel id="battery-photo-label" className="label-color-black">
          Battery Photo:
        </FormLabel>
        <input
          type="file"
          name="batteryPhoto"
          id="battery-photo-file"
          ref={batteryPhotoRef}
          onChange={handleChange}
        />
      </div>

      <div className="m-10">
        <FormLabel id="cranking-power-label" className="label-color-black">
          Cranking Power:
        </FormLabel>
        <input
          type="file"
          name="crankingPower"
          id="cranking-power-file"
          ref={crankingPowerRef}
          onChange={handleChange}
        />
      </div>

      <div className="battery-quality m-10">
        <FormLabel id="battery-quality-label" className="label-color-black">
          Battery Quality:
        </FormLabel>
        <RadioGroup
          row
          aria-labelledby="battery-quality-label"
          name="batteryQuality"
          value={formData.batteryQuality}
          onChange={handleChange}
        >
          <FormControlLabel value="good" control={<Radio />} label="Good" />
          <FormControlLabel value="bad" control={<Radio />} label="Bad" />
        </RadioGroup>
      </div>

      <div className="battery-change m-10">
        <FormLabel id="battery-change-label" className="label-color-black">
          Do we need to change battery?
        </FormLabel>
        <RadioGroup
          row
          aria-labelledby="battery-change-label"
          name="changeBattery"
          value={formData.changeBattery}
          onChange={handleChange}
        >
          <FormControlLabel value="yes" control={<Radio />} label="Yes" />
          <FormControlLabel value="no" control={<Radio />} label="No" />
        </RadioGroup>
      </div>

      <div className="battery-change m-10">
        <FormLabel id="confirm-battery-change-label" className="label-color-black">
          Did he really change the battery?
        </FormLabel>
        <RadioGroup
          row
          aria-labelledby="confirm-battery-change-label"
          name="confirmBatteryChange"
          value={formData.confirmBatteryChange}
          onChange={handleChange}
        >
          <FormControlLabel value="yes" control={<Radio />} label="Yes" />
          <FormControlLabel value="no" control={<Radio />} label="No" />
        </RadioGroup>
      </div>

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
