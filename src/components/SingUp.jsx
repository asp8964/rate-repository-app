import { View } from "react-native";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { formStyle } from "../theme";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-native";
import FormInput from "./BaseForm/FormInput";
import FormButton from "./BaseForm/FormButton";
import useSignUp from "../hooks/useSignUp";
import useSignIn from "../hooks/useSignIn";

const schema = yup
  .object({
    username: yup.string().required("Username is require").min(5).max(30),
    password: yup.string().required("Password is require").min(5).max(50),
    passwordConfirm: yup
      .string()
      .oneOf(
        [yup.ref("password"), null],
        "Password confirmation must match the Password"
      )
      .required("Password Confirm is require"),
  })
  .required();

const SignUp = () => {
  const [signUp] = useSignUp();
  const [signIn] = useSignIn();
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    const { username, password } = values;

    try {
      await signUp({ username, password });
      await signIn({ username, password });
      // console.log(data);
      navigate("/");
    } catch (e) {
      console.log(e);
    }
  };
  return <SignUpForm onSubmit={onSubmit} />;
};

export const SignUpForm = ({ onSubmit }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: "",
      password: "",
      passwordConfirm: "",
    },
    resolver: yupResolver(schema),
  });

  return (
    <>
      <View style={formStyle.container}>
        <FormInput
          name="username"
          placeholder="Username"
          control={control}
          errors={errors.username}
        />

        <FormInput
          name="password"
          placeholder="Password"
          isSecure={true}
          control={control}
          errors={errors.password}
        />

        <FormInput
          name="passwordConfirm"
          placeholder="Password Confirm"
          isSecure={true}
          control={control}
          errors={errors?.passwordConfirm}
        />

        <FormButton text="Sign up" submit={handleSubmit(onSubmit)} />
      </View>
    </>
  );
};

export default SignUp;
