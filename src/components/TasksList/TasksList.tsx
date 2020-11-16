import React, { useEffect, useState, memo } from 'react';
import { connect } from 'react-redux';
import { changeTask, createTask, deleteTask, getTasks } from '../../redux/tasksReducer';
import { stateType, taskType } from './../../types/types';
import CreateModeWindow from '../CreateModeWindow/CreateModeWindow';
import Task from '../Task/Task';
import s from './TasksList.module.scss';

interface mapStateToPropsType {
    tasks: Array<taskType>
}

interface mapDispatchToPropsType {
    getTasks: typeof getTasks
    createTask: (text: string) => void
    deleteTask: (id: string) => void
    changeTask: (id: string, text: string, done: boolean) => void
}

interface ownPropsType {
    
}

const TasksList: React.FC<mapStateToPropsType & mapDispatchToPropsType> = ({ tasks, getTasks, createTask, deleteTask, changeTask }) => {
    let [createMode, setCreateMode] = useState<boolean>(false)

    useEffect(() => {
        getTasks();
    }, [])

    const handleSubmit = (e: any) => {
        e.preventDefault();
        createTask(e.target.elements.text.value);
        e.target.reset();
    }

    const handleReset = () => {
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

const mapStateToProps = (state: stateType): mapStateToPropsType => ({
    tasks: state.tasks,
});

export default connect<mapStateToPropsType, mapDispatchToPropsType, ownPropsType, stateType>(mapStateToProps, { getTasks, createTask, deleteTask, changeTask })(memo(TasksList))