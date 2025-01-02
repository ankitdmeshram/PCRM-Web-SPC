import React, { useContext, useEffect } from 'react'
import { AppContext } from '../../Context/AppContext'
import { useLocation, useNavigate } from 'react-router-dom'
import { allTasks, deleteTask } from '../../Actions/Functions'
import moment from 'moment'

const Tasks = () => {

    const { appData, setAppData } = useContext(AppContext)
    const navigate = useNavigate()
    const location = useLocation();

    useEffect(() => {
        fetchAllTasks()
        setAppData(prev => {
            return {
                ...prev,
                sidebarOpen: false
            }
        })
        return () => {
            setAppData(prev => {
                return {
                    ...prev,
                    tasks: []
                }
            })
        }
    }, [])

    const fetchAllTasks = async () => {
        const urlParams = window.location.href.split("/")
        const response = await allTasks(urlParams[urlParams.indexOf("tasks") + 1])
        setAppData(prev => {
            return {
                ...prev,
                tasks: response?.tasks
            }
        })
    }

    const handleDeleteTask = async (task) => {
        let confirm = window.confirm(`Are you sure you want to delete this task - "${task?.taskName}"?`)
        if (!confirm) {
            return
        }
        const response = await deleteTask(task._id)
        if (response.success) {
            alert("Task Deleted Successfully")
            console.log("response", response)
            let tasks = appData?.tasks.filter((item) => item._id !== task._id)
            setAppData(prev => {
                return {
                    ...prev,
                    tasks
                }
            })
        }
    }
    return (
        <>
            <button className='btn btn-black mb-2' onClick={() => navigate(`./add-task`)}>New Task</button>
            <div className=" table-main">
                <div className="table-row thead">
                    <div className="table-col table-index">ID</div>
                    <div className="table-col table-title">Tasks Name</div>
                    <div className="col table-col table-date">Status</div>
                    <div className="col table-col table-date">Priority</div>
                    <div className="col table-col table-date">Start Date</div>
                    <div className="col table-col table-date">Due Date</div>
                    <div className="col table-col table-date">End Date</div>
                    <div className="col table-col table-date">Updated At</div>
                    <div className="col table-col table-date">Created At</div>
                    <div className="col table-action">Action</div>
                </div>
                {
                    appData?.tasks && appData?.tasks.length > 0 && appData?.tasks.map((task, i) => {
                        return <div className="table-row" key={i} style={(task.dueDate && moment()?.isAfter(task.dueDate) && task.status != "Completed") ? { background: "#ff0000bb" } : task.status == "Completed" ? { background: "#00ff0088" } : task.status == "In Progress" ? { background: "#ffff0088" } : {}}>
                            <div className="table-col table-index">{task.projectId == "67755ddcbab1d2efdc94cdb6" && "BR-"}{task.taskId}</div>
                            <div className="table-col table-title pointer-cursor" onClick={() => navigate(`../update-task#${task?._id}`)}>{task.taskName}</div>
                            <div className="col table-col table-date">{task.status}</div>
                            <div className="col table-col table-date">{task.priority}</div>
                            <div className="col table-col table-date">{task.startDate && moment(task.startDate).format('YYYY-MM-DD')}</div>
                            <div className="col table-col table-date">{task.dueDate && moment(task.dueDate).format('YYYY-MM-DD')}</div>
                            <div className="col table-col table-date">{task.endDate && moment(task.endDate).format('YYYY-MM-DD')}</div>
                            <div className="col table-col table-date">{task.updatedAt && moment(task.updatedAt).format('YYYY-MM-DD')}</div>
                            <div className="col table-col table-date">{task.createdAt && moment(task.createdAt).format('YYYY-MM-DD')}</div>
                            <div className="col table-action">
                                <button className="col btn btn-black me-1" onClick={() => navigate(`../update-task#${task?._id}`)}>Update</button><button className="col btn btn-danger" onClick={() => handleDeleteTask(task)}>Delete</button>
                            </div>
                        </div>
                    })
                }
            </div>
        </>
    )
}

export default Tasks