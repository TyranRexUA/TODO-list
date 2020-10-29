import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { getTasks, createTask, deleteTask, changeTask } from '../../redux/tasksReducer';
import CreateModeWindow from '../CreateModeWindow/CreateModeWindow';
import Task from '../Task/Task';
import s from './TasksList.module.scss'

const TasksList = ({ tasks, getTasks, createTask, deleteTask, changeTask }) => {
    let [createMode, setCreateMode] = useState(false)

    useEffect(() => {
        getTasks();
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();
        createTask(e.target.elements.text.value);
        e.target.reset();
    }

    const handleReset = (e) => {
        document.body.classList.remove('lock')
        setCreateMode(false);
    }

    return (
        <>
            <div className={s.TasksList}>

                <div className={s.TasksList__container}>
                    {tasks && tasks.map(task => <Task key={task.id} id={task.id} text={task.text} done={task.done} deleteTask={deleteTask} changeTask={changeTask} />)}
                </div>

                <div className={s.TasksList__btnGroup}>

                    <div className={s.addTask}
                        onClick={() => {
                            setCreateMode(true)
                            document.body.classList.add('lock')
                        }}
                    />

                    <div className={s.clearLocalStorage}
                        onClick={() => {
                            localStorage.clear();
                            getTasks();
                        }}
                    />
                </div>

            </div>

            {createMode &&
                <CreateModeWindow handleSubmit={handleSubmit} handleReset={handleReset} />
            }
        </>
    )
}

const mapStateToProps = (state) => ({
    tasks: state.tasks,
});

export default connect(mapStateToProps, { getTasks, createTask, deleteTask, changeTask })(React.memo(TasksList))