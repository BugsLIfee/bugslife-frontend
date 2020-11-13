import {action } from "mobx";
import PostingApi from "../api/PostingApi";
import PostingApiModel from "../api/model/PostingApiModel"

class PostingStore {

    postingApi = new PostingApi();
    post = {};

    @action
    async onAddPost(postObj) {
        postObj = new PostingApiModel(postObj);
        await this.postingApi.postCreate(postObj);
    }
}

export default PostingStore;
