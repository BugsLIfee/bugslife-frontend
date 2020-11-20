class EduInfoApiModel{
    title = ""
    recommend = ""
    unrecommend = ""
    eduRate = 0
    empRate = 0
    facRate = 0
    lecRate = 0
    eduId = ""
    academyId = ""
    writerId = ""

    constructor(reviewObj){
        this.title = reviewObj.title
        this.recommend = reviewObj.recommend
        this.unrecommend = reviewObj.unrecommend
        this.eduRate = reviewObj.eduRate
        this.empRate = reviewObj.empRate
        this.facRate = reviewObj.facRate
        this.lecRate = reviewObj.lecRate
        this.eduId = reviewObj.eduId
        this.academyId = reviewObj.academyId
        this.writerId = reviewObj.writerId
    }
}

export default EduInfoApiModel