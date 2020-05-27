import React from "react";
import StopwatchStore from "./stopwatch.store";
import UserStore from "./user.store";

export const StoresContext = React.createContext({
  stopwatchStore: new StopwatchStore(),
  userStore: new UserStore(),
});

export const useStores = () => React.useContext(StoresContext);
