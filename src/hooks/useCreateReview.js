import { useMutation } from "@apollo/client/react";
import { CREATE_REVIEW } from "../graphql/mutations";

const useCreateReivew = () => {
  const [mutate, result] = useMutation(CREATE_REVIEW);

  const createReivew = async ({ ownerName, repositoryName, rating, text }) => {
    const { data } = await mutate({
      variables: {
        review: {
          ownerName: ownerName,
          rating: rating,
          text: text,
          repositoryName: repositoryName,
        },
      },
    });
    return data;
  };
  return [createReivew, result];
};

export default useCreateReivew;
