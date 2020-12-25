import React from "react";
import style from "./FormsControls.module.css"
import {Field} from "redux-form";
import {required} from "../../../utils/validators";

export const Textarea = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={style.formControl + ' ' + (hasError ? style.error : '')}>
            <div>
                <textarea {...input} {...props} />
            </div>
            <div>
                {hasError && <span>{meta.error}</span>}
            </div>
        </div>
    )
};

export const Input = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={style.formControl + ' ' + (hasError ? style.error : '')}>
            <div>
                <input {...input} {...props} />
            </div>
            <div>
                {hasError && <span>{meta.error}</span>}
            </div>
        </div>
    )
};

export const createField = (placeholder, name, validate, component, props = {}, text = '') => {
    return (
        <div>
            <Field
                placeholder={placeholder}
                name={name}
                validate={validate}
                component={component}
                {...props}
            /> {text}
        </div>
    )
};


