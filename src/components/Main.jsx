import { StyleSheet, View } from "react-native";
import RepositoryList from "./RepositoryList";
import AppBar from "./AppBar";
import { Navigate, Route, Routes } from "react-router-native";
import SignIn from "./SignIn";
import theme from "../theme";
import SingleRepository from "./SingleRepository";
import ReviewForm from "./ReviewForm";
import SignUp from "./SingUp";
import MyReviews from "./MyReviews";

const styles = StyleSheet.create({
  container: {
    // marginTop: Constants.statusBarHeight,
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: theme.colors.background,
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <Routes>
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/create" element={<ReviewForm />} />
        <Route path="/myReviews" element={<MyReviews />} />
        <Route path="/" element={<RepositoryList />} />
        <Route path="/:id" element={<SingleRepository />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </View>
  );
};

export default Main;
