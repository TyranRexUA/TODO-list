import React from 'react';
import s from './Task.module.scss';
import cn from 'classnames';

interface propsType {
    done: boolean
    id: string
    text: string
    deleteTask: (id: string) => void
    changeTask: (id: string, text: string, done: boolean) => void
}


const Task: React.FC<propsType> = ({ done, id, text, deleteTask, changeTask }) => {
    return (
        <div className={cn(s.Task, {[s.Task_done]: done})}>

            <div className={s.Task__text} suppressContentEditableWarning contentEditable={!done}
                onBlur={e => changeTask(id, e.target.innerHTML, done)}
                dangerouslySetInnerHTML={{ __html: text }}
            />

            <div className={s.Task__btnGroup}>

                <label className={cn(s.checkBtn, s.btn)}>
                    <input
                        type="checkbox"
                        onChange={e => changeTask(id, text, e.target.checked)}
                    />
                </label>

                <div className={cn(s.deleteBtn, s.btn)} onClick={() => deleteTask(id)} />

            </div>

        </div>
    )
};

export default React.memo(Task);