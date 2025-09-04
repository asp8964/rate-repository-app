import { Picker } from "@react-native-picker/picker";
import { useSortDispatch, useSortValue } from "../hooks/useRepositorySort";

const RepositorySort = () => {
  const [, selectedValue] = useSortValue();
  const sortDispatch = useSortDispatch();
  // console.log("selectedSort", selectedValue);

  return (
    <>
      <Picker
        selectedValue={selectedValue}
        onValueChange={(itemValue) => sortDispatch({ type: itemValue })}
      >
        <Picker.Item label="Latest repositories" value="latest" />
        <Picker.Item label="Highest rated repositories" value="highestRated" />
        <Picker.Item label="Lowest rated repositories" value="lowestRated" />
      </Picker>
    </>
  );
};

export default RepositorySort;
