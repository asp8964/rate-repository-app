import { Pressable, StyleSheet, TextInput, View } from "react-native";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import Text from "./Text";
import theme from "../theme";
import { yupResolver } from "@hookform/resolvers/yup";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
  },
  text: {
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: "thistle",
    borderRadius: 5,
    fontSize: 20,
  },
  textError: {
    borderColor: theme.colors.error,
  },
  error: {
    marginLeft: 20,
    marginRight: 20,
    paddingTop: 10,
    color: theme.colors.error,
  },
  submit: {
    padding: 15,
    margin: 20,
    backgroundColor: "blue",
    borderRadius: 5,
    color: "white",
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  buttonView: {
    flexDirection: "row",
    justifyContent: "center",
  },

  subText: {
    // color: "white",
    fontSize: 20,
    // fontWeight: theme.fontWeights.bold,
  },
});

const schema = yup
  .object({
    username: yup.string().required(),
    password: yup.string().required(),
  })
  .required();

const SignIn = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
    resolver: yupResolver(schema),
  });
  const onSubmit = (values) => {
    console.log(values);
  };
  return (
    <>
      <View style={styles.container}>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={[styles.text, errors.username && styles.textError]}
              placeholder="Username"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="username"
        />
        {errors.username && (
          <Text color="error" style={styles.error}>
            Username is required
          </Text>
        )}

        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={[styles.text, errors.password && styles.textError]}
              secureTextEntry
              placeholder="Password"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="password"
        />
        {errors.password && (
          <Text color="error" style={styles.error}>
            Password is required
          </Text>
        )}

        <View style={styles.buttonView}>
          <Pressable style={styles.submit} onPress={handleSubmit(onSubmit)}>
            <Text color="label" fontWeight="bold" style={styles.subText}>
              Sign in
            </Text>
          </Pressable>
        </View>
      </View>
    </>
  );
};

export default SignIn;
