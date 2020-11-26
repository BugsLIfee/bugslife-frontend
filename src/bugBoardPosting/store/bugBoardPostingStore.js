import { action } from "mobx";
import PostingApi from "../api/PostingApi";
import PostingApiModel from "../api/model/PostingApiModel"
import ModifyApiModel from "../api/model/ModifyApiModel"

class PostingStore {

    postingApi = new PostingApi();
    post = {};

    @action
    async onAddPost(postObj) {
        postObj = new PostingApiModel(postObj);
        await this.postingApi.postCreate(postObj);
    }

    @action
    async onModifyQuestion(questionObj) {
        questionObj = new ModifyApiModel(questionObj);
        await this.postingApi.postModify(questionObj);
    }
}

export default PostingStore;
