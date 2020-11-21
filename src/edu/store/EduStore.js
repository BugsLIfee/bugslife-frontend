import { action, computed, observable } from "mobx";
import EduInfoAPi from "../api/EduInfoApi"
import EduInfoApiModel from "../api/model/EduInfoApiModel"


class EduStore {

    eduInfoAPi = new EduInfoAPi();

    @observable eduList = [];

    @observable eduDetail = {};

    @observable eduInfo = {};

    @observable eduReviews = [];

    @observable academyDetail = {};

    @observable academyInfo = {};

    @observable academyEduList = [];

    @observable academyReviews = [];

    @observable loadingBtn = "";

    @observable disableBtn = "";

    tempReviews = [];

    review = {};

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

    @computed get getAcademyInfo() {
        return this.academyInfo ? {...this.academyInfo} : {}
    }

    @computed get getAcademyEduList() {
        return this.academyEduList ? this.academyEduList.slice() : []
    }

    @computed get getAcademyReviews() {
        return this.academyReviews ? this.academyReviews.slice() : []
    }



    @action
    async allList() {
        this.eduList = await this.eduInfoAPi.eduInfoList()
        // this.eduList = result
    }

    @action 
    async eduDetailInfo(eid) {
        this.eduDetail = await this.eduInfoAPi.eduDetailList(eid)
        this.eduInfo = this.eduDetail ? {...this.eduDetail} : {}
        this.eduReviews = this.eduDetail.reviews ? this.eduDetail.reviews : [];
    }

    @action
    async academyDetailInfo(aid) {
        this.academyDetail = await this.eduInfoAPi.academyDetail(aid)
        this.academyInfo = await this.academyDetail.eduAcademys ? {...this.academyDetail.eduAcademys} : {};
        this.academyEduList = this.academyDetail.eduInfos ? this.academyDetail.eduInfos : [];
        this.tempReviews = [];
        this.academyReviews = [];
        this.academyEduList.map((r)=>{if(r.reviews.slice().length){this.tempReviews.push(r.reviews)}})
        this.tempReviews.map((r)=>{r.map((rr)=>{this.academyReviews.push(rr)})})
        //this.academyReviews.push(this.academyEduList.map().reviews)
        //this.academyReviews = {...this.academyEduList.map(review=>review.reviews)}
        // this.academyReviews = this.academyEduList ? this.academyEduList.slice() : [];
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

    @action
    async addReview(reviewObj) {
        reviewObj = new EduInfoApiModel(reviewObj)
        let result = await this.eduInfoAPi.eduReviewCreate(reviewObj)
        if(result == null){
            alert("리뷰 등록에 오류가 발생했습니다.")
        }else{
            alert("리뷰 등록을 완료했습니다.")
            window.location.reload(false);
        }
    }

}

export default EduStore
