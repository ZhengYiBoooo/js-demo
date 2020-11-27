
import axios from 'axios';

axios.defaults.baseURL = '/api'

export const http = (url, method = "get", data, params) => {
    return new Promise((resolve, reject) => {
        axios({
            url,
            method,
            headers: {
            },
            data,
            params,
        }).then(res => {
            if (res.status >= 200 && res.status < 300 || res.status == 304) {
                resolve(res);
            } else {
                reject(res);
            }
        }).catch(err => {
            reject(err)
        })
    })
}