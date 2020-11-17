import { action, computed, observable } from "mobx";
import EduInfoAPi from "../api/EduInfoApi"


class EduStore {

    eduInfoAPi = new EduInfoAPi();

    @observable eduList = [];

    @observable eduDetail = {};

    @observable eduInfo = {}

    @observable eduRivew = [];

    @observable loadingBtn = "";

    @observable disableBtn = "";

   



    eId;
    //@observable eduReview = EduDetailTestData.review;

    @computed get getEduList() {
        return this.eduList ? this.eduList.slice() : []
    }

    @computed get getEduDetail() {
        return this.eduDetail ? {...this.eduDetail} : {}
    }


    @computed get getEduReviews() {
        return this.eduDetail ? this.eduDetail.eduReviews.slice() : []
    }  

    @action
    async allList() {
        let result = await this.eduInfoAPi.eduInfoList()
        this.eduList = result
    }

    @action
    async eduReviewList(eid) {
        let result = await this.eduInfoAPi.eduReviewList(eid)
        this.eduDetail = result
        console.log(this.eduDetail)
    }

    @action
    async syncEduInfo() {
        this.loadingBtn = "true"
        this.disableBtn = "true"
        await this.eduInfoAPi.eduInfoListAdd()
        this.loadingBtn = ""
        this.disableBtn = ""
        alert("동기화가 완료되었습니다.")
        window.location.reload(false);
        return 1;
    }

}

export default EduStore
