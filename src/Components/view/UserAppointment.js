import React from 'react'

export default function UserAppointment() {
  return (
    <div>
        <div className="img-background">
      <div className='container'>
        <br /><br />
        <h1 className='text-center  mb-4'>We are at the heart of appropriate care</h1>
        <br />
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-4 col-12">
            <div className="card card-home">
              <div className="card-body">
                <div className="text-center mb-3">
                <h4 className='text-center  '>Appointment Date:<br/>2022-09-12</h4>
            <h5 className='text-center  '>Slot:10AM to 11AM</h5>
            <h6 className='text-center  '>BookingID:1</h6>
            <h6 className='text-center  '>UserID:1</h6>
            <h6 className='text-center  '>CoachID:1</h6>
                </div>

                <div className="form-group">
                  <a href="/" className="btn input-block-level form-control btn-success">Reschedule Appointment</a>
                </div>
                <br />
                <div className="form-group">
                  <a href="/" className="btn input-block-level form-control btn-danger ">Cancel Appointment</a>
                </div>

              </div>
            </div>
          </div>
          <div className="col-md-4 col-12">
            <div className="card card-home">
              <div className="card-body">
                <div className="text-center mb-3">
                <h4 className='text-center  '>Appointment Date:<br/>2022-09-12</h4>
            <h5 className='text-center  '>Slot:10AM to 11AM</h5>
            <h6 className='text-center  '>BookingID:1</h6>
            <h6 className='text-center  '>UserID:1</h6>
            <h6 className='text-center  '>CoachID:1</h6>
                </div>

                <div className="form-group">
                  <a href="/" className="btn input-block-level form-control btn-success">Reschedule Appointment</a>
                </div>
                <br />
                <div className="form-group">
                  <a href="/" className="btn input-block-level form-control btn-danger ">Cancel Appointment</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-2 "></div>
        </div>
      </div>
    </div>
    </div>
  )
}
