const testData = {
    post_id: 1,
    question: {
        title : "Node.js 와 PHP 둘 중 무엇을 공부하는 것이 나을까요?",
        md: "true",
        writer_id : "송파구 비트마스크",
        writer_lv : "level 6. 알록달록 코뎅이",
        date : "2020.01.30",
        views : "31",
        // body : "# HELLO", 
        body: "안녕하세요! \
                저는 프로그래밍 + 디자인 융합된 전공을 공부하고 있는 대학교 2학년생입니다. (현재는 휴학중입니다) \
                아직 할 수 있는 것은 프론트엔드밖에 없지만, 휴학하는 1년동안 지인들이 간단한 사이트를 만들어 달라고 하면 만들 수 있을 정도의 수준을 목표로 공부하고 있습니다. \
                이제 처음으로 백엔드 언어를 공부하려고 하는데, Node.js 와 PHP 둘 중 어떤 언어를 공부해야 할 지 고민이 됩니다.\
                처음엔 인프런, Udemy, 노마드 코더 등 강의 사이트들을 봤을 때 Node.js 강의가 PHP보다 더 많고, 현재 뜨고 있는 언어라는 생각이 들어서 Node.js쪽으로 생각을 하고 있었습니다. 그러던 중 아빠가 연습삼 \
                Node.js 를 공부하는 것이 나을지, PHP를 공부하는 것이 나을 지 조언 부탁드립니다. \
                읽어주셔서 감사합니다!!",
        tags : [ "PHP", "Node.js" ],
        comments: [
            {
                writer_id: "디지털디톡스",
                writer_lv: "level 10. 버그사냥꾼 코뎅이",
                date: "2020.03.17",
                body: "저랑 같은 고민을 하고 계시군요."
            },
            {
                writer_id: "111알고리즘",
                writer_lv: "level 53. 괴물 코뎅이",
                date: "2020.06.30",
                body: "ㄴ2222222"
            }
        ]
    },
    answers: [
        {
            writer_id: "컴공 5학년",
            writer_lv: "level 102. 저승사자 코뎅이",
            date: "2020.09.30",
            body: "Node.js 하세용.",
            comments: [
                {
                    writer_id: "리자몽워터",
                    writer_lv: "level 53. 괴물 코뎅이",
                    date: "2020.10.01",
                    body: "답변 너무 대충쓰네"
                }
            ]
        },
        {
            writer_id: "심재욱",
            writer_lv: "level 11. 바보 코뎅이",
            date: "2020.03.27",
            body: "둘다 하세용.",
            comments: []
        }
    ]
}

export default testData;