import { FlatList, Pressable } from "react-native";
import RepositoryItem from "./RepositoryItem";
import useRepositories from "../hooks/useRepositories";
import { useNavigate } from "react-router-native";
import ItemSeparator from "./ItemSeparator";
import RepositorySort from "./RepositorySort";
import RepositorySearch from "./RepositorySearch";

export const RepositoryListContainer = ({ repositories, onEndReach }) => {
  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : [];

  const navigate = useNavigate();
  const handlePress = (id) => navigate(`/${id}`);

  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={<ItemSeparator />}
      keyExtractor={(item) => item.id}
      onEndReached={onEndReach}
      onEndReachedThreshold={0.5}
      ListHeaderComponent={
        <>
          <RepositorySearch />
          <RepositorySort />
        </>
      }
      renderItem={({ item }) => (
        <>
          <Pressable onPress={() => handlePress(item.id)}>
            <RepositoryItem repo={item} />
          </Pressable>
        </>
      )}
    />
  );
};

const RepositoryList = () => {
  const { repositories, fetchMore } = useRepositories();
  const onEndReach = () => {
    console.log("You have reached the end of the list");
    fetchMore();
  };
  // console.log("list", repositories, loading, error?.stack);

  return (
    <RepositoryListContainer
      repositories={repositories}
      onEndReach={onEndReach}
    />
  );
};

export default RepositoryList;
