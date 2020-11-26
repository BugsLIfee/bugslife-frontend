import ListStore from "../list/store/ListStore";
import DetailStore from "../detail/store/DetailStore";
import AdminStore from "../admin/store/AdminStore";
import AnswerStore from "../contact/store/AnswerStore";
import QuestionStore from "../contact/store/QuestionStore";
import ContactStore from "../contact/store/ContactStore";
import CategoryStore from "../contact/store/CategoryStore";
import InfoStore from "../admin/store/InfoStore";
import TagStore from "../tag/store/TagStore"
import FreeboardStore from "../freeBoard/store/FreeboardStore";
import OauthStore from "../oauth/OauthStore";
import PointStore from "../point/store/PointStore";
import ReportStore from "../report/store/ReportStore";
import AttendanceStore from "../attendance/store/AttendanceStore";
import EduStore from "../edu/store/EduStore";
import OtherUserStore from "../otherUser/store/OtherUserStore"
import BugBoardPosting from "../bugBoardPosting/store/bugBoardPostingStore"
import PaymentStore from "../payment/store/PaymentStore"


export default class Store {
  constructor() {
    this.list = new ListStore(this);
    this.detail = new DetailStore(this);
    this.admin = new AdminStore(this);
    this.contact = new ContactStore(this);
    this.info = new InfoStore(this);
    this.question = new QuestionStore(this);
    this.answer = new AnswerStore(this);
    this.category = new CategoryStore(this);
    this.tag = new TagStore(this); 
    this.oauth = new OauthStore(this);
    this.freeboard = new FreeboardStore(this);
    this.point = new PointStore(this);
    this.report = new ReportStore(this);
    this.edu = new EduStore(this);
    this.attendance = new AttendanceStore(this);
    this.otherUser = new OtherUserStore(this);
    this.bugBoardPosting = new BugBoardPosting(this);
    this.payment = new PaymentStore(this);
  }
}
