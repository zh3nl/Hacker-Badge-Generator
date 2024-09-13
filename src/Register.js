import React from "react";

function Register() {
  return (
    <div className="vh-100">
      <div className="d-flex justify-content-center align-items-center bg-primary vh-100">
        <div className="bg-white rounded w-25 p-3">
          <h2>Hacker Badge Registration</h2>
          <form>
            <div className="mb-3">
              <label htmlFor="Name">
                <strong>Name</strong>
              </label>
              <input
                type="text"
                placeholder="Enter Your Full Name"
                name="Name"
                className="form-control rounded-0"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Email">
                <strong>Email</strong>
              </label>
              <input
                type="email"
                placeholder="Enter Your Email"
                name="Email"
                className="form-control rounded-0"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="University">
                <strong>University</strong>
              </label>
              <input
                type="text"
                placeholder="Enter Your University"
                name="University"
                className="form-control rounded-0"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Major">
                <strong>Major</strong>
              </label>
              <input
                type="text"
                placeholder="Enter Your Major(s)"
                name="Major"
                className="form-control rounded-0"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Grad-date">
                <strong>Graduation Date</strong>
              </label>
              <input
                type="text"
                placeholder="Enter Your Graduation Date (Month and Year)"
                name="Grad-date"
                className="form-control rounded-0"
              />
            </div>
            <div className="mb-3">
                <label htmlFor="Skills"><strong>Skills</strong></label>
                <input type="text" placeholder="Enter Any Relevant Skills" name="Skills" className="form-control rounded-0"/>
            </div>
            <div className="mb-3">
              <label htmlFor="Github">
                <strong>GitHub</strong>
              </label>
              <input
                type="text"
                placeholder="Enter Your GitHub"
                name="Github"
                className="form-control rounded-0"
              />
            </div>
            <button type="submit" className="btn btn-success w-100 rounded-0" href="">
              Submit
            </button>
            <p>By Clicking Submit You Agree to Our Terms of Service</p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
