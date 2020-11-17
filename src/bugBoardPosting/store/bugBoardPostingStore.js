import { action } from "mobx";
import PostingApi from "../api/PostingApi";
import PostingApiModel from "../api/model/PostingApiModel"

class PostingStore {

    postingApi = new PostingApi();
    post = {};

    @action
    async onAddPost(postObj) {
        postObj = new PostingApiModel(postObj);
        console.log("제이슨?", JSON.stringify(postObj))
        let result = await this.postingApi.postCreate(postObj);
        if (result === null) {
            console.log(`${this.InfoApiModel.id}:info CREATE ERROR!`);
        }else{
            console.log(result,": 입력 성공 ! ! ");
        }
    }
}

export default PostingStore;
