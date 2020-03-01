import http from './httpService';

const apiEndpoint ="/blog/create";
const apiEndpoint2 ="/allpost";


export function createBlog(data){
    console.log("Created new post", data);
    return http.post(apiEndpoint, data);
}

export function showpost(){
    return http.get(apiEndpoint2);
}

export default{
    createBlog,
    showpost
};