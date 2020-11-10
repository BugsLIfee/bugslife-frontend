import { observable,  action, computed } from "mobx"
import FreeboardApi from "../api/FreeboardApi";
import FreeboardPostAddModel from "../api/model/post/FreeboardPostAddModel";
import FreeboardPostModel from "../api/model/post/FreeboardPostModel";
import FreeboardListData from "./FreeboardListData";
import selected_post from "./FreeboardTestData";

class FreeboardStore{

    freeApi = new FreeboardApi();

    @observable
    freeboard_list = []

    @observable
    freeboard_detail = {}

    @observable
    freeboard_cate = ["자유", "취업", "연애", "학업", "유머", "스포츠", "회사"];


    @observable
    select_cate = [];

    @observable 
    freeboard_select_posts = [];


    @computed get _detail(){
      return this.freeboard_detail ? {...this.freeboard_detail} : {};
    }
    


    @action
    async freeboardList(){
      console.log("Freeboard List======");
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
      console.log(this.freeboard_detail);
    }

    @action
    async onCreatePost(post){
      if(post.cate ==""){
        alert("카테고리는 필수 선택사항입니다.")
        return;
      }
      post = new FreeboardPostAddModel(post);
      let result = await this.freeApi.freeboardCreatePost(post);

      if(result == null){
        console.log("Null exception on Creating Freeboard Post")
      }else{
   
        console.log(result, "자유게시글 입력성공")
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
          this.freeboard_list = FreeboardListData;
          break
      }
    }
}

export default FreeboardStore
