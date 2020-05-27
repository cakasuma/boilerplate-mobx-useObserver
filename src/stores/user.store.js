import { decorate, observable, action } from "mobx";

class userStore {
  constructor(rootStore) {
    this.rootStore = rootStore;
  }
  name = "test";
  user_details = {};

  setUserDetail = (test_detail) => {
    this.user_details = test_detail;
  };
  setUserName = (test_name) => {
    this.name = test_name;
  };

  debounceUserStore = () => {
    // change session storage
  };

  appendUserStore = () => {
    // append all user store from session storage
  };

  init = () => {
    this.appendUserStore();
  };
}

decorate(userStore, {
  name: observable,
  user_details: observable,
  setUserDetail: action,
  setUserName: action,
  debounceUserStore: action,
  appendUserStore: action,
});
export default userStore;
