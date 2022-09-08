import React from 'react'

export default function ContactUs(props) {
  return (
    <div>
      
      <h2>{props.title}</h2>

      <div class="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
            </div>
            <div className="mb-3">
            <label for="exampleFormControlTextarea1" className="form-label">Write Query</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>

            <button type="button" className="btn btn-success">Submit</button>
       </div>
  )
}
