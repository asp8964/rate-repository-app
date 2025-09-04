import { Alert, StyleSheet, View } from "react-native";
import Text from "./Text";
import { format } from "date-fns";
import theme from "../theme";
import FormButton from "./BaseForm/FormButton";
import { useNavigate } from "react-router-native";
import useDeleteReview from "../hooks/useDeleteReview";

const ReviewItem = ({ review }) => {
  // Single review item
  const navigate = useNavigate();
  const deleteReview = useDeleteReview();

  const handleDelete = () => {
    Alert.alert("Delete View", "Are you sure you want to delete this review?", [
      {
        text: "Cancel",
        // onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      {
        text: "OK",
        onPress: async () => await deleteReview(review?.id),
      },
    ]);
  };

  return (
    <>
      <View style={styles.reviewContainer}>
        <View style={styles.ratingContainer}>
          <Text color="primary" fontWeight="bold" style={styles.ratingText}>
            {review.rating}
          </Text>
        </View>
        <View style={styles.infoContainer}>
          <View>
            {review?.user?.username && (
              <Text fontWeight="bold" fontSize="subheading">
                {review.user.username}
              </Text>
            )}
            {review?.repository?.fullName && (
              <Text fontWeight="bold" fontSize="subheading">
                {review.repository.fullName}
              </Text>
            )}
          </View>
          <View style={styles.dateText}>
            <Text>{format(review.createdAt, "dd.MM.yyyy")}</Text>
          </View>
          <View style={styles.reviewTextContainer}>
            <Text fontSize="subheading">{review.text}</Text>
          </View>
        </View>
      </View>
      {review?.repository?.id && (
        <View style={styles.buttonContiner}>
          <FormButton
            text={"View repository"}
            submit={() => navigate(`/${review?.repository?.id}`)}
          />
          <FormButton
            text={"Delete review"}
            submit={handleDelete}
            error={true}
          />
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  reviewContainer: {
    backgroundColor: "white",
    flexDirection: "row",
    marginTop: 10,
    padding: 10,
  },
  ratingContainer: {
    marginTop: 10,
    marginRight: 10,
    width: 50,
    height: 50,
    borderRadius: 25,
    borderStyle: "solid",
    borderWidth: 3,
    borderColor: theme.colors.primary,
    justifyContent: "center",
    alignItems: "center",
  },
  ratingText: {
    fontSize: 22,
  },
  infoContainer: {
    marginTop: 10,
    marginBottom: 10,
    flex: 1,
  },
  dateText: {
    marginTop: 3,
  },
  reviewTextContainer: {
    marginTop: 10,
  },
  buttonContiner: {
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default ReviewItem;
