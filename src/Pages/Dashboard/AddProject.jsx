import React, { useContext, useEffect, useState } from 'react'
import { Editor } from 'primereact/editor';
import { addProject } from '../../Actions/Functions';
import { AppContext } from '../../Context/AppContext';
import { useNavigate } from 'react-router-dom';

const AddProject = () => {

    const { setAppData } = useContext(AppContext)
    const navigate = useNavigate()

    const [newProject, setNewProject] = useState({
        projectName: '',
        description: '',
        startDate: '',
        endDate: '',
        dueDate: '',
        status: ''
    })

    const handleAddProject = async () => {
        try {
            console.log("newProject", newProject)

            if (!newProject.projectName) {
                alert("All fields are required")
                return
            }
            const response = await addProject(newProject)
            if(response.success) {
                alert("Project Added Successfully")
                navigate(`../update-project#${response.project._id}`)
            }

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        setAppData(prev => {
            return {
                ...prev,
                sidebarOpen: false
            }
        })
    }, [])

    return (
        <>
            <div className="add-project-section">
                <div className="row">
                    <div className="col">
                        <h5 className='font-weight-bold'>Add Project</h5>
                    </div>
                    <div className="col text-end">
                        <button className='btn btn-black mb-2' onClick={() => window.history.back()}> <i className="fa fa-arrow-left" aria-hidden="true"></i> Back</button>
                    </div>
                </div>
                <div className="row">
                    <div className="form-group mt-3">
                        <label htmlFor="projectName">Project Name</label>
                        <input type="text"
                            onChange={(e) => setNewProject({ ...newProject, projectName: e.target.value })}
                            className="form-control mt-1" id="projectName" aria-describedby="emailHelp" placeholder="Enter Project Name" />
                    </div>
                </div>
                <div className="row">
                    <div className="form-group mt-3">
                        <label htmlFor="projectName">Description</label>
                        <Editor className='mt-1'
                            onTextChange={(e) => setNewProject({ ...newProject, description: e.htmlValue })}
                            style={{ height: '240px' }} />
                    </div>
                </div>
                <div className="row">
                    <div className="form-group mt-3 col-sm-6 col-12">
                        <label htmlFor="projectName">Start Date</label>
                        <input type="date"
                            onChange={(e) => setNewProject({ ...newProject, startDate: e.target.value })}
                            className="form-control mt-1" id="projectName" aria-describedby="emailHelp" placeholder="Enter Project Name" />
                    </div>
                    <div className="form-group mt-3 col-sm-6 col-12">
                        <label htmlFor="projectName">End Date</label>
                        <input type="date"
                            onChange={(e) => setNewProject({ ...newProject, endDate: e.target.value })}
                            className="form-control mt-1" id="projectName" aria-describedby="emailHelp" placeholder="Enter Project Name" />
                    </div>
                </div>
                <div className="row">
                    <div className="form-group mt-3 col-sm-6 col-12">
                        <label htmlFor="projectName">Due Date</label>
                        <input type="date"
                            onChange={(e) => setNewProject({ ...newProject, dueDate: e.target.value })}
                            className="form-control mt-1" id="projectName" aria-describedby="emailHelp" placeholder="Enter Project Name" />
                    </div>
                    <div className="form-group mt-3 col-sm-6 col-12">
                        <label htmlFor="projectName">Project Status</label>
                        <select name="" id="" className="form-control mt-1"
                            onChange={(e) => setNewProject({ ...newProject, status: e.target.value })}
                        >
                            <option value="">Select Project Status</option>
                            <option value="Not Started">Not Started</option>
                            <option value="In Progress">In Progress</option>
                            <option value="On Hold">On Hold</option>
                            <option value="Completed">Completed</option>
                        </select>
                    </div>
                </div>
                <div className="row">
                    <div className="form-group mt-3">
                        <button className='btn btn-black' onClick={() => handleAddProject()}>Add Project</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddProject