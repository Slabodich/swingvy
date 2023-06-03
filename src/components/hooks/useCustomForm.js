import React from "react";
import { useFormik } from "formik";
import { object, string, array } from "yup";

const UseCustomForm = () => {

  const validNumb = (val) => {
    const lengthWithoutDashes = val.replace(/-|_/g, "").length;
    return lengthWithoutDashes === 14;
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      specialization: "",
      document: "",
      city: "",
      aboutMe: "",
      workNumber: "",
      workEmail: "",
      opinionCheckBtn: [],
    },

    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      formik.resetForm();
    },
    validationSchema: object().shape({
      name: string().required("Это обязательное поле"),
      specialization: string().required("Это обязательное поле"),
      document: string().required("Это обязательное поле"),
      city: string().required("Это обязательное поле"),
      aboutMe: string().required("Это обязательное поле"),
      workNumber: string()
          .test("len", "Неправильно введен номер", validNumb)
          .required("Это обязательное поле"),
      workEmail: string()
          .email("Email введен не корректно")
          .required("Это обязательное поле"),
      opinionCheckBtn: array()
          .min(1, "Выберите хотя бы один интересующий вас вариант")
          .required(),
    }),
  });
  return formik;
};

export default UseCustomForm;