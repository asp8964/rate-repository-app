import { Controller } from "react-hook-form";
import { TextInput } from "react-native";
import Text from "../Text";
import { formStyle } from "../../theme";

const FormInput = ({
  name,
  placeholder,
  control,
  errors,
  isSecure = false,
  multiline = false,
}) => {
  return (
    <>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={[formStyle.text, errors && formStyle.textError]}
            placeholder={placeholder}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            secureTextEntry={isSecure}
            multiline={multiline}
            autoCapitalize="none"
          />
        )}
        name={name}
      />
      {errors && (
        <Text color="error" style={formStyle.error}>
          {`${errors?.message}`}
        </Text>
      )}
    </>
  );
};

export default FormInput;
