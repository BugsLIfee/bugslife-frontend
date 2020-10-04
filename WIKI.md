# :star: 프로젝트중 발생한 에러 & 유용한 레퍼런스를 공유해봐요 :star:

### url에서 params 받는법

1. `yarn add qs` 를 한다.
2. qs를 import 해준다.
   > import qs from 'qs'
3. 요청을 받을 곳에서 아래 코드를 추가해 준다.

```
    const searchObj = qs.parse(this.props.location.search, {
      ignoreQueryPrefix: true,
    });
```

### scss 에서 선택자가 이름이 같으면 전체 영역에 적용이된다.

- 해결방법 : 네이밍 rule 추가 - 자기가 맡은 페이지에서 선택자를 맨 앞에 적고나서 시작한다.
- 자세한 네용은 RULE.md 참고

### Couner Library

- `yarn add react-countup`
- 마이페이지 나의 활동에 적용된 라이브러리
- 설정한 숫자까지 카운트 업 되는 애니메이션
- 레퍼런스 : https://www.npmjs.com/package/react-countup#simple-example
