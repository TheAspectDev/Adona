import { getCookie, deleteCookie } from 'cookies-next';


// Checks if user is Authenticated using Rest API
export async function isAuthenticated (token) {
    
    if (token) {
        const req = await fetch(`http://127.0.0.1:1000/api/user/authenticated`, {
            method: "get",
            headers: {
                'WWW-Authenticate': getCookie('_token')

            }
        })
        let data = (JSON.parse(await req.json()))
        console.log()
        return data.callback.authenticated
    } else {
        
        return false
    }
}


// Exports User Data using Rest API
export async function getUserDetails (token) {
        const req = await fetch('http://127.0.0.1:1000/api/user/details', {
            headers: {
                'WWW-Authenticate': getCookie('_token')

            }
        })

        const data = await req.json()

       return data

}