import { action, computed, observable } from "mobx";
import EduInfoAPi from "../api/EduInfoApi"


class EduStore {

    eduInfoAPi = new EduInfoAPi();

    @observable eduList = [];

    @observable eduDetail = {};

    @observable eduInfo = {};

    @observable eduReviews = [];

    @observable loadingBtn = "";

    @observable disableBtn = "";

   



    eId;
    //@observable eduReview = EduDetailTestData.review;

    @computed get getEduList() {
        return this.eduList ? this.eduList.slice() : []
    }

    // @computed get getEduDetail() {
    //     return this.eduDetail ? {...this.eduDetail} : {}
    // }

    @computed get getEduInfo() {
        return this.eduInfo ? {...this.eduInfo} : {}
    }  

    @computed get getEduReviews() {
        return this.eduReviews ? this.eduReviews.slice() : []
    }  



    @action
    async allList() {
        let result = await this.eduInfoAPi.eduInfoList()
        this.eduList = result
    }

    @action 
    async eduDetailInfo(eid) {
        this.eduDetail = await this.eduInfoAPi.eduDetailList(eid)
        this.eduInfo = this.eduDetail ? {...this.eduDetail} : {}
        this.eduReviews = this.eduDetail.reviews ? this.eduDetail.reviews : [];
        console.log(this.eduReviews)
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
