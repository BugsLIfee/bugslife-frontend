import { observable, computed, action } from "mobx";
import testData from '../testData';

class DetailStore {

    detailApi = null;

    @observable detail = testData;

    constructor(detailApi) {
        this.detailApi = detailApi;
    }

    @computed get _detail() {
        return this.detail ? {...this.detail} : {};
    }

    @computed get _question() {
        return this.detail.question ? {...this.detail.question} : {};
    }

    @computed get _answers() {
        return this.detail.answers ? this.detail.answers : []; 
    }
}

export default DetailStore;