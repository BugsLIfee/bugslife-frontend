import ListStore from "../list/store/ListStore";
// import UserStore from "../user/store/UserStore";
import UserStore from ""
import DetailStore from "../detail/store/DetailStore";
import AdminStore from "../admin/store/AdminStore";
import ContactStore from "../contact/store/ContactStore";

export default class Store {
  constructor() {
    this.user = new UserStore(this);
    this.list = new ListStore(this);
    this.detail = new DetailStore(this);
    this.admin = new AdminStore(this);
    this.contact = new ContactStore(this);
  
  }
}
