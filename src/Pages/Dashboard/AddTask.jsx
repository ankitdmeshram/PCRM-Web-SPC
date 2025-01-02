import React, { useContext, useEffect, useState } from 'react'
import { Editor } from 'primereact/editor';
import { addProject, addTask } from '../../Actions/Functions';
import { AppContext } from '../../Context/AppContext';
import { useNavigate } from 'react-router-dom';

const AddTask = () => {

    const { setAppData } = useContext(AppContext)
    const navigate = useNavigate()

    const [newTask, setNewTask] = useState({
        taskName: "",
        projectId: "",
        description: "",
        startDate: "",
        endDate: "",
        dueDate: "",
        status: "",
        priority: "",
        tags: "",
        assignedBy: "",
        assignedTo: "",
    })

    const handleAddTask = async () => {
        try {
            console.log("newTask", newTask)

            if (!newTask.taskName) {
                alert("Task Name is required")
                return
            }
            const response = await addTask(newTask)
            if (response.success) {
                alert("Task Added Successfully")
                navigate(`../tasks/${response.task?.projectId}`)
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

        const urlParams = window.location.href.split("/")

        setNewTask((prev) => {
            return {
                ...prev,
                projectId: urlParams[urlParams.indexOf("tasks") + 1]
            }
        })

    }, [])

    return (
        <>
            <div className="add-project-section">
                <div className="row">
                    <div className="col">
                        <h5 className='font-weight-bold'>Add Task</h5>
                    </div>
                    <div className="col text-end">
                        <button className='btn btn-black mb-2' onClick={() => window.history.back()}> <i className="fa fa-arrow-left" aria-hidden="true"></i> Back</button>
                    </div>
                </div>
                <div className="row">
                    <div className="form-group mt-3">
                        <label htmlFor="taskName">Task Name</label>
                        <input type="text"
                            onChange={(e) => setNewTask((prev) => {
                                return {
                                    ...prev,
                                    taskName: e.target.value
                                }
                            })}
                            className="form-control mt-1" id="taskName" aria-describedby="emailHelp" placeholder="Enter Task Name" />
                    </div>
                </div>
                <div className="row">
                    <div className="form-group mt-3">
                        <label htmlFor="description">Description</label>
                        <Editor className='mt-1'
                            onTextChange={(e) => setNewTask((prev) => {
                                return {
                                    ...prev,
                                    description: e.htmlValue
                                }
                            })}
                            style={{ height: '240px' }} />
                    </div>
                </div>
                <div className="row">
                    <div className="form-group mt-3 col-sm-4 col-12">
                        <label htmlFor="projectName">Start Date</label>
                        <input type="date"
                            onChange={(e) => setNewTask((prev) => {
                                return {
                                    ...prev,
                                    startDate: e.target.value
                                }
                            })}
                            className="form-control mt-1" id="projectName" aria-describedby="emailHelp" placeholder="Enter Project Name" />
                    </div>
                    <div className="form-group mt-3 col-sm-4 col-12">
                        <label htmlFor="projectName">End Date</label>
                        <input type="date"
                            onChange={(e) => setNewTask((prev) => {
                                return {
                                    ...prev,
                                    endDate: e.target.value
                                }
                            })}
                            className="form-control mt-1" id="projectName" aria-describedby="emailHelp" placeholder="Enter Project Name" />
                    </div>
                    <div className="form-group mt-3 col-sm-4 col-12">
                        <label htmlFor="projectName">Due Date</label>
                        <input type="date"
                            onChange={(e) => setNewTask((prev) => {
                                return {
                                    ...prev,
                                    dueDate: e.target.value
                                }
                            })}
                            className="form-control mt-1" id="projectName" aria-describedby="emailHelp" placeholder="Enter Project Name" />
                    </div>
                    <div className="form-group mt-3 col-sm-6 col-12">
                        <label htmlFor="projectName">Project Status</label>
                        <select name="" id="" className="form-control mt-1"
                            onChange={(e) => setNewTask((prev) => {
                                return {
                                    ...prev,
                                    status: e.target.value
                                }
                            })}
                        >
                            <option value="">Select Project Status</option>
                            <option value="Not Started">Not Started</option>
                            <option value="In Progress">In Progress</option>
                            <option value="On Hold">On Hold</option>
                            <option value="Completed">Completed</option>
                        </select>
                    </div>
                    <div className="form-group mt-3 col-sm-6 col-12">
                        <label htmlFor="projectName">Project Priority</label>
                        <select name="" id="" className="form-control mt-1"
                            onChange={(e) => setNewTask((prev) => {
                                return {
                                    ...prev,
                                    priority: e.target.value
                                }
                            })}
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
                        <button className='btn btn-black' onClick={() => handleAddTask()}>Add Task</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddTask