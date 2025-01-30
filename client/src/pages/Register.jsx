import React from "react";
import Layout from "../components/Layout/Layout";

const Register = () => {
  return (
    <div>
      <Layout>
      <div className="container py-5">
      <div className="row align-items-center">
        {/* Left Side: Image */}
        <div className="col-md-6 text-center">
          <img
            src="/images/new_user.jpg"
            alt="Register"
            className="img-fluid rounded"
          />
        </div>

        {/* Right Side: Registration Form */}
        <div className="col-md-6">
          <h2 className="mb-4">Create Account</h2>
          <form>
            <div className="mb-3">
              <label className="form-label">Username</label>
              <input type="text" className="form-control" placeholder="Enter username" name="uname" required />
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input type="email" className="form-control" placeholder="Enter email" required />
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input type="password" className="form-control" placeholder="Enter password" required />
            </div>
            <div className="mb-3">
              <label className="form-label">Mobile</label>
              <input type="tel" className="form-control" placeholder="Enter mobile number" required />
            </div>
            <div className="mb-3">
              <label className="form-label">Address</label>
              <textarea className="form-control" placeholder="Enter address" rows="3" required></textarea>
            </div>
            <button type="submit" className="btn btn-warning">Register</button>
          </form>
          <p className="mt-3">
            Already have an account? <a href="/login">Login here</a>
          </p>
        </div>
      </div>
    </div>
      </Layout>
    </div>
  );
};

export default Register;
