import { StyleSheet, View } from "react-native";
import { Link } from "react-router-native";
import Text from "./Text";

const styles = StyleSheet.create({
  scrollViewDetail: {
    flexGrow: 0,
    // marginRight: 5,
  },
});

const AppBarTab = (props) => (
  <View style={styles.scrollViewDetail}>
    <Link to={props.link}>
      <Text color="label" fontSize="subheading" fontWeight="bold">
        {props.name}
      </Text>
    </Link>
  </View>
);

export default AppBarTab;
