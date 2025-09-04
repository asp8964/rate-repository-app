import { Pressable, View } from "react-native";
import Text from "../Text";
import theme, { formStyle } from "../../theme";

const FormButton = ({ text, submit, error = false }) => {
  return (
    <View style={formStyle.buttonView}>
      <Pressable
        style={[
          formStyle.submit,
          error && { backgroundColor: theme.colors.error },
        ]}
        onPress={submit}
      >
        <Text color="label" fontWeight="bold" style={formStyle.subText}>
          {text}
        </Text>
      </Pressable>
    </View>
  );
};

export default FormButton;
