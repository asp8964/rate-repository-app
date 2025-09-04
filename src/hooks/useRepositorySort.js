import { useContext } from "react";
import SortContext from "../contexts/RepositorySortContext";

export const useSortValue = () => {
  const sortAndDispatch = useContext(SortContext);
  return [sortAndDispatch[0][0], sortAndDispatch[0][1]];
};

export const useSortDispatch = () => {
  const sortAndDispatch = useContext(SortContext);
  return sortAndDispatch[1];
};
