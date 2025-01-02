import React, { useContext, useEffect, useState } from 'react'
import { Editor } from 'primereact/editor';
import { updateTask, viewTask } from '../../Actions/Functions';
import { AppContext } from '../../Context/AppContext';
import { useNavigate } from 'react-router-dom';
import moment from 'moment';

const UpdateTask = () => {

    const { setAppData } = useContext(AppContext)
    const navigate = useNavigate()

    const [taskData, setTaskData] = useState({
        taskName: "",
        projectId: "",
        description: "",
        startDate: "",
        endDate: "",
        dueDate: "",
        status: "Not Started",
        priority: "",
        tags: "",
        assignedBy: "",
        assignedTo: "",
    })

    const handleUpdateTask = async () => {
        try {

            if (!taskData?.taskName) {
                alert("Task Name is required")
                return
            }
            const response = await updateTask(taskData)
            if (response.success) {
                alert("Task Updated Successfully")
                // navigate(`../update-project#${response.project._id}`)
            }

        } catch (error) {
            console.log(error)
            alert("Something went wrong")
        }
    }

    useEffect(() => {
        setAppData(prev => {
            return {
                ...prev,
                sidebarOpen: false
            }
        })

        const urlParams = window.location.hash.split("#")[1]
        console.log("urlParams", urlParams)
        handleViewTask(urlParams)

    }, [])

    const handleViewTask = async (id) => {
        try {
            const response = await viewTask(id)
            console.log("response", response)
            setTaskData(response.task)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <div className="add-project-section">
                <div className="row">
                    <div className="col">
                        <h5 className='font-weight-bold'>Update Task</h5>
                    </div>
                    <div className="col text-end">
                        <button className='btn btn-black mb-2' onClick={() => window.history.back()}> <i className="fa fa-arrow-left" aria-hidden="true"></i> Back</button>
                    </div>
                </div>
                <div className="row">
                    <div className="form-group mt-3">
                        <label htmlFor="taskName">Task Name</label>
                        <input type="text"
                            onChange={(e) => setTaskData((prev) => {
                                return {
                                    ...prev,
                                    taskName: e.target.value
                                }
                            })}
                            value={taskData?.taskName}
                            className="form-control mt-1" id="taskName" aria-describedby="emailHelp" placeholder="Enter Task Name" />
                    </div>
                </div>
                <div className="row">
                    <div className="form-group mt-3">
                        <label htmlFor="description">Description</label>
                        <Editor className='mt-1'
                            onTextChange={(e) => setTaskData((prev) => {
                                return {
                                    ...prev,
                                    description: e.htmlValue
                                }
                            })}
                            value={taskData?.description}
                            style={{ height: '240px' }} />
                    </div>
                </div>
                <div className="row">
                    <div className="form-group mt-3 col-sm-4 col-12">
                        <label htmlFor="projectName">Start Date</label>
                        <input type="date"
                            onChange={(e) => setTaskData((prev) => {
                                return {
                                    ...prev,
                                    startDate: e.target.value
                                }
                            })}
                            value={moment(taskData?.startDate).format('YYYY-MM-DD')}
                            className="form-control mt-1" id="projectName" aria-describedby="emailHelp" placeholder="Enter Project Name" />
                    </div>
                    <div className="form-group mt-3 col-sm-4 col-12">
                        <label htmlFor="projectName">End Date</label>
                        <input type="date"
                            onChange={(e) => setTaskData((prev) => {
                                return {
                                    ...prev,
                                    endDate: e.target.value
                                }
                            })}
                            value={moment(taskData?.endDate).format('YYYY-MM-DD')}
                            className="form-control mt-1" id="projectName" aria-describedby="emailHelp" placeholder="Enter Project Name" />
                    </div>
                    <div className="form-group mt-3 col-sm-4 col-12">
                        <label htmlFor="projectName">Due Date</label>
                        <input type="date"
                            onChange={(e) => setTaskData((prev) => {
                                return {
                                    ...prev,
                                    dueDate: e.target.value
                                }
                            })}
                            value={moment(taskData?.dueDate).format('YYYY-MM-DD')}
                            className="form-control mt-1" id="projectName" aria-describedby="emailHelp" placeholder="Enter Project Name" />
                    </div>
                    <div className="form-group mt-3 col-sm-6 col-12">
                        <label htmlFor="projectName">Project Status</label>
                        <select name="" id="" className="form-control mt-1"
                            onChange={(e) => setTaskData((prev) => {
                                return {
                                    ...prev,
                                    status: e.target.value
                                }
                            })}
                            value={taskData?.status}
                        >
                            <option value="Not Started">Not Started</option>
                            <option value="In Progress">In Progress</option>
                            <option value="On Hold">On Hold</option>
                            <option value="Completed">Completed</option>
                        </select>
                    </div>
                    <div className="form-group mt-3 col-sm-6 col-12">
                        <label htmlFor="projectName">Project Priority</label>
                        <select name="" id="" className="form-control mt-1"
                            onChange={(e) => setTaskData((prev) => {
                                return {
                                    ...prev,
                                    priority: e.target.value
                                }
                            })}
                            value={taskData?.priority}
                        >
                            <option value="">Select Project Priority</option>
                            <option value="Low">Low</option>
                            <option value="Medium">Medium</option>
                            <option value="High">High</option>
                        </select>
                    </div>
                </div>
                <div className="row">
                    <div className="form-group mt-3">
                        <button className='btn btn-black' onClick={() => handleUpdateTask()}>Update Task</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UpdateTask