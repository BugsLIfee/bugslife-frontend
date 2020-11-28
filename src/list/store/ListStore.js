import { observable, computed, action } from "mobx"
import BugBoardListApi from "../api/BugBoardListApi"

class ListStore {

  bugBoardListApi = new BugBoardListApi();

  @observable listById = [];

  @observable list = [];

  @observable commentList =[];

  @observable tags = [];

  @observable top10Tags = [];

  @observable backup_list = [];

  @computed 
  get getList() {
    return this.list ? this.list.slice() : []
  }

  @computed
  get getQlistById(){
    return this.listById ? this.listById.slice() : []
  }

  @computed
  get _top10Tags() {
    return this.top10Tags ? this.top10Tags.slice() : []
  }

  @action
  search(keyword) {
    this.list = this.backup_list
    this.list = this.list.filter(item => {
      return (this.KMP(item.title,keyword) !== -1 ||
        item.tags.indexOf(keyword) !== -1
    )})
  }

  @action
  searchTag(tag) {
    this.list = this.backup_list
    this.list = this.list.filter(item => {  
      return item.tags.indexOf(tag) !== -1
    })
  }

  @action
  async allList() {
    let result = await this.bugBoardListApi.bugBoardList()
    this.list = result ? result.sort((a, b) =>  Date.parse(b["registDate"]) -  Date.parse(a["registDate"]))
      : [];
    this.backup_list = this.list
    this.tags = await this.bugBoardListApi.bugBoardTagList();
    this.tags = this.tags ? this.tags.forEach(tag => {
          this.top10Tags.push(tag.tagName)}
        ) : []
    this.top10Tags = Array.from(new Set(this.top10Tags))
    this.top10Tags = this.top10Tags.slice(0,10);
  }

  @action
  async getlistById(uid){
    let result = await this.bugBoardListApi.bugBoardListById(uid);
    if(result !==null){
      this.listById = result;
    }
  }

  @action
  async getCommentList(uid){
    let result = await this.bugBoardListApi.bugboradCommentList(uid);
    if(result!==null){
      this.commentList = result;
    }
  }

  @action
  setListOrderBy(e) {
    switch (e) {
      case "p":
        let pointList = this.list.sort((a, b) => b["point"] - a["point"])
        this.list = pointList
        break
      case "v":
        let viewList = this.list.sort((a, b) => b["view"] - a["view"])
        this.list = viewList
        break
      case "l":
        let likeList = this.list.sort((a, b) => b["likes"] - a["likes"])
        this.list = likeList
        break
      case "d":
        let dateList = this.list.sort((a, b) =>  Date.parse(b["registDate"]) -  Date.parse(a["registDate"]))
        this.list = dateList
        break
      default : break;
    }
  }

  buildPatternTable(word) {
    const patternTable = [0];
    let prefixIndex = 0;
    let suffixIndex = 1;

    while (suffixIndex < word.length) {
      if (word[prefixIndex] === word[suffixIndex]) {
        patternTable[suffixIndex] = prefixIndex + 1;
        suffixIndex++;
        prefixIndex++;
      } else if (prefixIndex === 0) {
        patternTable[suffixIndex] = 0;
        suffixIndex++;
      } else {
        prefixIndex = patternTable[prefixIndex - 1];
      }
    }

    return patternTable;
  }
  
  KMP(text, word) {
    if (word.length === 0) {
      return 0;
    }

    let textIndex = 0;
    let wordIndex = 0;

    const patternTable = this.buildPatternTable(word);

    while (textIndex < text.length) {
      if (text[textIndex] === word[wordIndex]) {
        if (wordIndex === word.length - 1) {
          return textIndex - word.length + 1;
        }
        wordIndex++;
        textIndex++;
      } else if (wordIndex > 0) {
        wordIndex = patternTable[wordIndex - 1];
      } else {
        wordIndex = 0;
        textIndex++;
      }
    }

    return -1;
  }

}

export default ListStore
