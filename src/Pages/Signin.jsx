import React, { useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { validateEmail } from '../Utils/common'
import { signIn } from '../Actions/Functions'
import { AppContext } from '../Context/AppContext'

const Signin = () => {

  const { setAppData } = useContext(AppContext)

  const [userData, setUserData] = useState({
    email: "",
    password: "",
  })

  const navigate = useNavigate()

  const signInHandler = async (e) => {
    try {
      e.preventDefault();
      if (!userData.email || !userData.password) {
        alert("All fields are required")
        return;
      }
      if (!validateEmail(userData.email)) {
        alert("Invalid email address")
        return;
      }

      const response = await signIn(userData)

      if (response) {
        navigate("/dashboard")
        setAppData((prev) => {
          return {
            ...prev,
            isLoggedIn: true,
            token: response.token,
            user: response.user
          }
        })
      }
    } catch (error) {
      alert(error.message)
    }
  }

  return (
    <>
      <div className="container-fluid bg-back">
        <div className="row justify-content-center align-items-center h-90vh">
          <div className="col-xxl-4 col-xl-5 col-lg-6 col-md-7 col-sm-8">
            <form className="shadow gp-5 bg-white rounded-lg" onSubmit={(e) => signInHandler(e)}>
              <h2 className="text-center fw-bolder mb-2">PCRM</h2>
              <h4 className="text-center fw-bold mb-2">Welcome Back !</h4>
              <p className="text-center mb-4">Sign in to continue</p>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email address
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="email"
                  aria-describedby="emailHelp"
                  name="email"
                  value={userData.email}
                  onChange={(e) => setUserData({ ...userData, email: e.target.value })}
                />

              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  value={userData.password}
                  onChange={(e) => setUserData({ ...userData, password: e.target.value })}
                />
              </div>
              <div className="mb-3 form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="required"
                />
                <label className="form-check-label" htmlFor="required">
                  Remember Me
                </label>
              </div>
              <button type="submit" className="btn btn-primary w-100">
                Sign in
              </button>
              <p className="text-center mt-4">
                Don't have an account? <Link to={"/signup"}>Register Now</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Signin