import { nanoid } from 'nanoid'
import { Formik,  Form, Field, ErrorMessage } from 'formik';
import * as Yup from "yup";
import { useId } from "react";
import css from "./ContactForm.module.css"

const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Name is Required'),
    number: Yup.string()
      .min(3,'Too Short!')
      .max(50,'Too Long!')
      .required('Number is Required'),
  });
  
  export const ContactForm = ({ onAdd }) => {
    const nameFieldId = useId();
    const numberFieldId = useId();
  
    const handleSubmit = (values, actions) => {
      const id = nanoid();
      onAdd({ id, ...values });
      actions.resetForm();
    };
    return (
      <Formik
        initialValues={{
          name: "",
          number: "",
        }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <Form className={css.form}>
          <label name="name" className={css.label} htmlFor={nameFieldId}>
            Name
          </label>
          <Field className={css.field} type="text" name="name" id={nameFieldId} />
          <ErrorMessage name="name" component="span" className={css.error} />
  
          <label className={css.label} name="number" htmlFor={numberFieldId}>
            Number
          </label>
          <Field
            className={css.field}
            type="number"
            name="number"
            id={numberFieldId}
          />
          <ErrorMessage name="number" component="span" className={css.error} />
          <button className={css.button} type="submit">
            Add Contact
          </button>
        </Form>
      </Formik>
    );
  };
  
  export default ContactForm;