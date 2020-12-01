import { observable,  action, computed } from "mobx"
import FreeboardApi from "../api/FreeboardApi";
import FreeboardPostAddModel from "../api/model/post/FreeboardPostAddModel";
import FreeboardCommentAddModel from "../api/model/comment/FreeboardCommentAddModel";
import FreeboardPostModifyModel from "../api/model/post/FreeboardPostModifyModel";

class FreeboardStore{

    freeApi = new FreeboardApi();

    @observable
    freeboard_list = []

    @observable
    freeboard_detail = {}

 
    @observable 
    pwd_check =false;

    @observable
    commentList = [];

    @observable
    freeboard_cate = ["자유", "취업", "연애", "학업", "유머", "스포츠", "회사"];

    @observable
    comments = [];

    @observable
    comment = {};

    @observable
    select_cate = [];

    @observable 
    freeboard_select_posts = [];


    @computed get _detail(){
      return this.freeboard_detail ? {...this.freeboard_detail} : {};
    }
    


    @action
    async freeboardList(){
      let result =await this.freeApi.freeboardList()

      for(let i =0; i<result.length; i++){
        let comments = await this.freeApi.freeboardComments(result[i].id)
        let commentsLength = comments.length;

        if(comments.length!==0){
          comments = comments.filter(val=> {return val.subComments.length> 0 })
            .map((val, ind)=> commentsLength += val.subComments.length)
        }
        result[i] = {...result[i], commentLen: commentsLength}
      }

      this.freeboard_list = result.sort((a, b)=>{return b.id-a.id});

    }

    @action
    async freeboardPostSelect(postId){

      this.freeboardList();
       this.freeboard_detail = await this.freeApi.freeboardPostSelect(postId);
       this.increaseViewCnt(postId);
    }

    @action increaseViewCnt(postId){
      this.freeApi.freeboardIncreView(postId);
    }

    @action
    async freeboardCommentSelect(postId){
      let post_comments = await this.freeApi.freeboardComments(postId);
      this.comments = post_comments;
      return post_comments;
    }

    @action
    async freeboardModifyPost(post){
      let modifiedPost = new FreeboardPostModifyModel(post);
       await this.freeApi.freeboardModifyPost(post.id, modifiedPost)
    }

    @action
    async onCreatePost(post){
      if(post.pwd === "" || post.pwd === undefined || post.pwd ===null){
        return alert("비밀번호를 입력해주세요.")
      }


      post = new FreeboardPostAddModel(post);
      let result = await this.freeApi.freeboardCreatePost(post);

      if(result == null){
        alert("게시글 입력에 에러가 발생했습니다.")
        console.log("Null exception on Creating Freeboard Post")
      }else{
        console.log(result, "자유게시글 입력성공");
      }
    }
    
    @action
    async onCreateComment(postId, comment){

      let newComment = new FreeboardCommentAddModel(comment);
      let result = await this.freeApi.freeboardCreateComment(postId, newComment);

      if(result==null){
        return "댓글 등록 에러"
      }else{
        return "댓글 등록 성공"
      }
    }

    @action
    async onDeleteComment( postId ,commentId, pwd){

      let result = await this.freeApi.freeboardCommentDelete(postId, commentId, pwd);
      if(result ===null){
        return "댓글 삭제 실패"
      }else{
        alert("댓글이 삭제되었습니다.")
        return "댓글 삭제 성공"
      }
    }

    @action 
    async onCheckPwd(postId, pwd){
      let result = await this.freeApi.onCheckPwd(postId, pwd)

      return this.pwd_check= result
    }

    @action 
    async onCreateSubComment(postId, comment){
      let commentId = comment.commentId;
      let result = await this.freeApi.freeboardsubCommCreate(postId, commentId, comment);

      if(result == null){
        return "서브댓글 작성 실패"
      }else{
        return "서브댓글 작성 완료"
      }
    }

    @action
    async onDeleteSubComment(commentId, subCommId, pwd){
      let postId = this.freeboard_detail.id;

      let result = await this.freeApi.freeboardsubCommDelete(postId, commentId, subCommId, pwd);

      if(result ==null){
        return "대댓글 삭제 실패"
      }else{
        return "대댓글 삭제 성공"
      }
    }

    @action
    onLikePost =(like)=>{
      let postId = this.freeboard_detail.id;

      if(like ===false){
        let result = this.freeApi.freeboardPostLike(postId);

      }else{
        this.freeApi.freeboardPostDislike(postId);
 
      }
    }

    @action
    async onDeletePost(postId){ 


        let result = await this.freeApi.freeboardPostDelete(postId)
        if(result ==null){
          return "포스트 삭제 에러"
        }else{
          return "포스트 삭제 성공"
        }
    }

    @action
    onFilterPosts =(cate_list)=>{

      let select_post = []
      if(cate_list.length===0){

          this.freeboard_select_posts= this.freeboard_list
          
      }else{
        cate_list.forEach((cate)=> {

        let filtered= this.freeboard_list.filter((val)=> {
             return val = (val.cate === cate)  
        })

        if(filtered.length > 0){
          filtered.map(val=> select_post.push(val))
          }
        }) ;
 
       this.freeboard_select_posts = select_post
       
      }

    }

    @action
    setCategorySelect=(cate_list)=>{
        this.onFilterPosts(cate_list);
    }

    @action
    setListOrderBy(e) {
      switch (e) {
        case "v":
          let viewList = this.freeboard_list.slice().sort((a, b) => b["viewCnt"] - a["viewCnt"])
          this.freeboard_list = viewList
          break
        case "l":
          let likeList = this.freeboard_list.slice().sort((a, b) => b["likes"] - a["likes"])
          this.freeboard_list = likeList
          break
        case "d":
          let dateList = this.freeboard_list.sort((a, b) =>  Date.parse(b["registerDate"]) -  Date.parse(a["registerDate"]))
          this.freeboard_list = dateList
          break
        default :
          return "End";
      }
    }
}

export default FreeboardStore
