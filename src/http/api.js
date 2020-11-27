import { http } from './http';
export function addlist(){
    return http('/addlist','GET',{},{}).then(res=>{
        return res;
    })
}