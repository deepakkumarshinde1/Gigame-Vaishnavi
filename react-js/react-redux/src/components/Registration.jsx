import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { getUserDetails } from "../redux/user.slice";

let FormValidation = {
  name: {
    required: {
      value: true,
      message: "Enter User Name",
    },
    pattern: {
      value: /^[a-zA-Z ]*$/gi,
      message: "Invalid User Name",
    },
    minLength: {
      value: 2,
      message: "Name must be of 2 char eg. Om",
    },
  },
};
function Registration() {
  let dispatch = useDispatch();
  let {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  let submit = (value) => {
    dispatch(getUserDetails(value));
  };
  return (
    <>
      <form onSubmit={handleSubmit(submit)}>
        <input
          type="text"
          placeholder="Enter Name"
          {...register("name", { ...FormValidation.name })}
        />
        {errors.name && <small>{errors.name.message}</small>}
        <button>Save</button>
      </form>
    </>
  );
}

export default Registration;
