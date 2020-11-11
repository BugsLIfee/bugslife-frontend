import { request }from "../../oauth/api/APIUtils";
import axios from "axios";

export default class FreeboardApi{

    FREE_API_URL="http://localhost:8088/api/freeboard/"


    freeboardList(){
       let result = axios.get(this.FREE_API_URL).then(
           (response)=>(response && response.data) || null
       )
       return result;

    }

    freeboardPostSelect(postNum){
        let post = axios.get(this.FREE_API_URL+ postNum).then(
            (response)=>(response && response.data) || null
        )
        return post;
    }

    freeboardCreatePost(post){
        let newPost = axios.post(this.FREE_API_URL, post).then(
            (response)=>(response && response.data) || null
        )
        return newPost;
    }

    freeboardComments(postId){
        let comments = axios.get(`${this.FREE_API_URL}${postId}/comment`).then(
            (response)=>(response && response.data) || null
        )
        return comments;
    }

    freeboardCreateComment(postId, comment){
        console.log("====API 전달 완료=====")
        console.log(postId, comment)
        let new_comment = axios.post(`${this.FREE_API_URL}${postId}/comment`, comment).then(
            (response)=>(response && response.data) || null
        )
        console.log("====BACKEND=====")
            return new_comment;
    }

    freeboardPostDelete(postId, pwd){
        console.log(this.FREE_API_URL + postId)
        let result = axios.delete(this.FREE_API_URL + postId ,{
            params : {pwd: pwd}
        }).then(
            (response)=>(response && response.data) || null
        )
        console.log(result);
        return result;
    }

    // freeboardCommentList(){
    //     let commentList = axios
    // }
}