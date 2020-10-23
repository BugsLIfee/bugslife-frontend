const testData = {
    question: {
        title : "C++ STL Pow함수 관련 질문드립니다!",
        question_id : 1,
        md: "true",
        point: "2500",
        likes: 24,
        clicked_like: false,
        writer_id : "송파구 비트마스크",
        writer_lv : "level 6. 알록달록 코뎅이",
        date : "2020.01.30",
        views : 131,   
        body : "# 안녕하세요 C++ 초보입니다. \n ### `cmath` 라이브러리 `pow()`함수를 쓰다가 궁금한 점이 있어서 질문드립니다. \
                \n 코드는 다음과 같습니다! <br />\
                \n ```cpp\
                \n #include <iostream>\
                \n #include <cmath>\
                \n using namespace std;\
                \n int main() {\
                \n  int n = pow(10, 4); \
                \n  cout << n; // 왜 9999가 출력? \
                \n}\
                \n```\
                \n 예상한 값은 10000인데 왜 9999가 출력되는 것인가요? \
                \n 고수님들 답변 부탁드립니다 ㅠㅠ \
                ", 
        tags : [ "C++", "Algorithm" ],
        comments: [
            {
                writer_id: "디지털디톡스",
                writer_lv: "level 10. 버그사냥꾼 코뎅이",
                date: "2020.03.17",
                body: "저도 저것때문에 많이 애먹었어요ㅜㅜ."
            },
            {
                writer_id: "111알고리즘",
                writer_lv: "level 53. 괴물 코뎅이",
                date: "2020.06.30",
                body: "ㄴ2222222"
            }
        ],
        answers: [
            {
                id: 0,
                writer_id: "컴공 5학년",
                writer_lv: "level 102. 저승사자 코뎅이",
                date: "2020.09.30",
                likes: 13,
                clicked_like: true,
                selected: true,
                body: "cout << (int) pow(10.0, 4.0); 이렇게 바꿔주시면 잘 될겁니다.",
                comments: [{
                    writer_id: "리자몽워터1",
                    writer_lv: "level 53. 괴물 코뎅이",
                    date: "2020.10.01",
                    body: "답변 너무 대충쓰네222"
                }]
            },
            {
                id: 1,
                writer_id: "성북구알고리즘마스터",
                writer_lv: "level 11. 바보 코뎅이",
                date: "2020.03.27",
                likes: 3,
                clicked_like: false,
                selected: false,
                body: "While문 쓰시면 될거에요.",
                comments: [{
                    writer_id: "리자몽워터",
                    writer_lv: "level 53. 괴물 코뎅이",
                    date: "2020.10.01",
                    body: "답변 너무 대충쓰네"
                }]
            }
        ]
    }
}

export default testData;