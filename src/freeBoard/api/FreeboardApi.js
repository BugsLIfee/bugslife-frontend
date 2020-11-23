import axios from "axios";
// import {FREEBOARD_API_URL} from "../../oauth/constants/index"

export default class FreeboardApi{

   API="/api/freeboard/"


    freeboardList(){
        let result = axios.get("/api/freeboard/").then(
            (response)=>(response && response.data) || null
        )
        return result;

    }

    freeboardPostSelect(postNum){
        let post = axios.get("/api/freeboard/"+postNum).then(
            (response)=>(response && response.data) || null
        )

        return post;
    }

    freeboardCreatePost(post){
        let newPost = axios.post("/api/freeboard/", post).then(
            (response)=>(response && response.data) || null
        )
        return newPost;
    }

    freeboardModifyPost(postId, post){
        let newPost = axios.put("/api/freeboard/edit/"+postId, post).then(
            (response)=>(response && response.data) || null
        )
        return newPost;
    }

    freeboardComments(postId){
        let comments = axios.get(`/api/freeboard/${postId}/comment`).then(
            (response)=>(response && response.data) || null
        )
        return comments;
    }

    freeboardCreateComment(postId, comment){
        console.log(postId, comment)
        let new_comment = axios.post(`/api/freeboard/${postId}/comment`, comment).then(
            (response)=>(response && response.data) || null
        )
            return new_comment;
    }


    freeboardCommentDelete(postId, commentId, pwd){
        console.log(postId, commentId, pwd);
        let result = axios.delete("/api/freeboard/"+postId +`/comment/${commentId}`, {
            params : {pwd:pwd}
        }).then(
            (response)=>(response && response.data) || null
        )
        return result;
    }

    freeboardsubCommCreate(postId, commentId, comment){
        let new_comment = axios.post(`/api/freeboard/${postId}/comment/${commentId}/subcomment`, comment).then(
            (response)=>(response && response.data) || null
        )
            return new_comment;
    }

    freeboardsubCommDelete(postId, commentId, subCommId, pwd){
        // DELETE /api/freeboard/{postId}/comment/{commentId}/{subcommId}
        let url = "/api/freeboard/"+postId+`/comment/${commentId}/${subCommId}`
        let result = axios.delete(url, {
            params : {pwd : pwd}
        }).then(
            (response)=>(response && response.data) || null
        )

        return result
        
    }

    freeboardPostDelete(postId, pwd){
    
        let result = axios.delete("/api/freeboard/" + postId ,{
            params : {pwd: pwd}
        }).then(
            (response)=>(response && response.data) || null
        )
        return result;
    }

    freeboardPostLike(postId){
        let result = axios.put("/api/freeboard/"+postId).then(
            (response)=>(response && response.data) || null
        )
        console.log("api ==== >"+result);

        this.freeboardPostSelect(postId)
        return result; 
    }

    freeboardPostDislike(postId){
        let result = axios.put("/api/freeboard/"+postId+"/dislike").then(
            (response)=>(response && response.data) || null
        )
        console.log("api dislike ====> ")
        console.log(result);
        return result;
    }

    freeboardIncreView(postId){
        let result = axios.put("/api/freeboard/"+postId+"/view").then(
            (response)=>(response && response.data) || null
        )
        return result;
    }
    // freeboardCommentList(){
    //     let commentList = axios
    // }
}