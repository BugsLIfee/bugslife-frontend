import { observable, computed, action } from "mobx"
import testListData from "../../list/testListData";

class FreeboardStore{

    @observable
    freeboard_list = testListData;

    @observable
    testData = "TestData"

}

export default FreeboardStore
