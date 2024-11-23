import React, { useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { validateEmail } from '../Utils/common'
import { AppContext } from '../Context/AppContext'
import { signUp } from '../Actions/Functions'

const Signup = () => {
    const { setAppData } = useContext(AppContext)

    const [userData, setUserData] = useState({
        fname: "",
        lname: "",
        email: "",
        password: "",
        confirmPassword: "",
        phone: "",
    })

    const navigate = useNavigate()

    const signUpHandler = async (e) => {
        try {
            e.preventDefault();

            if (!userData.fname || !userData.lname || !userData.email || !userData.password || !userData.confirmPassword || !userData.phone) {
                alert("All fields are required")
                return;
            }

            if (userData.password !== userData.confirmPassword) {
                alert("Passwords do not match")
                return;
            }

            if (userData.password.length < 6) {
                alert("Password must be at least 6 characters long")
                return;
            }

            if (!validateEmail(userData.email)) {
                alert("Invalid email address")
                return;
            }

            const response = await signUp(userData)
            console.log(response)
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
        <div className="container-fluid bg-back">
            <div className="row justify-content-center align-items-center h-90vh">
                <div className="col-xxl-6 col-xl-6 col-lg-8 col-md-9 col-sm-11">
                    <form className="shadow my-5 gp-5 bg-white rounded-lg" onSubmit={(e) => signUpHandler(e)}>
                        <h2 className="text-center fw-bolder mb-2">PCRM</h2>
                        <h4 className="text-center fw-bold mb-4">Create Your Account</h4>
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="mb-3">
                                    <label htmlFor="Name">First Name</label>
                                    <input type="text" className="form-control" name="firstName"
                                        onChange={(e) => setUserData(prev => {
                                            return {
                                                ...prev,
                                                fname: e.target.value
                                            }
                                        })}
                                        value={userData.fname} />
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="mb-3">
                                    <label htmlFor="lastName">Last Name</label>
                                    <input type="text" className="form-control" name="lastName"
                                        onChange={(e) => setUserData(prev => {
                                            return {
                                                ...prev,
                                                lname: e.target.value
                                            }
                                        })}
                                        value={userData.lname} />
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1">Email address</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="exampleInputEmail1"
                                        aria-describedby="emailHelp"
                                        name="email"
                                        onChange={(e) => setUserData(prev => {
                                            return {
                                                ...prev,
                                                email: e.target.value
                                            }
                                        })}
                                        value={userData.email}
                                    />
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="mb-3">
                                    <label htmlFor="Name">Phone</label>
                                    <input type="text" className="form-control"
                                        name="phone"
                                        onChange={(e) => setUserData(prev => {
                                            return {
                                                ...prev,
                                                phone: e.target.value
                                            }
                                        })}
                                        value={userData.phone}
                                    />
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1">Password</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="exampleInputPassword1"
                                        name="password"
                                        onChange={(e) => setUserData(prev => {
                                            return {
                                                ...prev,
                                                password: e.target.value
                                            }
                                        })}
                                        value={userData.password}
                                    />
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1">
                                        Confirm Password
                                    </label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="exampleInputPassword1"
                                        name="confirmPassword"
                                        onChange={(e) => setUserData(prev => {
                                            return {
                                                ...prev,
                                                confirmPassword: e.target.value
                                            }
                                        })}
                                        value={userData.confirmPassword}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="mb-3 form-check">
                            <input
                                type="checkbox"
                                className="form-check-input"
                                id="exampleCheck1"
                                required
                            />
                            <label className="form-check-label" htmlFor="exampleCheck1">
                                I agree to terms and conditions
                            </label>
                        </div>
                        <button type="submit" className="btn btn-primary w-100">
                            Sign Up
                        </button>
                        <p className="text-center mt-4">
                            Already have an account? <Link to={"/signin"}>Login Now</Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Signup