import { createContext, useReducer } from "react";

export const initialState = [
  { orderBy: "CREATED_AT", orderDirection: "DESC", searchKeyword: "" },
  "lastest",
];

const SortReducer = (state, action) => {
  switch (action.type) {
    case "latest":
      return [
        { ...state[0], orderBy: "CREATED_AT", orderDirection: "DESC" },
        "lastest",
      ];
    case "highestRated":
      return [
        { ...state[0], orderBy: "RATING_AVERAGE", orderDirection: "DESC" },
        "highestRated",
      ];
    case "lowestRated":
      return [
        { ...state[0], orderBy: "RATING_AVERAGE", orderDirection: "ASC" },
        "lowestRated",
      ];
    case "search":
      return [{ ...state[0], searchKeyword: action.payload }, state[1]];
    default:
      return initialState;
  }
};

const SortContext = createContext();

export const SortContextProvider = (props) => {
  const [sort, sortDispatch] = useReducer(SortReducer, initialState);
  return (
    <SortContext.Provider value={[sort, sortDispatch]}>
      {props.children}
    </SortContext.Provider>
  );
};

export default SortContext;
