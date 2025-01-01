import React, { useContext, useEffect, useState } from 'react'
import { Editor } from 'primereact/editor';
import { updateProject, viewProject } from '../../Actions/Functions';
import moment from 'moment';
import { AppContext } from '../../Context/AppContext';

const UpdateProject = () => {

    const { setAppData } = useContext(AppContext)

    const [projectData, setProjectData] = useState({
        projectName: "",
        description: "",
        startDate: "",
        endDate: "",
        dueDate: "",
        status: "",
        _id: ""
    })

    useEffect(() => {
        const urlParams = window.location.hash.split("#")[1]
        console.log("urlParams", urlParams)
        handleViewProject(urlParams)

        setAppData(prev => {
            return {
                ...prev,
                sidebarOpen: false
            }
        })

    }, [])

    const handleViewProject = async (id) => {
        try {
            const response = await viewProject(id)
            console.log("response", response)
            setProjectData(response.project)
        } catch (error) {
            console.log(error)
        }
    }

    const handleUpdateProject = async () => {
        try {

            if (!projectData?.projectName) {
                alert("All fields are required")
                return
            }
            console.log("projectData", projectData)
            const response = await updateProject(projectData)
            if (response.success) {
                alert("Project Updated Successfully")
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <div className="add-project-section">
                <div className="row">
                    <div className="col">
                        <h5 className='font-weight-bold'>Update Project</h5>
                    </div>
                    <div className="col text-end">
                        <button className='btn btn-black mb-2' onClick={() => window.history.back()}> <i className="fa fa-arrow-left" aria-hidden="true"></i> Back</button>
                    </div>
                </div>
                <div className="row">
                    <div className="form-group mt-3">
                        <label htmlFor="projectName">Project Name</label>
                        <input type="text"
                            value={projectData?.projectName}
                            onChange={(e) => setProjectData({ ...projectData, projectName: e.target.value })}
                            className="form-control mt-1" id="projectName" aria-describedby="emailHelp" placeholder="Enter Project Name" />
                    </div>
                </div>
                <div className="row">
                    <div className="form-group mt-3">
                        <label htmlFor="projectName">Description</label>
                        <Editor className='mt-1'
                            value={projectData?.description}
                            onTextChange={(e) => setProjectData({ ...projectData, description: e.htmlValue })}
                            style={{ height: '240px' }} />
                    </div>
                </div>
                <div className="row">
                    <div className="form-group mt-3 col-sm-6 col-12">
                        <label htmlFor="projectName">Start Date</label>
                        <input type="date"
                            value={moment(projectData?.startDate).format('YYYY-MM-DD')}
                            onChange={(e) => setProjectData({ ...projectData, startDate: e.target.value })}
                            className="form-control mt-1" id="projectName" aria-describedby="emailHelp" placeholder="Enter Project Name" />
                    </div>
                    <div className="form-group mt-3 col-sm-6 col-12">
                        <label htmlFor="projectName">End Date</label>
                        <input type="date"
                            value={moment(projectData?.endDate).format('YYYY-MM-DD')}
                            onChange={(e) => setProjectData({ ...projectData, endDate: e.target.value })}
                            className="form-control mt-1" id="projectName" aria-describedby="emailHelp" placeholder="Enter Project Name" />
                    </div>
                </div>
                <div className="row">
                    <div className="form-group mt-3 col-sm-6 col-12">
                        <label htmlFor="projectName">Due Date</label>
                        <input type="date"
                            value={moment(projectData?.dueDate).format('YYYY-MM-DD')}
                            onChange={(e) => setProjectData({ ...projectData, dueDate: e.target.value })}
                            className="form-control mt-1" id="projectName" aria-describedby="emailHelp" placeholder="Enter Project Name" />
                    </div>
                    <div className="form-group mt-3 col-sm-6 col-12">
                        <label htmlFor="projectName">Project Status</label>
                        <select name="" id="" className="form-control mt-1"
                            value={projectData?.status}
                            onChange={(e) => setProjectData({ ...projectData, status: e.target.value })}
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
                        <button className='btn btn-black' onClick={() => handleUpdateProject()}>Update Project</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UpdateProject