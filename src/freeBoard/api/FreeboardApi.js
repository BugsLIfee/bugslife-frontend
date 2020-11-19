import axios from "axios";
import {FREEBOARD_API_URL} from "../../oauth/constants/index"

export default class FreeboardApi{

   API="/api/freeboard/"


    freeboardList(){
        let result = axios.get(FREEBOARD_API_URL+"/api/freeboard/").then(
            (response)=>(response && response.data) || null
        )
        return result;

    }

    freeboardPostSelect(postNum){
        let post = axios.get(FREEBOARD_API_URL+"/api/freeboard/"+postNum).then(
            (response)=>(response && response.data) || null
        )

        return post;
    }

    freeboardCreatePost(post){
        let newPost = axios.post(FREEBOARD_API_URL+"/api/freeboard/", post).then(
            (response)=>(response && response.data) || null
        )
        return newPost;
    }

    freeboardComments(postId){
        let comments = axios.get(`${FREEBOARD_API_URL+"/api/freeboard/"}${postId}/comment`).then(
            (response)=>(response && response.data) || null
        )
        return comments;
    }

    freeboardCreateComment(postId, comment){
        console.log(postId, comment)
        let new_comment = axios.post(`${FREEBOARD_API_URL+"/api/freeboard/"}${postId}/comment`, comment).then(
            (response)=>(response && response.data) || null
        )
            return new_comment;
    }


    freeboardCommentDelete(postId, commentId, pwd){
        console.log(postId, commentId, pwd);
        let result = axios.delete(FREEBOARD_API_URL+"/api/freeboard/"+postId +`/comment/${commentId}`, {
            params : {pwd:pwd}
        }).then(
            (response)=>(response && response.data) || null
        )
        return result;
    }

    freeboardsubCommCreate(postId, commentId, comment){
        let new_comment = axios.post(`${FREEBOARD_API_URL+"/api/freeboard/"}${postId}/comment/${commentId}/subcomment`, comment).then(
            (response)=>(response && response.data) || null
        )
            return new_comment;
    }

    freeboardsubCommDelete(postId, commentId, subCommId, pwd){
        // DELETE /api/freeboard/{postId}/comment/{commentId}/{subcommId}
        let url = FREEBOARD_API_URL+"/api/freeboard/"+postId+`/comment/${commentId}/${subCommId}`
        let result = axios.delete(url, {
            params : {pwd : pwd}
        }).then(
            (response)=>(response && response.data) || null
        )

        return result
        
    }

    freeboardPostDelete(postId, pwd){
    
        let result = axios.delete(FREEBOARD_API_URL+"/api/freeboard/" + postId ,{
            params : {pwd: pwd}
        }).then(
            (response)=>(response && response.data) || null
        )
        return result;
    }

    freeboardPostLike(postId){
        let result = axios.put(FREEBOARD_API_URL+"/api/freeboard/"+postId).then(
            (response)=>(response && response.data) || null
        )
        console.log("api ==== >"+result);

        this.freeboardPostSelect(postId)
        return result; 
    }

    freeboardPostDislike(postId){
        let result = axios.put(FREEBOARD_API_URL+"/api/freeboard/"+postId+"/dislike").then(
            (response)=>(response && response.data) || null
        )
        console.log("api dislike ====> ")
        console.log(result);
        return result;
    }

    freeboardIncreView(postId){
        let result = axios.put(FREEBOARD_API_URL+"/api/freeboard/"+postId+"/view").then(
            (response)=>(response && response.data) || null
        )
        return result;
    }
    // freeboardCommentList(){
    //     let commentList = axios
    // }
}