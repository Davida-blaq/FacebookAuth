// useCustomHistory.js
import { useState } from 'react';

const createHistoryObject = () => {
  let listeners = [];

  const notifyListeners = () => {
    listeners.forEach(listener => listener());
  };

  const push = (path) => {
    window.history.pushState({}, '', path);
    notifyListeners();
  };

  const listen = (listener) => {
    listeners.push(listener);

    return () => {
      listeners = listeners.filter(l => l !== listener);
    };
  };

  return {
    push,
    listen,
  };
};

const useCustomHistory = () => {
  const [state, setState] = useState({});
  const history = createHistoryObject();

  const push = (path) => {
    history.push(path);
    setState({});
  };

  const listen = (listener) => {
    return history.listen(() => {
      setState({});
      listener();
    });
  };

  return {
    push,
    listen,
  };
};

export default useCustomHistory;
