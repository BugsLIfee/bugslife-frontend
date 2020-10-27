import { computed, observable } from "mobx";
import EduListTestData from "./EduListTestData";
import EduDetailTestData from "./EduDetailTestData"

class EduStore {
    @observable eduList = EduListTestData;

    @observable eduDetail = EduDetailTestData;

    @observable eduReview = EduDetailTestData.review;

    @computed get getEduList() {
        return this.eduList ? this.eduList.slice() : []
    }

    @computed get getEduDetail() {
        return this.eduDetail ? this.eduDetail.slice() : []
    }

    @computed get getEduReview() {
        return this.eduReview ? this.eduReview.slice() : []
    }
}

export default EduStore
