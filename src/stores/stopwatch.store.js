import { decorate, observable, action } from "mobx";

class userStore {
  timer_on = false;
  timer_start = 0;
  timer_time = 0;

  setTimerOn = () => {
    this.timer_on = true;
  };
}

decorate(userStore, {
  timer_on: observable,
  timer_start: observable,
  timer_time: observable,
  setTimerOn: action,
});
export default userStore;
