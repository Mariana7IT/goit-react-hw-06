import React from "react";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsSlice";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup"; 
import s from "./ContactForm.module.css";


const contactSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  number: Yup.string().required("Number is required"),
});

const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(addContact(values));
    resetForm(); // Скидання форми після відправлення
  };

  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      onSubmit={handleSubmit}
      validationSchema={contactSchema}
    >
      {() => (
        <Form className={s.wrapper}>
          <label>
            Name
            <Field className={s.contactInput} type="text" name="name" />
            <ErrorMessage name="name" component="span" className={s.error} />
          </label>
          <label>
            Number
            <Field className={s.contactInput} type="tel" name="number" />
            <ErrorMessage name="number" component="span" className={s.error} />
          </label>
          <button type="submit" className={s.formBtn}>
            Add contact
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
