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
}

export default FreeboardStore
