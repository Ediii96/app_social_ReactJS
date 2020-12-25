import React from "react";
import {Redirect} from "react-router-dom";
import {Field, reduxForm} from "redux-form";

import s from './Dialogs.module.css';

import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {Textarea} from "../common/FormsControls/FormsControls";

import {maxLengthCreator, required} from "../../utils/validators";

const maxLength100 = maxLengthCreator(100);

const AddMessagesForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={s.form}>
            <Field
                name='newMessageBody'
                component={Textarea}
                placeholder='Enter your message'
                validate={[required, maxLength100]}
            /><br/>
            <button>Add message</button>
        </form>
    )
}

const AddMessagesFormRedux = reduxForm({form: 'dialogsAddMessagesFormRedux'})(AddMessagesForm);

const Dialogs = (props) => {


    let messagesElements = props.dialogsPage.messages.map(m => <Message message={m.message}/>);
    let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem id={d.id} name={d.name}/>);

    let sendMessage = (values) => {
        props.sendMessage(values.newMessageBody);
    }

    if(!props.isAuth) return <Redirect to='/login' />

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>
                    {messagesElements}
                    <AddMessagesFormRedux onSubmit={sendMessage}/>
                </div>
            </div>
        </div>
    )

}

export default Dialogs;