import ListStore from "../list/store/ListStore";
// import UserStore from "../user/store/UserStore";
import UserStore from "../mypage/store/UserStore"
import DetailStore from "../detail/store/DetailStore";
import AdminStore from "../admin/store/AdminStore";
import AnswerStore from "../contact/store/AnswerStore";
import QuestionStore from "../contact/store/QuestionStore";
import ContactStore from "../contact/store/ContactStore";
import CategoryStore from "../contact/store/CategoryStore";
import InfoStore from "../admin/store/InfoStore";
import SignupUserStore from "../user/store/SignupUserStore"
import TagStore from "../tag/store/TagStore"
<<<<<<< HEAD

=======
import FreeboardStore from "../freeBoard/store/FreeboardStore";
import PointStore from "../point/store/PointStore";
import ReportStore from "../report/store/ReportStore";
>>>>>>> e139e58812a1ceb17ad6d437422dcb76687e5490

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
<<<<<<< HEAD
    this.tag = new TagStore(this);
=======
    this.tag = new TagStore(this); 
    this.freeboard = new FreeboardStore(this);
    this.point = new PointStore(this);
    this.report = new ReportStore(this);
>>>>>>> e139e58812a1ceb17ad6d437422dcb76687e5490
  }
}
