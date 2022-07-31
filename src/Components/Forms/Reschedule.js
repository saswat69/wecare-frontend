import React from "react";

function Reschedule() {
  return (
    <>
      <div className="img-background">
        <br /><br />
        <div className="container">
          <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-8 col-12">
              <div className="card-home-5">
                <h4 className='text-center '><img src="https://www.freeiconspng.com/thumbs/login-icon/user-login-icon-14.png" className='img-size-2' id="icon" alt="User Icon" />Reschedule your Appointment</h4>
                <div class="form-group">
                  <label for="exampleInputEmail1">Date of Appointment</label>
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
                  <div className="form-group">
                    <br />
                    <label for="exampleInputEmail1">Prefered Slot</label>
                    <div class="">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                      <label class="custom-control-label" for="customCheck1">
                        &nbsp; 9 AM to 10 AM
                      </label>
                      <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                      <label class="custom-control-label" for="customCheck1">
                      &nbsp;10 AM to 11 AM
                      </label>
                      <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                      <label class="custom-control-label" for="customCheck1">
                      &nbsp; 11 AM to 12 AM

                      </label>
                      <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                      <label class="custom-control-label" for="customCheck1">
                      &nbsp; 2 PM to 3 PM
                      </label>
                      <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                      <label class="custom-control-label" for="customCheck1">
                      &nbsp; 3 PM to 4 PM
                      </label>
                      <br />
                      <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                      <label class="custom-control-label" for="customCheck1">
                      &nbsp; 4 PMto5 PM
                      </label>
                    </div>
                  </div>
                </div>
                <button type="button" class="btn input-block-level form-control btn-dark">Confirm your Appointment</button>
              </div>
            </div>
            <div className="col-md-2"></div>
          </div>


        </div>
      </div>
    </>
  );
}

export default Reschedule;
