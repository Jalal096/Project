import React, { useState } from "react";

const Engine = () => {
  const [inspectionDone, setInspectionDone] = useState("");

  return (
    <>
      <form action="post">
        <label htmlFor="inspection">Inspection Done</label>
        <input type="checkbox" name="inspectionYes" id="inspectionYes" value={inspectionDone} onChange={(e) => {
            setInspectionDone(e.value);
        }}/>
        <label htmlFor="inspectionYes">Yes</label>
        <input type="checkbox" name="inspectionNo" id="inspectionNo" />
        <label htmlFor="inspectionNo">No</label>
        <br />
        
        <label htmlFor="oilAge">Oil Age : </label><br />
        <label htmlFor="kmRun">How much your car has run till now ?(In Kms)</label><br />
        <input type="text" name="kmRun" id="kmRun"/><br />

        <label htmlFor="oilChange">When did you previously changed your Oil ?</label><br />
        <input type="text" name="inYears" id="inYears"/>
        <label htmlFor="inYears">In Years</label>
        <input type="text" name="inMonths" id="inMonths"/>
        <label htmlFor="inMonths">In Months</label>


      </form>
    </>
  );
};

export default Engine;
