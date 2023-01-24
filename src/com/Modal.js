import React, { useState } from "react";
import { Validatio } from "../shcemas/index";
import { CreateInfo } from "../Api/SendData";
import { useFormik } from "formik";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormGroup,
  Form,
  Label,
  Input,
  Alert,
} from "reactstrap";
function Example(args) {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const [Preview, setPreview] = useState("");
  const {
    values,
    handleBlur,
    isSubmitting,
    touched,
    errors,
    resetForm,
    handleChange,
    handleSubmit,
    setFieldValue,
  } = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      avatar: "",
    },
    validationSchema: Validatio,
    onSubmit: async (submittedValues) => {
      const inputs = {
        firstname: submittedValues.firstname,
        lastname: submittedValues.lastname,
        email: submittedValues.email,
        password: submittedValues.password,
        avatar: submittedValues.avatar,
      };
      CreateInfo("http://localhost:5000/api/users", inputs);
      resetForm();
    },
  });

  return (
    <div
      style={{ height: "100vh" }}
      className="d-flex justify-content-center align-items-center "
    >
      <div>
        <Button color="danger" onClick={toggle}>
          Add User{" "}
        </Button>
      </div>
      <Modal isOpen={modal} toggle={toggle} {...args}>
        <ModalHeader toggle={toggle}>Add User</ModalHeader>
        <ModalBody>
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label for="exampleEmail">First Name</Label>
              <Input
                type="text"
                name="firstname"
                value={values.firstname}
                onBlur={handleBlur}
                onChange={handleChange}
              />
              {errors.firstname && touched.firstname && (
                <Alert className=" p-3 mb-2 bg-danger text-white">
                  {errors.firstname}
                </Alert>
              )}
            </FormGroup>

            <FormGroup>
              <Label for="exampleEmail">Last Name</Label>
              <Input
                required
                type="text"
                name="lastname"
                value={values.lastname}
                onBlur={handleBlur}
                onChange={handleChange}
              />
              {errors.lastname && touched.lastname && (
                <Alert className=" p-3 mb-2 bg-danger text-white">
                  {errors.lastname}
                </Alert>
              )}
            </FormGroup>
            <FormGroup>
              <Label for="exampleFile">File</Label>
              <Input
                name="userImage"
                type="file"
                accept="image/*"
                value={values.userImage}
                onBlur={handleBlur}
                onChange={(event) => {
                  let reader = new FileReader();
                  reader.onload = () => {
                    if (reader.readyState === 2) {
                      setFieldValue("avatar", reader.result);
                      setPreview(reader.result);
                    }
                  };
                  reader.readAsDataURL(event.target.files[0]);
                }}
              />
            </FormGroup>
            <div className="d-flex justify-content-center align-items-center ">
              <img src={Preview} width="200" alt="" />
            </div>
            <FormGroup>
              <Label for="exampleEmail">Email</Label>
              <Input
                required
                type="email"
                name="email"
                value={values.email}
                onBlur={handleBlur}
                onChange={handleChange}
              />
              {errors.email && touched.email && (
                <Alert className=" p-3 mb-2 bg-danger text-white">
                  {errors.email}
                </Alert>
              )}
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input
                required
                autoComplete="password"
                type="password"
                name="password"
                value={values.password}
                onBlur={handleBlur}
                onChange={handleChange}
              />
              {errors.password && touched.password && (
                <Alert className=" p-3 mb-2 bg-danger text-white">
                  {errors.password}
                </Alert>
              )}
            </FormGroup>
            <ModalFooter>
              <Button disabled={isSubmitting} type="submit" color="primary">
                Submit
              </Button>{" "}
              <Button color="secondary" onClick={toggle}>
                Cancel
              </Button>
            </ModalFooter>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
}
export default Example;
