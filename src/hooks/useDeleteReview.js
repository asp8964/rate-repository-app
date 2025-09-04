import { useMutation } from "@apollo/client/react";
import { DELETE_REVIEW } from "../graphql/mutations";
import { ME } from "../graphql/queries";

const useDeleteReview = () => {
  const [mutate] = useMutation(DELETE_REVIEW);

  const deleteReview = async (id) =>
    id &&
    (await mutate({
      variables: { deleteReviewId: id },
      refetchQueries: [{ query: ME, variables: { includeReviews: true } }],
    }));

  return deleteReview;
};

export default useDeleteReview;
