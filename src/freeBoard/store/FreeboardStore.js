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

    // @action
    // onSelectCate=(category_list)=>{
        
    //     //select
        
    // this.onFilterPosts(category_list);
      
    // }  

    @action
    onFilterPosts =(cate_list)=>{

    console.log(cate_list)
      let select_post = []

      if(cate_list.length==0){
          this.freeboard_select_posts = this.freeboard_list
          
      }else{
        cate_list.map((cate)=> {
            return (select_post.push(this.freeboard_list.filter((val)=> val.cate == cate)[0])
        )});
 
       this.freeboard_select_posts = select_post
      }

    }

    @action
    setCategorySelect=(cate_list)=>{
        // this.select_cate = cate_list;
        // console.log(this.select_cate)
        this.onFilterPosts(cate_list);
    }

}

export default FreeboardStore
