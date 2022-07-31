import React from "react";

function Appointment() {
  return (
    <div className="container">
      <h4>Date of Appointment</h4>
      <div class="form-group">
        <label for="exampleInputEmail1">Date of Birth</label>
        <input
          type="date"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter Date of Birth"
        />
        <small id="emailHelp" class="form-text text-muted">
          We'll never share your email with anyone else.
        </small>
      </div>
      <h4>Prefered Slot</h4>
      <div class="custom-control custom-checkbox">
        <input type="checkbox" class="custom-control-input" id="customCheck1" />
        <label class="custom-control-label" for="customCheck1">
          9 AM to 10 AM
        </label>
        <input type="checkbox" class="custom-control-input" id="customCheck1" />
        <label class="custom-control-label" for="customCheck1">
          10 AM to 11 AM
        </label>
        <input type="checkbox" class="custom-control-input" id="customCheck1" />
        <label class="custom-control-label" for="customCheck1">
          11 AM to 12 AM
          
        </label>
        <input type="checkbox" class="custom-control-input" id="customCheck1" />
        <label class="custom-control-label" for="customCheck1">
          2 PM to 3 PM
        </label>
        <input type="checkbox" class="custom-control-input" id="customCheck1" />
        <label class="custom-control-label" for="customCheck1">
          3 PM to 4 PM
        </label>
        <input type="checkbox" class="custom-control-input" id="customCheck1" />
        <label class="custom-control-label" for="customCheck1">
          4 PM to 5 PM
        </label>
      </div>
    </div>
  );
}

export default Appointment;
