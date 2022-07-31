import React from 'react'

function UserProfile() {
  return (

    <>
      <div className="img-background">
        <br />
        <div className="container">
          <div className="card-home-4">
            <h4 className='text-center'><img src="https://www.freeiconspng.com/thumbs/login-icon/user-login-icon-14.png" className='img-size-2' id="icon" alt="User Icon" />User Profile</h4>
            <div className="row">
              <div className="col-md-6 col-12">
                <div class="form-group">
                  <label for="exampleInputEmail1">Name</label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter Name"
                  />
                  <small id="emailHelp" class="form-text text-muted">
                    We'll never share your email with anyone else.
                  </small>
                </div>
                <div class="form-group">
                  <label for="exampleInputEmail1">Mobile Number</label>
                  <input
                    type="tel"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter Mobile Number"
                  />
                  <small id="emailHelp" class="form-text text-muted">
                    We'll never share your email with anyone else.
                  </small>
                </div>
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
                <div class="form-group">
                  <label for="exampleInputEmail1">Pincode</label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter Pincode"
                  />
                  <small id="emailHelp" class="form-text text-muted">
                    We'll never share your email with anyone else.
                  </small>
                </div>
                <div class="form-group">
                  <label for="exampleInputEmail1">State</label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter State"
                  />
                  <small id="emailHelp" class="form-text text-muted">
                    We'll never share your email with anyone else.
                  </small>
                </div>
              </div>
              <div className="col-md-6 col-12">
                <div class="form-group">
                  <label for="exampleInputEmail1">Password</label>
                  <input
                    type="password"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter Password"
                  />
                  <small id="emailHelp" class="form-text text-muted">
                    We'll never share your email with anyone else.
                  </small>
                </div>
                <div class="form-group">
                  <label for="exampleInputEmail1">Email</label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                  />
                  <small id="emailHelp" class="form-text text-muted">
                    We'll never share your email with anyone else.
                  </small>
                </div>
                <div className="form-group mt-2">
                  <label for="exampleInputEmail1">Gender</label>
                  <div class="form-check ">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                    <label class="form-check-label" for="flexRadioDefault1">
                      Male
                    </label>
                  </div>
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                    <label class="form-check-label" for="flexRadioDefault1">
                      Female
                    </label>
                  </div>
                </div>
                <div class="form-group">
                  <label for="exampleInputEmail1">City</label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter City"
                  />
                  <small id="emailHelp" class="form-text text-muted">
                    We'll never share your email with anyone else.
                  </small>
                </div>
                <div class="form-group">
                  <label for="exampleInputEmail1">Country</label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter Country"
                  />
                  <small id="emailHelp" class="form-text text-muted">
                    We'll never share your email with anyone else.
                  </small>
                </div>
              </div>

              <div className="conatiner">
                <div className="row">
                  <div className="col-md-2"></div>
                  <div className="col-md-8">
                    <br />
                    <button type="button" class="btn input-block-level form-control btn-dark">Register</button>
                  </div>
                  <div className="col-md-2"></div>
                </div>
              </div>
            </div>
          </div>

        </div>
        <br />
      </div>
    </>

  )
}

export default UserProfile