import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import "./SignUp.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/signin');
  }
  
  return (
    <div className="signup-container">
      <Formik
        initialValues={{ custName: "", custAddress: "", custPhone: "", custEmail: "", custPassword: "", confirm_password: "", cardHolder: "" ,}}
        onSubmit={async (values, { setSubmitting }) => {
          try {
            const res = await axios.post("http://localhost:8080/api/Customer", values);
            console.log(res.data);
            alert("Registration Successful");
            navigate('/signin');
          } catch (error) {
            console.error("Error:", error);
          } finally {
            setSubmitting(false);
          }
        }}
        validationSchema={Yup.object().shape({
          custName: Yup.string()
            .required("Customer name must be entered")
            .matches(/^[a-zA-Z ]+$/, "Customer name must contain only characters"),
          custAddress: Yup.string()
            .required("Customer Address must be entered"),
          custPhone: Yup.string()
            .required("Customer Phone number must be entered")
            .matches(/^[0-9]+$/, "Phone number must contain only numbers")
            .length(10, "Phone number must be 10 digits"),
          custEmail: Yup.string()
            .email("Invalid email format")
            .required("Email is required"),
          custPassword: Yup.string()
            .required("No password provided.")
            .matches(/^[A-Za-z0-9]+$/, "Password must contain only numbers and letters")
            .min(5, "Password is too short - should be 5 chars minimum.")
            .max(10, "Password is too long - should be 10 characters maximum."),
          confirm_password: Yup.string()
            .required("No password provided.")
            .oneOf([Yup.ref('custPassword'), null], "Password must match."),
          cardHolder: Yup.string()
            .required("Please indicate if the person is a card holder.")
        })}
      >
        {({ values, touched, errors, isSubmitting, handleChange, handleBlur, handleSubmit
        }) => ( <div className="signup-form">
            <h1>Please Register</h1>
            <form onSubmit={handleSubmit}>
              <label htmlFor="custName">Name</label>
              <input
                id="custName"
                name="custName"
                type="text"
                placeholder="Enter your name"
                value={values.custName}
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.custName && touched.custName && "error"}
              />
              {errors.custName && touched.custName && (
                <div className="input-feedback">{errors.custName}</div>
              )}

              <label htmlFor="custAddress">Address</label>
              <input
                id="custAddress"
                name="custAddress"
                type="text"
                placeholder="Enter your Address"
                value={values.custAddress}
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.custAddress && touched.custAddress && "error"}
              />
              {errors.custAddress && touched.custAddress && (
                <div className="input-feedback">{errors.custAddress}</div>
              )}

              <label htmlFor="custPhone">Phone</label>
              <input
                id="custPhone"
                name="custPhone"
                type="text"
                placeholder="Enter your Phone number"
                value={values.custPhone}
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.custPhone && touched.custPhone && "error"}
              />
              {errors.custPhone && touched.custPhone && (
                <div className="input-feedback">{errors.custPhone}</div>
              )}

              <label htmlFor="custEmail">Email</label>
              <input
                id="custEmail"
                name="custEmail"
                type="text"
                placeholder="Enter your email"
                value={values.custEmail}
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.custEmail && touched.custEmail && "error"}
              />
              {errors.custEmail && touched.custEmail && (
                <div className="input-feedback">{errors.custEmail}</div>
              )}

              <label htmlFor="custPassword">Password</label>
              <input
                id="custPassword"
                name="custPassword"
                type="password"
                placeholder="Enter your password"
                value={values.custPassword}
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.custPassword && touched.custPassword && "error"}
              />
              {errors.custPassword && touched.custPassword && (
                <div className="input-feedback">{errors.custPassword}</div>
              )}

              <label htmlFor="confirm_password">Confirm Password</label>
              <input
                id="confirm_password"
                name="confirm_password"
                type="password"
                placeholder="Confirm your password"
                value={values.confirm_password}
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.confirm_password && touched.confirm_password && "error"}
              />
              {errors.confirm_password && touched.confirm_password && (
                <div className="input-feedback">{errors.confirm_password}</div>
              )}

            <label htmlFor="cardHolder">Are you a CardHolder</label>
              <input
                id="cardHolder"
                name="cardHolder"
                type="text"
                placeholder="true/false"
                value={values.cardHolder}
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.cardHolder && touched.cardHolder && "error"}
              />
              {errors.cardHolder && touched.cardHolder && (
                <div className="input-feedback">{errors.cardHolder}</div>
            )}

              <div className="button-group">
                <button className="btnRegister btnSignIn" type="button" onClick={handleLogin}>Sign In</button>
                <button className="btnRegister" type="submit" disabled={isSubmitting}>Submit</button>
              </div>
              
            </form>
          </div>
        )}
      </Formik>
    </div>
  );
}

export default SignUp