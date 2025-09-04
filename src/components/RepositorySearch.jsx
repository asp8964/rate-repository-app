import { TextInput } from "react-native";
import { formStyle } from "../theme";
import { useSortDispatch, useSortValue } from "../hooks/useRepositorySort";

const RepositorySearch = () => {
  const searchKeyword = useSortValue()[0]["searchKeyword"];
  const searchDispatch = useSortDispatch();
  //   console.log(searchKeyword);

  return (
    <TextInput
      style={[formStyle.text, { backgroundColor: "white" }]}
      placeholder="Search"
      value={searchKeyword}
      onChangeText={(text) => searchDispatch({ type: "search", payload: text })}
      autoCapitalize="none"
    />
  );
};

export default RepositorySearch;
