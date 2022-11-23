import React, { useState } from "react";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axiosClient from "../../utils/axiosClient";
import { Formik, Form, Field, ErrorMessage } from "formik";

const notify = () =>
    toast.success("Mesajınız İletildi!", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
const notify_error = () =>
    toast.error("Mesajınız İletilemedi!", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });

function ContactMeForm() {
    const validate = Yup.object({
        name: Yup.string()
            .max(15, "Fazla karakter girdiniz.")
            .required("Gerekli alan"),
        mail: Yup.string().email("Geçersiz adres.").required("Gerekli alan"),
        subject: Yup.string()
            .max(20, "Fazla karakter girdiniz.")
            .required("Gerekli alan"),
        message: Yup.string()
            .max(200, "Fazla karakter girdiniz.")
            .required("Gerekli alan"),
    });

    return (
        <Formik
            initialValues={{
                name: "",
                mail: "",
                subject: "",
                message: "",
            }}
            onSubmit={async (values, { resetForm }) => {
                await axiosClient
                    .post("/api/contact", values)
                    .then(() => {
                        notify();
                        resetForm({ values: "" });
                    })
                    .catch(() => {
                        notify_error();
                    });
            }}
            validationSchema={validate}
        >
            {({ errors, touched, isSubmitting }) => (
                <Form>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="form-group">
                                <Field
                                    style={{ background: "#f0f6ffa6" }}
                                    type="text"
                                    className={`form-control form-control-lg ${
                                        errors.name &&
                                        touched.name &&
                                        "border border-danger"
                                    }`}
                                    name="name"
                                    placeholder="Ad Soyad"
                                />
                                <ErrorMessage
                                    component="div"
                                    className="text-danger"
                                    name="name"
                                />
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="form-group">
                                <Field
                                    style={{ background: "#f0f6ffa6" }}
                                    type="email"
                                    className={`form-control form-control-lg ${
                                        errors.mail &&
                                        touched.mail &&
                                        "border border-danger"
                                    }`}
                                    name="mail"
                                    placeholder="E-posta"
                                />
                                <ErrorMessage
                                    component="div"
                                    className="text-danger"
                                    name="mail"
                                />
                            </div>
                        </div>

                        <div className="col-lg-12">
                            <div className="form-group">
                                <Field
                                    style={{ background: "#f0f6ffa6" }}
                                    type="text"
                                    className={`form-control form-control-lg ${
                                        errors.subject &&
                                        touched.subject &&
                                        "border border-danger"
                                    }`}
                                    name="subject"
                                    placeholder="Konu"
                                />
                                <ErrorMessage
                                    component="div"
                                    className="text-danger"
                                    name="subject"
                                />
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="form-group">
                                <Field
                                    style={{ background: "#f0f6ffa6" }}
                                    as="textarea"
                                    className={`form-control ${
                                        errors.message &&
                                        touched.message &&
                                        "border border-danger"
                                    }`}
                                    name="message"
                                    placeholder="Mesajınız"
                                ></Field>
                                <ErrorMessage
                                    component="div"
                                    className="text-danger"
                                    name="message"
                                />
                            </div>
                        </div>
                        <div className="col-lg-12 mx-auto ">
                            <button
                                className="rn-btn edu-btn"
                                disabled={isSubmitting}
                                type="submit"
                            >
                                <span>Gönder</span>
                            </button>
                        </div>
                    </div>
                    <ToastContainer
                        position="bottom-right"
                        autoClose={5000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                    />
                </Form>
            )}
        </Formik>
    );
}
export default ContactMeForm;
