import React from "react";
import { useObserver } from "mobx-react";
import { useStores } from "stores";

const Stopwatch = () => {
  const { stopwatchStore } = useStores();

  React.useEffect(() => {
    return () => {
      stopwatchStore.onUnload();
    };
  }, []);

  return useObserver(() => {
    return (
      <>
        <div className="stopwatch">
          <div className="stopwatch-header">Stopwatch</div>
          <div className="stopwatch-display">
            {stopwatchStore.hours} : {stopwatchStore.minutes} :
            {stopwatchStore.seconds} : {stopwatchStore.centiseconds}
          </div>
          {!stopwatchStore.timer_on && !stopwatchStore.timer_time && (
            <button
              className="stopwatch-button"
              onClick={stopwatchStore.startTimer}
            >
              Start
            </button>
          )}
          {!!stopwatchStore.timer_on && (
            <button
              className="stopwatch-button"
              onClick={stopwatchStore.stopTimer}
            >
              Stop
            </button>
          )}
          {!stopwatchStore.timer_on && !!stopwatchStore.timer_time && (
            <>
              <button
                className="stopwatch-button"
                onClick={stopwatchStore.startTimer}
              >
                Resume
              </button>
              <button
                className="stopwatch-button"
                onClick={stopwatchStore.resetTimer}
              >
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
