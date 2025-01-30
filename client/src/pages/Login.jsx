import React from 'react';
import Layout from '../components/Layout/Layout';

const Login = () => {
    return (
        <Layout>
            <div className="container py-4">
      <div className="row align-items-center">
        {/* Left Side: Image */}
        <div className="col-md-6 text-center">
          <img
            src="/images/login.jpg"
            alt="Login"
            className="img-fluid rounded"
          />
        </div>

        {/* Right Side: Login Form */}
        <div className="col-md-6">
          <h2 className="mb-4">Login</h2>
          <form>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input type="email" className="form-control" placeholder="Enter email" required />
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input type="password" className="form-control" placeholder="Enter password" required />
            </div>
            <button type="submit" className="btn btn-primary">Login</button>
          </form>
          <p className="mt-3">
            Don't have an account? <a href="/register">Create an account</a>
          </p>
        </div>
      </div>
    </div>
        </Layout>
    );
}

export default Login;
