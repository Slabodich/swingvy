import React, {Component} from "react";
import styles from "./Profile.module.css";
import {useFormik} from "formik";
import Input from "../../ui/Input/Input";
import CustomSelect from "../../ui/CustomSelect/CustomSelect";
import TextArea from "../../ui/TextArea/TextArea";
import {object, string, array} from "yup";
import CheckBox from "../../ui/CheckBox/CheckBox";
import RadioButton from "../../ui/RadioButton/RadioButton";
import Button from "../../ui/Button/Button";
import cnBind from "classnames/bind";

const Profile = () => {
    const cx = cnBind.bind(styles);
    const validNumb = (val) => {
        const lengthWithoutDashes = val.replace(/-|_/g, "").length;
        return lengthWithoutDashes === 14;
    };
    const reset = () => {
        // formik.handleReset()
        document.getElementById("de").checked = false
    };

    const formik = useFormik({
        initialValues: {
            name: "",
            specialization: "",
            document: "",
            city: "",
            aboutMe: "",
            workNumber: "",
            workNumberForward: "",
            mobileNumber: "",
            Fax: "",
            homeNumber: "",
            workEmail: "",
            personalEmail: "",
            opinionCheckBtn: [],
            radio: "",
            comment: "",
        },

        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
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
            workNumberForward: string()
                .test("len", "Неправильно введен номер", validNumb)
                .required("Это обязательное поле"),
            mobileNumber: string()
                .test("len", "Неправильно введен номер", validNumb)
                .required("Это обязательное поле"),
            Fax: string()
                .test("len", "Неправильно введен номер", validNumb)
                .required("Это обязательное поле"),
            homeNumber: string()
                .test("len", "Неправильно введен номер", validNumb)
                .required("Это обязательное поле"),
            workEmail: string()
                .email("Email введен не корректно")
                .required("Это обязательное поле"),
            personalEmail: string()
                .email("Email введен не корректно")
                .required("Это обязательное поле"),
            opinionCheckBtn: array()
                .min(1, "Выберите хотя бы один интересующий вас вариант")

                .required(),
            radio: string().required("Выберите что нибудь"),
            comment: string().required("Это обязательное поле"),
        }),
    });
    const optionsForSpecial = [
        {value: "layuoutDesigner", label: "Верстальщик"},
        {value: "fronEnd", label: "fronEnd"},
        {value: "backEnd", label: "backEnd"},
    ];
    const optionsForDocument = [
        {value: "doc1", label: "Документ1"},
        {value: "doc2", label: "Документ2"},
        {value: "doc3", label: "Документ3"},
    ];
    const handleReset = (formik) => {
        formik.setTouched({});
        formik.resetForm();
        formik.setFieldValue('opinionCheckBtn', []); // Сброс значений флажков
        formik.setFieldValue('specialization', '');

    };
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
                                id={"workNumberForward"}
                                name={"workNumberForward"}
                                type={"workNumberForward"}
                                mask="+7 999 999-99-99"
                                onChange={formik.handleChange}
                                value={formik.values.workNumberForward}
                                lable={"Раб.прямой"}
                                placeholder={"+7"}
                                errors={formik.errors.workNumberForward}
                                touched={formik.touched.workNumberForward}
                                onBlur={formik.handleBlur}
                            />

                            <Input
                                id={"mobileNumber"}
                                name={"mobileNumber"}
                                type={"mobileNumber"}
                                mask="+7 999 999-99-99"
                                onChange={formik.handleChange}
                                value={formik.values.mobileNumber}
                                lable={"Мобильный"}
                                placeholder={"..."}
                                errors={formik.errors.mobileNumber}
                                touched={formik.touched.mobileNumber}
                                onBlur={formik.handleBlur}
                            />
                            <Input
                                id={"Fax"}
                                name={"Fax"}
                                type={"Fax"}
                                mask="+7 999 999-99-99"
                                onChange={formik.handleChange}
                                value={formik.values.Fax}
                                lable={"Факс"}
                                placeholder={"..."}
                                errors={formik.errors.Fax}
                                touched={formik.touched.Fax}
                                onBlur={formik.handleBlur}
                            />
                            <Input
                                id={"homeNumber"}
                                name={"homeNumber"}
                                type={"homeNumber"}
                                mask="+7 999 999-99-99"
                                onChange={formik.handleChange}
                                value={formik.values.homeNumber}
                                lable={"Домашний"}
                                placeholder={"..."}
                                errors={formik.errors.homeNumber}
                                touched={formik.touched.homeNumber}
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
                            />
                            <Input
                                id={"personalEmail"}
                                name={"personalEmail"}
                                type={"personalEmail"}
                                onChange={formik.handleChange}
                                value={formik.values.personalEmail}
                                lable={"Email личн."}
                                placeholder={"..."}
                                touched={formik.touched.personalEmail}
                                errors={formik.errors.personalEmail}
                                lastContact={true}
                            />
                        </div>
                        <div className={cx("blockSubmit")}>
                            <h2 className={styles.titleContent}>Моё мнение о чекбоксах</h2>
                            <CheckBox
                                name={"opinionCheckBtn"}
                                disabled={"disabled"}
                                checked={"checked"}
                                value={"Не активен, выбран"}
                                onChange={formik.handleChange}
                            />
                            <CheckBox

                                name={"opinionCheckBtn"}
                                value={"Не активен, не выбран"}
                                disabled={"disabled"}
                                checked={formik.values.opinionCheckBtn.includes('Не активен, не выбран')}
                                onChange={formik.handleChange}
                            />
                            <CheckBox name={"opinionCheckBtn"} value={"Я люблю чекбоксы"}
                                      checked={formik.values.opinionCheckBtn.includes('Я люблю чекбоксы')}
                                      onChange={formik.handleChange}/>
                            <CheckBox
                                name={"opinionCheckBtn"}
                                value={"Я ненавижу чекбоксы"}
                                lastcheckBox={true}
                                checked={formik.values.opinionCheckBtn.includes('Я ненавижу чекбоксы')}
                                onChange={formik.handleChange}
                            />
                            {formik.errors.opinionCheckBtn &&
                                formik.touched.opinionCheckBtn && (
                                    <div className={styles.error}>
                                        {formik.errors.opinionCheckBtn}
                                    </div>
                                )}
                        </div>
                        <div className={styles.blockSubmit}>
                            <h2 className={styles.titleContent}>
                                Мое мнение о радио-кнопках
                            </h2>
                            <div
                                role="group"
                                aria-labelledby="my-radio-group"
                                onChange={formik.handleChange}
                            >
                                <RadioButton
                                    lable={"Не активен, выбран"}
                                    disabled={"disabled"}
                                    checked={"checked"}
                                    value={"Не активен, выбран"}
                                    name={"radio"}
                                    onChange={formik.handleChange}
                                />
                                <RadioButton
                                    name={"radio"}
                                    lable={"Неактивна, не выбрана"}
                                    disabled={"disabled"}
                                    value={"Неактивна, не выбрана"}
                                    onChange={formik.handleChange}
                                    checked={formik.values.radio === 'Неактивна, не выбрана'}
                                />
                                <RadioButton
                                    lable={"Я люблю радио-кнопки"}
                                    value={"Я люблю радио-кнопки"}
                                    name={"radio"}
                                    onChange={formik.handleChange}
                                    checked={formik.values.radio === 'Я люблю радио-кнопки'}
                                />
                                <RadioButton
                                    lable={"Я ненавижу радио-кнопки"}
                                    value={"Я ненавижу радио-кнопки"}
                                    name={"radio"}
                                    onChange={formik.handleChange}
                                    checked={formik.values.radio === 'Я ненавижу радио-кнопки'}
                                />
                                {formik.errors.radio && formik.touched.radio && (
                                    <div className={styles.error}>{formik.errors.radio}</div>
                                )}
                            </div>
                            <TextArea
                                id={"comment"}
                                name={"comment"}
                                onChange={formik.handleChange}
                                value={formik.values.comment}
                                lable={"Комментарий"}
                                errors={formik.errors.comment}
                                touched={formik.touched.comment}
                            />
                        </div>
                        <div className={styles.wrapperBtn}>
                            <Button save={true} type="submit">
                                Сохранить
                            </Button>
                            <Button cancel={true} onClick={() => handleReset(formik )}>
                                Отменить
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
            <div className={styles.sideBar}>
                <span className={styles.a}>Избранное</span>
                <span>Моя компания</span>
                <span>Моё развитие</span>
                <span>Новости компании</span>
                <span>Телефонная книга</span>
            </div>
        </div>
    );
};

export default Profile;
