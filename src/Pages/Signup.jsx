import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
    return (
        <div className="container-fluid bg-back">
            <div className="row justify-content-center align-items-center h-90vh">
                <div className="col-xxl-6 col-xl-6 col-lg-8 col-md-9 col-sm-11">
                    <form className="shadow my-5 gp-5 bg-white rounded-lg" onSubmit={(e) => (e)}>
                        <h2 className="text-center fw-bolder mb-2">PCRM</h2>
                        <h4 className="text-center fw-bold mb-4">Create Your Account</h4>
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="mb-3">
                                    <label htmlFor="Name">First Name</label>
                                    <input type="text" className="form-control" name="firstName" onChange={() => { }} value={""} />
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="mb-3">
                                    <label htmlFor="lastName">Last Name</label>
                                    <input type="text" className="form-control" name="lastName" onChange={() => { }} value={""} />
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
                                        onChange={() => { }}
                                        value={""}
                                    />
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="mb-3">
                                    <label htmlFor="Name">Phone</label>
                                    <input type="text" className="form-control"
                                        name="phone"
                                        onChange={() => { }}
                                        value={""}
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
                                        onChange={() => { }}
                                        value={""}
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
                                        onChange={() => { }}
                                        value={""}
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
                            Already have an account? <Link to={"../"}>Login Now</Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Signup