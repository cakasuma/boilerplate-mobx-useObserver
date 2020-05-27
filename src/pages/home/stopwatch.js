import React from "react";
import { useObserver } from "mobx-react";
import { useStores } from "stores";

const Stopwatch = () => {
  const [is_timer_on, setTimerOn] = React.useState(false);
  const [timer_start, setTimerStart] = React.useState(0);
  const [timer_time, setTimerTime] = React.useState(0);
  const [timer_interval, setTimerInterval] = React.useState();
  const { stopwatchStore } = useStores();

  const startTimer = () => {
    setTimerOn(true);
    setTimerStart(Date.now() - timer_time);
    setTimerTime(timer_time);
  };

  const stopTimer = () => {
    setTimerOn(false);
    clearInterval(timer_interval);
  };

  const resetTimer = () => {
    setTimerStart(0);
    setTimerTime(0);
  };

  React.useEffect(() => {
    return () => {
      clearInterval(timer_interval);
    };
  }, []);

  React.useEffect(() => {
    if (timer_start) {
      setTimerInterval(
        setInterval(() => {
          setTimerTime(Date.now() - timer_start);
        }, 10)
      );
    }
  }, [timer_start]);

  const centiseconds = ("0" + (Math.floor(timer_time / 10) % 100)).slice(-2);
  const seconds = ("0" + (Math.floor(timer_time / 1000) % 60)).slice(-2);
  const minutes = ("0" + (Math.floor(timer_time / 60000) % 60)).slice(-2);
  const hours = ("0" + Math.floor(timer_time / 3600000)).slice(-2);

  return useObserver(() => {
    return (
      <>
        <div className="stopwatch">
          <div className="stopwatch-header">Stopwatch</div>
          <div className="stopwatch-display">
            {hours} : {minutes} : {seconds} : {centiseconds}
          </div>
          {!is_timer_on && !timer_time && (
            <button className="stopwatch-button" onClick={startTimer}>
              Start
            </button>
          )}
          {!!is_timer_on && (
            <button className="stopwatch-button" onClick={stopTimer}>
              Stop
            </button>
          )}
          {!is_timer_on && !!timer_time && (
            <>
              <button className="stopwatch-button" onClick={startTimer}>
                Resume
              </button>
              <button className="stopwatch-button" onClick={resetTimer}>
                Reset
              </button>
            </>
          )}
        </div>
      </>
    );
  });
};

export default Stopwatch;
