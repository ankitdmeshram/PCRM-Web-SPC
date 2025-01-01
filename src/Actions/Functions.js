
import { domainName, getCookie, postAPI, setCookie } from "../Utils/common";

//  Auth Functions Start

export const signIn = async (userData) => {
    try {
        const response = await postAPI(`${domainName()}/api/auth/login`, userData);

        const data = await response.json();
        console.log("data", data)
        if (data) {
            if (data.success) {
                setCookie("ud", data.token, 30)
                setCookie("udd", JSON.stringify(data.user), 30)
                return data
            }
            alert(data.message);
            return false
        } else {
            alert(data.message);
            return false
        }
    } catch (error) {
        console.error('Error:', error);
        return false
    }
}

export const signUp = async (userData) => {
    try {
        const response = await postAPI(`${domainName()}/api/auth/register`, userData);
        const data = await response.json();
        console.log("data", data)
        if (data) {
            if (data.success) {
                setCookie("ud", data.token, 30)
                setCookie("udd", JSON.stringify(data.user), 30)
                return data
            }
            alert(data.message);
            return false
        } else {
            alert(data.message);
            return false
        }
    } catch (error) {
        console.error('Error:', error);
        return false
    }
}

export const isLoggedIn = async () => {
    if (await getCookie("ud")) {
        return true
    } else {
        return false
    }
}
//  Auth Functions End

//  Project Functions Start
export const addProject = async (projectData) => {
    try {
        const response = await postAPI(`${domainName()}/api/project/create-project`, projectData);
        const data = await response.json();
        console.log("data", data)
        if (data) {
            if (data.success) {
                return data
            }
            alert(data.message);
            return false
        } else {
            alert(data.message);
            return false
        }
    } catch (error) {
        console.error('Error:', error);
        return false
    }
}

export const allProject = async () => {
    try {
        const response = await fetch(`${domainName()}/api/project/all-project`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-auth-token': await getCookie('ud'),
            },
        });
        return response.json()
    } catch (error) {
        alert("Failed to connect to the server. Please try again later.");
        return error
    }
}

export const deleteProject = async (_id) => {
    try {
        const response = await postAPI(`${domainName()}/api/project/delete-project`, { _id });
        const data = await response.json();
        console.log("data", data)
        if (data) {
            if (data.success) {
                return data
            }
            alert(data.message);
            return false
        } else {
            alert(data.message);
            return false
        }
    } catch (error) {
        console.error('Error:', error);
        return false
    }
}

export const updateProject = async (projectData) => {
    try {
        const response = await postAPI(`${domainName()}/api/project/update-project`, projectData);
        const data = await response.json();
        console.log("data", data)
        if (data) {
            if (data.success) {
                return data
            }
            alert(data.message);
            return false
        } else {
            alert(data.message);
            return false
        }
    } catch (error) {
        console.error('Error:', error);
        return false
    }
}

export const viewProject = async (_id) => {
    try {
        const response = await postAPI(`${domainName()}/api/project/view-project`, { _id });
        return response.json()
    } catch (error) {
        alert("Failed to connect to the server. Please try again later.");
        return error
    }
}

export const addTask = async (taskData) => {
    try {
        const response = await postAPI(`${domainName()}/api/project/create-task`, taskData);
        const data = await response.json();
        console.log("data", data)
        if (data) {
            if (data.success) {
                return data
            }
            alert(data.message);
            return false
        } else {
            alert(data.message);
            return false
        }
    } catch (error) {
        console.error('Error:', error);
        return false
    }
}

export const allTasks = async (projectId) => {
    try {
        const response = await postAPI(`${domainName()}/api/project/all-tasks`, { projectId });
        return response.json()
    } catch (error) {
        alert("Failed to connect to the server. Please try again later.");
        return error
    }
}

export const updateTask = async (projectData) => {
    try {
        const response = await postAPI(`${domainName()}/api/project/update-task`, projectData);
        const data = await response.json();
        console.log("data", data)
        if (data) {
            if (data.success) {
                return data
            }
            alert(data.message);
            return false
        } else {
            alert(data.message);
            return false
        }
    } catch (error) {
        console.error('Error:', error);
        return false
    }
}

export const viewTask = async (_id) => {
    try {
        const response = await postAPI(`${domainName()}/api/project/view-task`, { _id });
        return response.json()
    } catch (error) {
        alert("Failed to connect to the server. Please try again later.");
        return error
    }
}

export const deleteTask = async (_id) => {
    try {
        const response = await postAPI(`${domainName()}/api/project/delete-task`, { _id });
        const data = await response.json();
        console.log("data", data)
        if (data) {
            if (data.success) {
                return data
            }
            alert(data.message);
            return false
        } else {
            alert(data.message);
            return false
        }
    } catch (error) {
        console.error('Error:', error);
        return false
    }
}
// Project Functions End