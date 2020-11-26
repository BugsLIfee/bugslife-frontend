import { action, computed, observable } from "mobx";
import EduInfoApi from "../api/EduInfoApi"
import OtherUserApi from "../../otherUser/api/OtherUserApi"
import EduInfoApiModel from "../api/model/EduInfoApiModel"
import ReviewModifyModel from "../api/model/ReviewModifyModel"
import swal from 'sweetalert'


class EduStore {

    eduInfoApi = new EduInfoApi();

    otherUserApi = new OtherUserApi();

    @observable eduList = [];

    @observable eduFilterList = [];

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

    @observable check = false;

    @observable user = {}

    @observable bool = true

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

    // @computed get getCheckReview() {
    //     return this.check
    // }



    @action
    async allList() {
        this.bool = true;
        this.eduList = await this.eduInfoApi.eduInfoList()
        this.eduFilterList = this.eduList
        this.bool = false
    }

    @action
    filterList(type, inputValue) {
        let filterLists = [];
        switch(type){
            case 1 :
                filterLists = this.eduList.filter((list) => {
                    return list.title.toLowerCase().includes(inputValue);
                });
                this.eduFilterList = filterLists
                break;
            case 2 :
                filterLists = this.eduList.filter((list) => {
                    return list.academyTitle.toLowerCase().includes(inputValue);
                });
                this.eduFilterList = filterLists
                break;
            case 3 :
                filterLists = this.eduList.filter((list) => {
                    return list.simpleAddr.toLowerCase().includes(inputValue);
                });
                this.eduFilterList = filterLists
                break;
            default :
                filterLists = this.eduList.filter((list) => {
                    return list.title.toLowerCase().includes(inputValue);
                });
                this.eduFilterList = filterLists
                break;
        }
    }

    @action 
    async eduDetailInfo(eid) {
        this.eduDetail = await this.eduInfoApi.eduDetailList(eid)
        this.eduInfo = this.eduDetail ? {...this.eduDetail} : {}
        this.eduReviews = this.eduDetail.reviews ? this.eduDetail.reviews : [];
    }

    @action
    async academyDetailInfo(aid) {
        this.academyDetail = await this.eduInfoApi.academyDetail(aid)
        this.academyInfo = await this.academyDetail.eduAcademys ? {...this.academyDetail.eduAcademys} : {};
        this.academyEduList = this.academyDetail.eduInfos ? this.academyDetail.eduInfos : [];
        this.tempReviews = [];
        this.academyReviews = [];
        this.academyEduList.forEach((r)=>{if(r.reviews.slice().length){this.tempReviews.push(r.reviews)}})
        this.tempReviews.forEach((r)=>{r.forEach((rr)=>{this.academyReviews.push(rr)})})
        //this.academyReviews.push(this.academyEduList.map().reviews)
        //this.academyReviews = {...this.academyEduList.map(review=>review.reviews)}
        // this.academyReviews = this.academyEduList ? this.academyEduList.slice() : [];
    }

    @action
    async syncEduInfo() {
        this.loadingBtn = "true"
        this.disableBtn = "true"
        await this.eduInfoApi.eduInfoListAdd()
        this.loadingBtn = ""
        this.disableBtn = ""
        alert("동기화가 완료되었습니다.")
        window.location.reload(false);
        return 1;
    }

    @action
    async addReview(reviewObj) {
        reviewObj = new EduInfoApiModel(reviewObj)
        let result = await this.eduInfoApi.eduReviewCreate(reviewObj)
        if(result == null){
            swal("리뷰 등록에 오류가 발생했습니다.")
        }else{
            swal("리뷰 등록을 완료했습니다.").then(()=>window.location.reload(false))
        }
    }

    @action
    async rmReview(rid) {
        await this.eduInfoApi.deleteReview(rid)
        window.location.reload(false);
    }

    @action
    async updateReview(reviewObj,rid) {
        console.log(reviewObj)
        reviewObj = new ReviewModifyModel(reviewObj)
        await this.eduInfoApi.updateReview(reviewObj,rid)
        swal("수정 완료").then(()=>window.location.reload(false))
    }

    @action
    async checkReview(wid,eid) {
        let result = await this.eduInfoApi.checkReview(wid,eid)
        return this.check = result
    }

    @action
    async getUser(wid) {
        let result = await this.otherUserApi.getOtherUser(wid)
        console.log(result.name)
        return result.name
    }
}

export default EduStore
