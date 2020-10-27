import { action, computed, observable } from "mobx";
import EduListTestData from "./EduListTestData";
import EduDetailTestData from "./EduDetailTestData"

class EduStore {
    @observable eduList = EduListTestData;

    @observable eduReview = EduDetailTestData;

    eId;
    //@observable eduReview = EduDetailTestData.review;

    @computed get getEduList() {
        return this.eduList ? this.eduList.slice() : []
    }

    // @computed get getEduDetail() {
    //     return this.eduDetail ? this.eduDetail.slice() : []
    // }

    get getEduReview() {
        console.log("겟에듀리뷰:",this.eduReview)
        return this.eduReview.find(review => {
            return review.eId === this.eId
        }).review.slice();
    }

    @action setEduId(id) {
        this.eId=id;
        console.log("스토어에요0", this.eId)
    }
}

export default EduStore
