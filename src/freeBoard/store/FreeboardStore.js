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
    freeboard_select_posts = [];

    @action
    onSelectCate=(category)=>{
        let select_post = 
        this.freeboard_list.filter((post)=> (post.cate == category)&&(!this.freeboard_select_posts.includes(post)));
        this.freeboard_select_posts = [...this.freeboard_select_posts, ...select_post]
    }  

}

export default FreeboardStore
