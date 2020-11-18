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
        console.log(postId, comment)
        let new_comment = axios.post(`${this.FREE_API_URL}${postId}/comment`, comment).then(
            (response)=>(response && response.data) || null
        )
            return new_comment;
    }


    freeboardCommentDelete(postId, commentId, pwd){
        console.log(postId, commentId, pwd);
        let result = axios.delete(this.FREE_API_URL+postId +`/comment/${commentId}`, {
            params : {pwd:pwd}
        }).then(
            (response)=>(response && response.data) || null
        )
        return result;
    }

    freeboardsubCommCreate(postId, commentId, comment){
        let new_comment = axios.post(`${this.FREE_API_URL}${postId}/comment/${commentId}/subcomment`, comment).then(
            (response)=>(response && response.data) || null
        )
            return new_comment;
    }

    freeboardsubCommDelete(postId, commentId, subCommId, pwd){
        // DELETE /api/freeboard/{postId}/comment/{commentId}/{subcommId}
        let url = this.FREE_API_URL+postId+`/comment/${commentId}/${subCommId}`
        let result = axios.delete(url, {
            params : {pwd : pwd}
        }).then(
            (response)=>(response && response.data) || null
        )

        return result
        
    }

    freeboardPostDelete(postId, pwd){
    
        let result = axios.delete(this.FREE_API_URL + postId ,{
            params : {pwd: pwd}
        }).then(
            (response)=>(response && response.data) || null
        )
        return result;
    }

    freeboardPostLike(postId){
        let result = axios.put(this.FREE_API_URL+postId).then(
            (response)=>(response && response.data) || null
        )
        console.log("api ==== >"+result);

        this.freeboardPostSelect(postId)
        return result; 
    }

    freeboardPostDislike(postId){
        let result = axios.put(this.FREE_API_URL+postId+"/dislike").then(
            (response)=>(response && response.data) || null
        )
        console.log("api dislike ====> ")
        console.log(result);
        return result;
    }

    freeboardIncreView(postId){
        let result = axios.put(this.FREE_API_URL+postId+"/view").then(
            (response)=>(response && response.data) || null
        )
        return result;
    }
    // freeboardCommentList(){
    //     let commentList = axios
    // }
}