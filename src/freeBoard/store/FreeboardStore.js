import { observable, computed, action } from "mobx"
import FreeboardListData from "./FreeboardListData";
import selected_post from "./FreeboardTestData";

class FreeboardStore{

    @observable
    freeboard_list = FreeboardListData;

    @observable
    freeboard_detail = selected_post;

    @observable
    freeboard_cate = ["자유", "취업", "연애", "학업", "유머", "스포츠", "회사"];


    @observable
    select_cate = [];

    @observable 
    freeboard_select_posts = [];

    

    @action
    onFilterPosts =(cate_list)=>{

    //console.log(cate_list)
      let select_post = []

      
      if(cate_list.length==0){
        console.log("No category")
          this.freeboard_select_posts= this.freeboard_list
          
      }else{
        cate_list.map((cate)=> {
        let filtered= this.freeboard_list.filter((val)=> {
             return val = (val.cate == cate)  
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

}

export default FreeboardStore
