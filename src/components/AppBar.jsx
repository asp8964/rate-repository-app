import { View, StyleSheet, ScrollView, Pressable } from "react-native";
import Constants from "expo-constants";
import theme from "../theme";
import AppBarTab from "./AppBarTab";
import { useApolloClient, useQuery } from "@apollo/client/react";
import { ME } from "../graphql/queries";
import Text from "./Text";
import useAuthStorage from "../hooks/useAuthStorage";
import { useNavigate } from "react-router-native";

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
        {data?.me ? (
          <>
            <AppBarTab link="/create" name="Create a view" />
            <AppBarTab link="/myReviews" name="My reviews" />
            <SignOut />
          </>
        ) : (
          <>
            <AppBarTab link="/signIn" name="Sign in" />
            <AppBarTab link="/signUp" name="Sign Up" />
          </>
        )}
      </ScrollView>
    </View>
  );
};

const SignOut = () => {
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();
  const navitage = useNavigate();

  const onSubmit = async () => {
    await authStorage.removeAccessToken();
    apolloClient.resetStore();
    navitage("/");
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
