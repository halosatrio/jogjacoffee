import { ADD_ARTICLE } from "../types";

const forbiddenWords = ["spam", "money"];

export const forbiddenWordsMiddleware = ({ dispatch }) => {
  return function (next) {
    return function (action) {
      // do your stuff
      if (action.type === ADD_ARTICLE) {
        const foundWords = forbiddenWords.filter((word) =>
          action.payload.title.includes(word)
        );

        if (foundWords.length) {
          return dispatch({ type: "FOUND_BAD_WORD" });
        }
      }
      return next(action);
    };
  };
};
