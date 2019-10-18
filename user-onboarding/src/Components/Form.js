import React, { useState, useEffect } from "react";
import axios from "axios";
import { Form, Field, withFormik } from "formik";
import * as Yup from "yup";

const UserForm = ({ values, touched, errors }) => {
    const [users, setUsers] = useState([]);
    useEffect(() => {

    })

    return (
        <div className="user-form">
            <h1>User Onboarding</h1>
            <Form className="form">
                <Field type="text" name="name" placeholder="Name" />
                {touched.name && errors.name && (<p className="error">{errors.name}</p>)}
                <Field type="text" name="email" placeholder="Email" />
                {touched.email && errors.email && (<p className="error">{errors.email}</p>)}
                <Field type="text" name="password" placeholder="Password" />
                {touched.password && errors.password && (<p className="error">{errors.password}</p>)}
                <label className="checkbox-container">
                    I agree to the Terms of Service
                    <Field
                        type="checkbox"
                        name="terms-of-service"
                        checked={values.termsOfService}
                    />
                </label>
                <button type="submit">Submit</button>
            </Form>
        </div>
    )
}
const FormikUserForm = withFormik({
    //sets the default values when the form loads
    mapPropsToValues({ name, email, password, termsOfService }) {
        return {
            name: name || "",
            email: email || "",
            password: password || "",
            termsOfService: termsOfService || false
        }
    },
    validationSchema: Yup.object().shape({
        name: Yup.string().required(),
        email: Yup.string().required(),
        password: Yup.string().required()
    }),
    handleSubmit(values, { setStatus }) {
        axios
            .post("https://reqres.in/api/users/", values)
            .then(res => {
                setStatus(res.data);
                console.log(res);
            })
            .catch(err => console.log(err.response));
    }
})(UserForm);
export default FormikUserForm;