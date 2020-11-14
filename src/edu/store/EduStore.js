import { action, computed, observable } from "mobx";
import EduInfoListAPi from "../api/EduInfoApi"


class EduStore {

    eduInfoListAPi = new EduInfoListAPi();

    @observable eduList = [];

    @observable eduDetail = [];

    @observable active = "";

    @observable inline = "";

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

    // get getEduReview() {
    //     return this.eduDetail.find(review => {
    //         return review.eId === this.eId
    //     }).review.slice();
    // }

    @action 
    setEduId(id) {
        this.eId=id;
        console.log("gdgd",this.eId)
    }

    @action
    async allList() {
        let result = await this.eduInfoListAPi.eduInfoList()
        this.eduList = result
    } 

    @action
    syncEduInfo() {
        this.eduInfoListAPi.eduInfoListAdd()
    }

}

export default EduStore
