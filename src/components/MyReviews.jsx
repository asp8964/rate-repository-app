import { FlatList } from "react-native";
import ReviewItem from "./ReviewItem";
import { useQuery } from "@apollo/client/react";
import { ME } from "../graphql/queries";
import Text from "./Text";

const MyReviews = () => {
  const { data, loading } = useQuery(ME, {
    variables: { includeReviews: true },
    fetchPolicy: "cache-and-network",
  });
  const reviews = data?.me?.reviews?.edges?.map((e) => e.node);

  if (loading) {
    return <Text>loading...</Text>;
  }

  return (
    <FlatList
      data={reviews}
      renderItem={({ item }) => <ReviewItem review={item} />}
      keyExtractor={({ id }) => id}
      // ItemSeparatorComponent={<ItemSeparator />}
    />
  );
};

export default MyReviews;
