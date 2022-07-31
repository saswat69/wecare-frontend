import React from 'react'

function LoginCoach() {
  return (
    <div className='container'>
        <form>
        <div class="form-group">
    <label for="exampleInputEmail1">Coach ID</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputEmail1">Password</label>
    <input type="password" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <button type="button" class="btn btn-primary btn-lg">Register</button>
        </form>
    </div>
  )
}

export default LoginCoach