import { observable,  action, computed } from "mobx"
import FreeboardApi from "../api/FreeboardApi";
import FreeboardPostAddModel from "../api/model/post/FreeboardPostAddModel";
// import FreeboardPostModel from "../api/model/post/FreeboardPostModel";
import  { Redirect } from 'react-router-dom'
import FreeboardCommentAddModel from "../api/model/comment/FreeboardCommentAddModel";

class FreeboardStore{

    freeApi = new FreeboardApi();

    @observable
    freeboard_list = []

    @observable
    freeboard_detail = {}

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
      let result = await this.freeApi.freeboardList()

      if(result !==null){
        this.freeboard_list =result.map(val=>  { return{...val} });

      } else{
        console.log("freeboard nulllllllll");
      }
    }

    @action
    async freeboardPostSelect(postId){
      let post = await this.freeApi.freeboardPostSelect(postId);
      this.freeboard_detail = post;
      // console.log(this.freeboard_detail);

    }

    @action
    async freeboardCommentSelect(postId){
      let post_comments = await this.freeApi.freeboardComments(postId);
      this.comments = post_comments;
      return post_comments;
    }

    @action
    async onCreatePost(post){
      if(post.pwd === "" || post.pwd === undefined || post.pwd ===null){
        return alert("비밀번호를 입력해주세요.")
      }
      if(post.cate ===""){
        alert("카테고리는 필수 선택사항입니다.")
        return;
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
      console.log(newComment)
      let result = await this.freeApi.freeboardCreateComment(postId, newComment);

      console.log("====store 전달 완료=====")
      if(result==null){
        return "댓글 등록 에러"
      }else{
        return "댓글 등록 성공"
      }
    }

    @action
    async onDeleteComment( postId ,commentId, pwd){
      console.log("====store====")
      console.log(postId, commentId, pwd);

      let result = await this.freeApi.freeboardCommentDelete(postId, commentId, pwd);
      if(result ===null){
        return "댓글 삭제 실패"
      }else{
        alert("댓글이 삭제되었습니다.")
        return "댓글 삭제 성공"
      }
    }

    @action 
    async onCreateSubComment(postId, comment){
      console.log(postId, comment)

      let commentId = comment.commentId;

      console.log(postId, commentId, comment)
      let result = await this.freeApi.freeboardsubCommCreate(postId, commentId, comment);

      if(result == null){
        return "서브댓글 작성 실패"
      }else{
        return "서브댓글 작성 완료"
      }
    }

    @action
    async onDeleteSubComment(commentId, subCommId, pwd){
      console.log(commentId, subCommId, pwd)
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
      if(like ===false){
        this.freeboard_detail.likes+=1
      }else{
        this.freeboard_detail.likes-=1
      }
    }

    @action
    async onDeletePost(pwd, postId){ 
      console.log(pwd, postId)

        let result = await this.freeApi.freeboardPostDelete(postId, pwd)
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
        console.log("No category")
          this.freeboard_select_posts= this.freeboard_list
          
      }else{
        cate_list.map((cate)=> {
        let filtered= this.freeboard_list.filter((val)=> {
             return val = (val.cate === cate)  
        })
        
        if(filtered.length > 0){
             select_post.push(filtered[0]) 
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
          let viewList = this.freeboard_list.sort((a, b) => b["views"] - a["views"])
          this.freeboard_list = viewList
          break
        case "l":
          let likeList = this.freeboard_list.sort((a, b) => b["addPoints"] - a["addPoints"])
          this.freeboard_list = likeList
          break
        case "d":
          // this.freeboard_list = FreeboardListData;
          break
      }
    }
}

export default FreeboardStore
