import { decorate, observable, action, computed } from "mobx";

class userStore {
  timer_on = false;
  timer_start = 0;
  timer_time = 0;
  timer_interval = null;

  startTimer = () => {
    this.timer_on = true;
    this.timer_start = Date.now() - this.timer_time;
    this.timer_time = this.timer_time;

    this.timer_interval = setInterval(() => {
      this.timer_time = Date.now() - this.timer_start;
    }, 10);
  };

  stopTimer = () => {
    this.timer_on = false;
    clearInterval(this.timer_interval);
  };

  resetTimer = () => {
    this.timer_start = 0;
    this.timer_time = 0;
  };

  get centiseconds() {
    return ("0" + (Math.floor(this.timer_time / 10) % 100)).slice(-2);
  }
  get seconds() {
    return ("0" + (Math.floor(this.timer_time / 1000) % 60)).slice(-2);
  }
  get minutes() {
    return ("0" + (Math.floor(this.timer_time / 60000) % 60)).slice(-2);
  }
  get hours() {
    return ("0" + Math.floor(this.timer_time / 3600000)).slice(-2);
  }

  onLoad = () => {
    // TODO: if there is any on load event
  };

  onUnload = () => {
    clearInterval(this.timer_interval);
  };
}

decorate(userStore, {
  timer_on: observable,
  timer_start: observable,
  timer_time: observable,
  startTimer: action,
  stopTimer: action,
  resetTimer: action,
  centiseconds: computed,
  seconds: computed,
  minutes: computed,
  hours: computed,
  onLoad: action,
  onUnload: action,
});
export default userStore;
