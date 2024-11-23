
import { domainName, setCookie } from "../Utils/common";


export const signIn = async (userData) => {

    try {
        const response = await fetch(`${domainName()}/api/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        });
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