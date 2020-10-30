const User = {
    id: 12314,
    name: "리자몽워터",
    attendence: 74,
    level: 95,
    solved: 37,
    questions: 132,
    likes: 22,

    questions : [
        {
            id: 1422,
            date: "2010-10-03",
            title: "리액트 너무 싫은데 어쩜 좋아요"
        },
        {
            id: 4241,
            date: "1999-12-13",
            title: "스프링 너무 싫은데 어쩜 좋아요"
        },
        {
            id: 3221,
            date: "2011-02-13",
            title: "알고리즘 너무 싫은데 어쩜 좋아요"
        },
        {
            id: 54,
            date: "1998-11-23",
            title: "도커 너무 싫은데 어쩜 좋아요"
        },
    ],

    answers : [
        {
            id: 1422,
            date: "2004-10-03",
            title: "답변내용 블라블라 111",
            is_selected: true
        },
        {
            id: 4241,
            date: "2005-12-13",
            title: "답변내용 블라블라 222",
            is_selected: false
        },
        {
            id: 1422,
            date: "2006-10-03",
            title: "답변내용 블라블라 333",
            is_selected: true
        },
        {
            id: 4241,
            date: "2007-12-13",
            title: "답변내용 블라블라 444",
            is_selected: true
        },
        {
            id: 1422,
            date: "2008-10-03",
            title: "답변내용 블라블라 555",
            is_selected: false
        },
        {
            id: 1121,
            date: "2009-12-13",
            title: "답변내용 블라블라 666",
            is_selected: true
        },
    ]
}

export default User