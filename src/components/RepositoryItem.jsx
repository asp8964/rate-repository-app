import { Image, Pressable, StyleSheet, View } from "react-native";
import theme from "../theme";
import Text from "./Text";
import * as Linking from "expo-linking";

const styles = StyleSheet.create({
  font: { font: theme.fonts.main },

  container: {
    backgroundColor: "white",
  },

  topContainer: {
    flexDirection: "row",
    margin: 10,
  },

  avatar: {
    width: 50,
    height: 50,
    borderRadius: 10,
    marginRight: 10,
  },

  rightContainer: { width: "100%", flexShrink: 1, minWidth: 0 },

  title: {
    marginBottom: 5,
  },

  languageContainer: {
    flexDirection: "row",
    marginTop: 10,
    marginBottom: 10,
  },

  language: {
    backgroundColor: theme.colors.primary,
    paddingHorizontal: 5,
    paddingVertical: 4,
    borderRadius: 5,
  },

  otherContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    // marginRight: 10,
  },

  otherDetail: {
    flexDirection: "column",
    flexGrow: 0,
    alignItems: "center",
    justifyContent: "center",
    width: "25%",
    marginBottom: 10,
  },

  bgBlue: {
    padding: 15,
    margin: 20,
    backgroundColor: theme.colors.primary,
    borderRadius: 5,
    color: "white",
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

const RepositoryItem = ({ repo }) => {
  const convertNumber = (num) =>
    num >= 1000 ? (num / 1000).toFixed(1) + "k" : num;

  return (
    <View style={styles.container} testID="repositoryItem">
      <View style={styles.topContainer}>
        <Image source={{ uri: repo.ownerAvatarUrl }} style={styles.avatar} />

        <View style={styles.rightContainer}>
          <Text fontSize="subheading" fontWeight="bold" style={styles.title}>
            {repo.fullName}
          </Text>
          <Text color="gray">{repo.description}</Text>

          <View style={styles.languageContainer}>
            <Text fontWeight="bold" color="label" style={styles.language}>
              {repo.language}
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.otherContainer}>
        <View style={styles.otherDetail}>
          <Text fontWeight="bold">{convertNumber(repo.stargazersCount)}</Text>
          <Text color="gray">Stars</Text>
        </View>
        <View style={styles.otherDetail}>
          <Text fontWeight="bold">{convertNumber(repo.forksCount)}</Text>
          <Text color="gray">Forks</Text>
        </View>
        <View style={styles.otherDetail}>
          <Text fontWeight="bold">{convertNumber(repo.reviewCount)}</Text>
          <Text color="gray">Reviews</Text>
        </View>
        <View style={styles.otherDetail}>
          <Text fontWeight="bold">{convertNumber(repo.ratingAverage)}</Text>
          <Text color="gray">Rating</Text>
        </View>
      </View>
      {repo?.url && (
        <View>
          <Pressable
            style={styles.bgBlue}
            onPress={() => Linking.openURL(repo.url)}
          >
            <Text color="label" fontWeight="bold" fontSize="subheading">
              Open in Github
            </Text>
          </Pressable>
        </View>
      )}
    </View>
  );
};

export default RepositoryItem;
