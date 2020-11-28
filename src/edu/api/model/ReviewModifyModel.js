class ReviewModifyModel {
    id = ""
    title = ""
    recommend = ""
    unrecommend = ""
    eduRate = 0
    empRate = 0
    facRate = 0
    lecRate = 0

    constructor(reviewObj){
        this.id = reviewObj.id
        this.title = reviewObj.title
        this.recommend = reviewObj.recommend
        this.unrecommend = reviewObj.unrecommend
        this.eduRate = reviewObj.eduRate
        this.empRate = reviewObj.empRate
        this.facRate = reviewObj.facRate
        this.lecRate = reviewObj.lecRate
    }
}

export default ReviewModifyModel