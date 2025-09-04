import { useMutation } from "@apollo/client/react";
import { SIGN_UP } from "../graphql/mutations";

const useSignUp = () => {
  const [mutate, result] = useMutation(SIGN_UP);

  const signUp = async ({ username, password }) => {
    const { data } = await mutate({
      variables: { user: { username, password } },
    });
    // console.log(data?.authenticate?.accessToken);
    return data;
  };

  return [signUp, result];
};

export default useSignUp;
