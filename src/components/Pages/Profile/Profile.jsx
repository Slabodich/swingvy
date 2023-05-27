import React, { Component } from "react";
import styles from "./Profile.module.css";
import { useFormik } from "formik";
import Input from "../../ui/Input/Input";
import CustomSelect from "../../ui/CustomSelect/CustomSelect";
import TextArea from "../../ui/TextArea/TextArea";
import { object, string, array } from "yup";
import CheckBox from "../../ui/CheckBox/CheckBox";
import Button from "../../ui/Button/Button";
import cnBind from "classnames/bind";
import SideBar from "../../ui/SideBar/SideBar";

const Profile = () => {
  const cx = cnBind.bind(styles);
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
  const optionsForSpecial = [
    { value: "layuoutDesigner", label: "Верстальщик" },
    { value: "fronEnd", label: "fronEnd" },
    { value: "backEnd", label: "backEnd" },
  ];
  const optionsForDocument = [
    { value: "doc1", label: "Документ1" },
    { value: "doc2", label: "Документ2" },
    { value: "doc3", label: "Документ3" },
  ];
  return (
    <div className={styles.profile}>
      <div className={styles.wrapperContent}>
        <h1 className={styles.title}>Редактировать профиль</h1>
        <div className={styles.content}>
          <form onSubmit={formik.handleSubmit}>
            <div className={[styles.blockSubmit]}>
              <h2 className={styles.titleContent}>Общее</h2>
              <div className={styles.wrapperUi}>
                <Input
                  id={"name"}
                  name={"name"}
                  type={"name"}
                  lable={"ФИО"}
                  placeholder={"Ваше ФИО"}
                  onChange={formik.handleChange}
                  value={formik.values.name}
                  errors={formik.errors.name}
                  touched={formik.touched.name}
                />
                <CustomSelect
                  options={optionsForSpecial}
                  value={formik.values.specialization}
                  onChange={(value) =>
                    formik.setFieldValue("specialization", value.value)
                  }
                  lable={"Специализация"}
                  errors={formik.errors.specialization}
                  touched={formik.touched.specialization}
                />
                <CustomSelect
                  options={optionsForDocument}
                  value={formik.values.document}
                  onChange={(value) =>
                    formik.setFieldValue("document", value.value)
                  }
                  lable={"Документ"}
                  errors={formik.errors.document}
                  touched={formik.touched.document}
                />
                <Input
                  id={"city"}
                  name={"city"}
                  type={"city"}
                  lable={"Город"}
                  placeholder={"Название города"}
                  onChange={formik.handleChange}
                  value={formik.values.city}
                  errors={formik.errors.city}
                  touched={formik.touched.city}
                />
                <TextArea
                  id={"aboutMe"}
                  name={"aboutMe"}
                  onChange={formik.handleChange}
                  value={formik.values.aboutMe}
                  lable={"О себе"}
                  errors={formik.errors.aboutMe}
                  touched={formik.touched.aboutMe}
                />
              </div>
            </div>
            <div className={styles.blockSubmit}>
              <h2 className={styles.titleContent}>Контакты</h2>
              <Input
                id={"workNumber"}
                name={"workNumber"}
                type={"workNumber"}
                mask="+7 999 999-99-99"
                onChange={formik.handleChange}
                value={formik.values.workNumber}
                lable={"Раб.тел"}
                placeholder={"..."}
                errors={formik.errors.workNumber}
                touched={formik.touched.workNumber}
                onBlur={formik.handleBlur}
              />
              <Input
                id={"workEmail"}
                name={"workEmail"}
                type={"workEmail"}
                onChange={formik.handleChange}
                value={formik.values.workEmail}
                lable={"Email раб."}
                placeholder={"..."}
                errors={formik.errors.workEmail}
                touched={formik.touched.workEmail}
                onBlur={formik.handleBlur}
              />
            </div>
            <div className={cx("blockSubmit")}>
              <h2 className={styles.titleContent}>Моё мнение о чекбоксах</h2>
              <div
                role="group"
                aria-labelledby="checkbox-group"
                onChange={formik.handleChange}
                value={formik.values.opinionCheckBtn}
              >
                <CheckBox
                  name={"opinionCheckBtn"}
                  disabled={"disabled"}
                  checked={"checked"}
                  value={"Неактивен, выбран"}
                />
                <CheckBox
                  name={"opinionCheckBtn"}
                  value={"Неактивен, не выбран"}
                  disabled={"disabled"}
                  checked={formik.values.opinionCheckBtn.includes(
                    "Не активен, не выбран"
                  )}
                />
                <CheckBox
                  name={"opinionCheckBtn"}
                  value={"Я люблю чекбоксы"}
                  checked={formik.values.opinionCheckBtn.includes(
                    "Я люблю чекбоксы"
                  )}
                />
                <CheckBox
                  name={"opinionCheckBtn"}
                  value={"Я ненавижу чекбоксы"}
                  lastcheckBox={true}
                  checked={formik.values.opinionCheckBtn.includes(
                    "Я ненавижу чекбоксы"
                  )}
                />
                {formik.errors.opinionCheckBtn &&
                  formik.touched.opinionCheckBtn && (
                    <div className={styles.error}>
                      {formik.errors.opinionCheckBtn}
                    </div>
                  )}
              </div>
            </div>
            <div className={styles.wrapperBtn}>
              <Button save={true} type="submit">
                Сохранить
              </Button>
              <Button cancel={true} onClick={formik.handleReset}>
                Отмена
              </Button>
            </div>
          </form>
        </div>
      </div>
      <SideBar />
    </div>
  );
};

export default Profile;
