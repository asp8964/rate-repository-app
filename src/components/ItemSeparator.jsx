import { StyleSheet, View } from "react-native";

const styles = StyleSheet.create({
  separator: {
    height: 10,
    // backgroundColor: theme.colors.spColor,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

export default ItemSeparator;
