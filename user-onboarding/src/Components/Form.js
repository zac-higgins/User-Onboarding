import React, { useState, useEffect } from "react";
import axios from "axios";
import { Form, Field, withFormik } from "formik";
import * as Yup from "yup";

const UserForm = () => {
    // const [users, setUsers] = useState([]);

    return (
        <div className="user-form">
            <h1>User Onboarding</h1>
            <Form className="form">
                <Field type="text" name="name" placeholder="Name" />
                <Field type="text" name="email" placeholder="Email" />
                <Field type="text" name="password" placeholder="Password" />
                <label className="checkbox-container">
                    I agree to the Terms of Service
                    <Field
                        type="checkbox"
                        name="terms-of-service"
                    />
                </label>
                <button type="submit">Submit</button>
            </Form>
        </div>
    )
}
const FormikUserForm = withFormik({
    mapPropsToValues({ name, email, password }) {
        return {
            name: name || "",
            email: email || "",
            password: password || ""
        }
    }
})(UserForm);
export default FormikUserForm;