import React, { useRef, useEffect } from 'react';
import s from './CreateModeWindow.module.scss'

const CreateModeWindow = ({ handleSubmit, handleReset }) => {
    const textarea = useRef(null);
    useEffect(() => {
        textarea.current.focus();
    }, [])

    return (
        <div className={s.CreateModeWindow}>
            <form onSubmit={handleSubmit} onReset={handleReset}>
                <textarea name="text" cols="30" rows="10" ref={textarea}/>
                <div className={s.btnGroup}>
                    <button className={s.submitBtn} type="submit" />
                    <button className={s.closeBtn} type="reset" />
                </div>
            </form>
        </div>
    )
};

export default CreateModeWindow;