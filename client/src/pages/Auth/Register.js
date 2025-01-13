import React from 'react'
import Layout from '../../components/Layout/Layout'
const Register = () => {
    return (
        <Layout title="Register - Ecommer App">
          <div className="form-container" style={{ minHeight: "90vh" }}>
            <form onSubmit={handleSubmit}>
              <h4 className="title">REGISTER FORM</h4>
              <div className="mb-3">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="form-control"
                  id="exampleInputEmail1"
                  placeholder="Enter Your Name"
                  required
                  autoFocus
                />
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-control"
                  id="exampleInputEmail1"
                  placeholder="Enter Your Email "
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Enter Your Password"
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="form-control"
                  id="exampleInputEmail1"
                  placeholder="Enter Your Phone"
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="form-control"
                  id="exampleInputEmail1"
                  placeholder="Enter Your Address"
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  value={answer}
                  onChange={(e) => setAnswer(e.target.value)}
                  className="form-control"
                  id="exampleInputEmail1"
                  placeholder="What is Your Favorite sports"
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary">
                REGISTER
              </button>
            </form>
          </div>
        </Layout>
      );
    };
    
    export default Register;
    