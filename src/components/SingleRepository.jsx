import RepositoryItem from "./RepositoryItem";
import Text from "./Text";
import { useParams } from "react-router-native";
import { FlatList } from "react-native";
import ReviewItem from "./ReviewItem";
import useRepository from "../hooks/useRepository";

const RepositoryInfo = ({ repository }) => <RepositoryItem repo={repository} />;

const SingleRepository = () => {
  const id = useParams().id;
  // console.log("id", id);
  if (!id) {
    return <Text>no data</Text>;
  }

  // const { data, loading } = useQuery(GET_REPOSITORY, {
  //   fetchPolicy: "cache-and-network",
  //   variables: { repositoryId: id },
  // });
  const { repository, loading, fetchMore } = useRepository(id);
  const reviews = repository?.reviews?.edges?.map((e) => e.node);
  // console.log("data", data?.repository);
  if (loading) {
    return <Text>loading...</Text>;
  }

  return (
    <FlatList
      data={reviews}
      renderItem={({ item }) => <ReviewItem review={item} />}
      keyExtractor={({ id }) => id}
      ListHeaderComponent={() => <RepositoryInfo repository={repository} />}
      onEndReached={() => fetchMore()}
      onEndReachedThreshold={0.5}
      // ItemSeparatorComponent={<ItemSeparator />}
    />
  );
};

export default SingleRepository;
