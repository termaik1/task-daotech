import axios from "axios";

export const middleware = store => next => action => {
  const { type, request } = action;

  if (type && request) {
    const { method, path, payload } = request;
    const { inquiry, success, failure } = type;

    store.dispatch({ type: inquiry });
    (async function() {
      try {
        await axios[method](path, payload).then(response => {
          const rest = response.data;
          store.dispatch({ type: success, rest });
        });
      } catch (err) {
        store.dispatch({ type: failure });
      }
    })();
  }

  return next(action);
};
