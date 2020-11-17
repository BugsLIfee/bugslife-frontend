import { action, computed, observable } from "mobx"
import TagApi from "../api/TagApi"

class TagStore {
  tagApi = new TagApi()

  @observable
  tagAll = []

  @observable
  tags = []

  @computed
  get getTags() {
    return this.tags ? this.tags.slice() : []
  }

  @computed
  get getTagAll() {
    console.log("getTagALl 오나요", this.tagAll)
    return this.tagAll ? this.tagAll.map((tag) => ({ ...tag })).slice() : []
  }

  @action
  async tagList() {
    let result = await this.tagApi.tagListAll()
    console.log("api result::", result)

    this.tagAll = result
    console.log("tagAll result::", this.getTagAll)
  }
}
export default TagStore
