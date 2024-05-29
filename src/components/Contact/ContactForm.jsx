import { useId } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { nanoid } from "nanoid";
import { ValidSchema, initialValues } from "../helper";
import { Button } from "../Button/Button";

import css from "./ContactForm.module.css";

export const ContactForm = ({ onSubmit }) => {
  const idName = useId();
  const idNumber = useId();
  const idCard = nanoid();

  const handleSubmit = (initialValues, actions) => {
    actions.resetForm();
    onSubmit({
      id: idCard,
      name: initialValues.name,
      number: initialValues.number,
    });
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={ValidSchema}
        onSubmit={handleSubmit}
      >
        <Form className={css.form}>
          <label htmlFor={idName}>Name</label>
          <Field
            name="name"
            type="text"
            id={idName}
            placeholder="Input name"
            required
          />
          <ErrorMessage className={css.error} name="name" component="span" />
          <label htmlFor={idNumber}>Number</label>
          <Field
            name="number"
            type="tel"
            id={idNumber}
            placeholder="Input number"
            required
          />
          <ErrorMessage className={css.error} name="number" component="span" />
          <Button>Add contact</Button>
        </Form>
      </Formik>
    </>
  );
};

export default ContactForm;