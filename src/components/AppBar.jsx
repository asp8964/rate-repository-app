import { View, StyleSheet, ScrollView, Pressable } from "react-native";
import Constants from "expo-constants";
import theme from "../theme";
import AppBarTab from "./AppBarTab";
import { useApolloClient, useQuery } from "@apollo/client/react";
import { ME } from "../graphql/queries";
import Text from "./Text";
import useAuthStorage from "../hooks/useAuthStorage";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.textPrimary,
    padding: 20,
    // ...
  },
  scrollView: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 15,
  },
});

const AppBar = () => {
  const { data } = useQuery(ME);
  console.log("ME", data);

  return (
    <View style={styles.container}>
      <ScrollView horizontal contentContainerStyle={styles.scrollView}>
        <AppBarTab link="/" name="Repositories" />
        {data?.me ? <SignOut /> : <AppBarTab link="/signin" name="Sign in" />}
      </ScrollView>
    </View>
  );
};

const SignOut = () => {
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();

  const onSubmit = async () => {
    await authStorage.removeAccessToken();
    apolloClient.resetStore();
  };

  return (
    <Pressable style={styles.submit} onPress={onSubmit}>
      <Text color="label" fontWeight="bold" style={styles.subText}>
        Sign Out
      </Text>
    </Pressable>
  );
};

export default AppBar;
