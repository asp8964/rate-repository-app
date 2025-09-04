import { useQuery } from "@apollo/client/react";
// import { useState, useEffect } from "react";
import { GET_REPOSITORIES } from "../graphql/queries";
import { useSortValue } from "./useRepositorySort";
import { useDebounce } from "use-debounce";

const useRepositories = () => {
  const [sortValue] = useSortValue();
  const [headerValue] = useDebounce(sortValue, 500);
  const variables = { ...headerValue, first: 6 };

  const { data, loading, fetchMore, ...result } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: "cache-and-network",
    variables,
  });

  const handleFetchMore = () => {
    const canFetchMore = !loading && data?.repositories.pageInfo.hasNextPage;

    if (!canFetchMore) {
      return;
    }

    fetchMore({
      variables: {
        after: data.repositories.pageInfo.endCursor,
        ...variables,
      },
    });
  };

  return {
    repositories: data?.repositories,
    fetchMore: handleFetchMore,
    loading,
    // refetch,
    ...result,
  };
};

export default useRepositories;
