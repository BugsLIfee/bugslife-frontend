import ListStore from "../list/store/ListStore";
// import UserStore from "../user/store/UserStore";
import UserStore from "../mypage/store/UserStore"
// import DetailStore from "../detail/store/DetailStore";
import DetailStore from "../detail/store/TestStore";
import AdminStore from "../admin/store/AdminStore";
import AnswerStore from "../contact/store/AnswerStore";
import QuestionStore from "../contact/store/QuestionStore";
import ContactStore from "../contact/store/ContactStore";
import CategoryStore from "../contact/store/CategoryStore";
import InfoStore from "../admin/store/InfoStore";
import SignupUserStore from "../user/store/SignupUserStore"
import TagStore from "../tag/store/TagStore"
import FreeboardStore from "../freeBoard/store/FreeboardStore";
import PointStore from "../point/store/PointStore";
import ReportStore from "../report/store/ReportStore";
import EduStore from "../edu/store/EduStore";

export default class Store {
  constructor() {
    this.user = new UserStore(this);
    this.list = new ListStore(this);
    this.detail = new DetailStore(this);
    this.admin = new AdminStore(this);
    this.contact = new ContactStore(this);
    this.info = new InfoStore(this);
    this.question = new QuestionStore(this);
    this.answer = new AnswerStore(this);
    this.category = new CategoryStore(this);
    this.signupUser = new SignupUserStore(this);
    this.tag = new TagStore(this); 
    this.freeboard = new FreeboardStore(this);
    this.point = new PointStore(this);
    this.report = new ReportStore(this);
    this.edu = new EduStore(this);
  }
}
