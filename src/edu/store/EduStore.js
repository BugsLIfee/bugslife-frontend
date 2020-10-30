import { action, computed, observable } from "mobx";
import EduListTestData from "./EduListTestData";
import EduDetailTestData from "./EduDetailTestData"

class EduStore {
    @observable eduList = EduListTestData;

    @observable eduDetail = EduDetailTestData;

    eId;
    //@observable eduReview = EduDetailTestData.review;

    @computed get getEduList() {
        return this.eduList ? this.eduList.slice() : []
    }

    @computed get getEduDetail() {
        return this.eduDetail ? this.eduDetail.slice() : []
    }

    get getEduId() {
        console.log(this.eId)
        return this.eId
    
    }

    get getEduReview() {
        return this.eduDetail.find(review => {
            return review.eId === this.eId
        }).review.slice();
    }

    @action setEduId(id) {
        this.eId=id;
        console.log("gdgd",this.eId)
    }
}

export default EduStore
