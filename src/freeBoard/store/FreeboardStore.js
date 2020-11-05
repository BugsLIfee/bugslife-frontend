import { observable,  action, computed } from "mobx"
import FreeboardApi from "../api/FreeboardApi";
import FreeboardListData from "./FreeboardListData";
import selected_post from "./FreeboardTestData";

class FreeboardStore{

    freeApi = new FreeboardApi();

    @observable
    freeboard_list = []

    // @observable
    // freeboard_list = FreeboardListData;

    @observable
    freeboard_detail = selected_post;

    @observable
    freeboard_cate = ["자유", "취업", "연애", "학업", "유머", "스포츠", "회사"];


    @observable
    select_cate = [];

    @observable 
    freeboard_select_posts = [];


    @action
    async freeboardList(){
      console.log("Freeboard List======");
      let result = await this.freeApi.freeboardList()

      console.log("모든 freeboard List == " + result  );

      if(result !==null){
        this.freeboard_list =result;
      } else{
        console.log("freeboard nulllllllll");
      }
    }

    
    @action
    onLikePost =(like)=>{
      // console.log(this.freeboard_detail.fb_post.like);

      if(like ===false){
        this.freeboard_detail.fb_post.like+=1
        
      }else{
        this.freeboard_detail.fb_post.like-=1
      }
      console.log(this.freeboard_detail.fb_post);

      
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
