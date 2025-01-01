import React, { useContext, useEffect } from 'react'
import { AppContext } from '../../Context/AppContext'
import { useNavigate } from 'react-router-dom'
import { allProject, deleteProject } from '../../Actions/Functions'
import moment from 'moment'
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import 'primereact/resources/themes/lara-light-indigo/theme.css';

const Projects = () => {

    const { appData, setAppData } = useContext(AppContext)
    const navigate = useNavigate()

    useEffect(() => {
        fetchAllProject()

        setAppData(prev => {
            return {
                ...prev,
                sidebarOpen: false
            }
        })
    }, [])

    const fetchAllProject = async () => {
        const response = await allProject()
        console.log("response", response)
        setAppData(prev => {
            return {
                ...prev,
                projects: response?.projects.map((project, i) => {
                    return {
                        ...project,
                        id: i + 1
                    }
                })
            }
        })
    }

    const handleDeleteProject = async (project) => {
        let confirm = window.confirm(`Are you sure you want to delete this project - "${project?.projectName}"?`)
        if (!confirm) {
            return
        }
        const response = await deleteProject(project._id)
        if (response.success) {
            alert("Project Deleted Successfully")
            console.log("response", response)
            let projects = appData?.projects.filter((item) => item._id !== project._id)
            setAppData(prev => {
                return {
                    ...prev,
                    projects
                }
            })
        }
    }
    return (
        <>
            <button className='btn btn-black mb-2' onClick={() => navigate("../add-project")}>New Project</button>

            <div className=" table-main">
                <div className="table-row thead">
                    <div className="table-col table-index">Sr. No.</div>
                    <div className="table-col table-title">Project Name</div>
                    <div className="col table-col table-date">Status</div>
                    <div className="col table-col table-date">Start Date</div>
                    <div className="col table-col table-date">Due Date</div>
                    <div className="col table-col table-date">End Date</div>
                    <div className="col table-col table-date">Updated At</div>
                    <div className="col table-col table-date">Created At</div>
                    <div className="col table-action">Action</div>
                </div>

                {
                    appData?.projects && appData?.projects.length > 0 && appData?.projects.map((project, i) => {
                        return <div className="table-row" key={i}>
                            <div className="table-col table-index">{i + 1}</div>
                            <div className="table-col table-title pointer-cursor" onClick={() => navigate(`../tasks/${project?._id}`)}>{project.projectName}</div>
                            <div className="col table-col table-date">{project.status}</div>
                            <div className="col table-col table-date">{project.startDate && moment(project.startDate).format('YYYY-MM-DD')}</div>
                            <div className="col table-col table-date">{project.dueDate && moment(project.dueDate).format('YYYY-MM-DD')}</div>
                            <div className="col table-col table-date">{project.endDate && moment(project.endDate).format('YYYY-MM-DD')}</div>
                            <div className="col table-col table-date">{project.updatedAt && moment(project.updatedAt).format('YYYY-MM-DD')}</div>
                            <div className="col table-col table-date">{project.createdAt && moment(project.createdAt).format('YYYY-MM-DD')}</div>
                            <div className="col table-action">
                                <button className="col btn btn-black me-1" onClick={() => navigate(`../update-project#${project?._id}`)}>Update</button><button className="col btn btn-danger" onClick={() => handleDeleteProject(project)}>Delete</button>
                            </div>
                        </div>
                    })
                }
            </div>
        </>
    )
}

export default Projects