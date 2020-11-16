import React, { useRef, useEffect } from 'react';
import s from './CreateModeWindow.module.scss'

interface propsType {
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void
    handleReset: () => void
}

const CreateModeWindow: React.FC<propsType> = ({ handleSubmit, handleReset }) => {
    const textarea = useRef<HTMLTextAreaElement>(null);
    useEffect(() => {
        if (textarea && textarea.current) textarea.current.focus();
    }, [])

    return (
        <div className={s.CreateModeWindow}>
            <form onSubmit={handleSubmit} onReset={handleReset}>
                <textarea name="text" cols={30} rows={10} ref={textarea}/>
                <div className={s.btnGroup}>
                    <button className={s.submitBtn} type="submit" />
                    <button className={s.closeBtn} type="reset" />
                </div>
            </form>
        </div>
    )
};

export default CreateModeWindow;