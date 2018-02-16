const apis = process.env.REACT_APP_CONTACTS_API_URL || 'http://localhost:8080';


export const getDir = (payload) =>
    fetch(`${apis}/rest/files/all`, {
        method: 'GET',
    }).then(res => {
        return res.json();
    }).catch(error => {
        console.log("This is error");
        return error;
    });