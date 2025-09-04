import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { View } from "react-native";
import * as yup from "yup";
import { formStyle } from "../theme";
import FormInput from "./BaseForm/FormInput";
import FormButton from "./BaseForm/FormButton";
import useCreateReivew from "../hooks/useCreateReview";
import { useNavigate } from "react-router-native";

const schema = yup
  .object({
    ownerName: yup.string().required("Repository owner name is require"),
    repositoryName: yup.string().required("Repository name is require"),
    rating: yup.number().required("Rating is require").min(0).max(100),
  })
  .required();

const ReviewForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      ownerName: "",
      repositoryName: "",
      text: "",
    },
    resolver: yupResolver(schema),
  });

  const [createReivew] = useCreateReivew();
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    console.log(values);
    const { ownerName, repositoryName, rating, text } = values;
    try {
      const data = await createReivew({
        ownerName,
        repositoryName,
        rating,
        text,
      });
      //   console.log("review-data", data?.createReview);
      navigate(`/${data?.createReview?.repositoryId}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <View style={formStyle.container}>
        <FormInput
          name="ownerName"
          placeholder="Repository owner name"
          control={control}
          errors={errors.ownerName}
        />

        <FormInput
          name="repositoryName"
          placeholder="Repository name"
          control={control}
          errors={errors.repositoryName}
        />

        <FormInput
          name="rating"
          placeholder="Rating between 0 and 100"
          control={control}
          errors={errors.rating}
        />

        <FormInput
          name="text"
          placeholder="Review"
          multiline={true}
          control={control}
          errors={errors.text}
        />

        <FormButton text="Create a review" submit={handleSubmit(onSubmit)} />
      </View>
    </>
  );
};

export default ReviewForm;
