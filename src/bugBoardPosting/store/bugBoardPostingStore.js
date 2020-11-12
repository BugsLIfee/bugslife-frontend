import { action } from "mobx";
import PostingApi from "../api/PostingApi";
import PostingApiModel from "../api/model/PostingApiModel"

class PostingStore {

    postingApi = new PostingApi();

    @action
    async onAddPost(postObj) {
        postObj = new PostingApiModel(postObj);
        let result = await this.postingApi.postCreate(postObj);
    }
}

export default PostingStore;
