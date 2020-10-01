import React from "react";
import * as yup from "yup";
import { useFormikContext } from "formik";

import { SubmitButton, AppFormField, AppForm } from "../components/forms";

import Screen from "../components/Screen";
import styles from "../config/styles";

const validationsSchema = yup.object().shape({
  name: yup.string().required().min(2).label("Name"),
  email: yup.string().required().email().label("Email"),
  password: yup.string().required().min(4).label("Password"),
});

const Register = () => {
  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{
          title: "",
          price: "",
          description: "",
          category: null,
        }}
        onSubmit={(value) => console.log(values)}
        validationSchema={validationsSchema}
      >
        <AppFormField
          icon="account"
          maxLenght={255}
          name="name"
          placeholder="Name"
        />
        <AppFormField
          autoCorrect={false}
          name="email"
          icon="email"
          keyboardType="email-address"
          placeholder="Email"
          textContentType="emailAddress"
        />
        <AppFormField
          maxLength={120}
          name="password"
          placeholder="Password"
          secureTextEntry={true}
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
        />
        <SubmitButton title="Post" />
      </AppForm>
    </Screen>
  );
};

export default Register;
