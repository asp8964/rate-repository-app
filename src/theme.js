import { Platform, StyleSheet } from "react-native";

const theme = {
  colors: {
    textPrimary: "#24292e",
    textSecondary: "#586069",
    primary: "#0366d6",
    background: "#e1e4e8",
    error: "#d73a4a",
  },
  fontSizes: {
    body: 14,
    subheading: 16,
  },
  fonts: {
    main: Platform.select({
      android: "Roboto",
      ios: "Arial",
      default: "System",
    }),
  },
  fontWeights: {
    normal: "400",
    bold: "700",
  },
};

export const formStyle = StyleSheet.create({
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
    margin: 15,
    backgroundColor: theme.colors.primary,
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

export default theme;
