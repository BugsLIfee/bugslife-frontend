import { action } from "mobx";
import PostingApi from "../api/PostingApi";
import PostingApiModel from "../api/model/PostingApiModel"

class PostingStore {

    postingApi = new PostingApi();

    @action
    async onAddPost(postObj) {
        postObj = new PostingApiModel(postObj);
        let result = await this.postingApi.postCreate(postObj);
        if(result == null) {
            console.log(`${this.PostingApiModel.title}: POST CREATE ERROR!`);
        }else{
            console.log(result,": 입력 성공 ! ! ");
        }
    }
}

export default PostingStore;
