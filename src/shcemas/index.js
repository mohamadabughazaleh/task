import * as yup from "yup";
export const Validation = yup.object().shape({
  firstname: yup
    .string()
    .matches(/^[A-Za-z ]*$/, "Please enter valid FirstName")
    .max(40)
    .required(),
  lastname: yup
    .string()
    .matches(/^[A-Za-z ]*$/, "Please enter valid LastName")
    .max(40)
    .required(),
  email: yup.string().email("plase enter valid a email").required(),
  password: yup
    .string()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    )
    .required(),
});
