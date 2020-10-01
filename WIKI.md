# :star: 프로젝트중 발생한 에러 & 유용한 레퍼런스를 공유해봐요 :star:

### url에서 params 받는법
1. `yarn add qs` 를 한다.
2. qs를 import 해준다. 
>import qs from 'qs'
3. 요청을 받을 곳에서 아래 코드를 추가해 준다.
``` 
    const searchObj = qs.parse(this.props.location.search, {
      ignoreQueryPrefix: true,
    });
```

