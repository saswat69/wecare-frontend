import React from 'react'

function Userlogin() {
  return (
    <>
      <div className="img-background">
        <br /><br />
        <div className='container'>
          <div className="row">
            <div className="col-md-4"></div>
            <div className="col-md-6 col-12">
            <div className="card-home-3">
            <form>
            <h4 className='text-center  mb-4'><img src="https://www.freeiconspng.com/thumbs/login-icon/user-login-icon-14.png" className='img-size-2' id="icon" alt="User Icon" />Login As User</h4>
              <div class="form-group">
                <label for="exampleInputEmail1">Coach ID</label>
                <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
              </div>
              <div class="form-group">
                <label for="exampleInputEmail1">Password</label>
                <input type="password" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
              </div>
              <br />
              <button type="button" class="btn input-block-level form-control btn-dark">Login</button>
            </form>
          </div>
            </div>
            <div className="col-md-2"></div>
          </div>
          

        </div>
      </div>

    </>
  )
}

export default Userlogin