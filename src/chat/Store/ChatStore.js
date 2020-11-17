import { observable , computed, action} from "mobx";
import { getCurrentUser } from './api/APIUtils';
import { ACCESS_TOKEN } from './constants/index';

class ChatStore{

    @observable
    chatUserList=[];

    @observable
    chatUser={};

    @computed
    getChatUserList() {
        return this.chatUserList? this.chatUserList.slice() : [];
    }

    @computed
    getChatUser(){
        return this.chatUser? {...this.chatUser}:{};
    }



}