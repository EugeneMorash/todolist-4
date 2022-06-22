import React, {ChangeEvent} from 'react';
import {FilterType, ScheduleArrType} from "../App";

export type PropsType = {
    scheduleList: ScheduleArrType
    filterItemHandler: (filter: FilterType) => void

    deleteItemHandler: (id: string) => void
    deleteItemHandler2: (id: string) => void

    changeItemStatus: (id: string, newIsDone: boolean) => void
    changeItemStatus2: (id: string, newIsDone: boolean) => void

}

export function Todolist(props: PropsType) {

    const onAllClickHandler = () => {
        return (
            props.filterItemHandler('all')
        )
    }
    const onActiveClickHandler = () => {
        return (
            props.filterItemHandler('active')
        )
    }
    const onDoneClickHandler = () => {
        return (
            props.filterItemHandler('done')
        )
    }

    const deleteClickHandler = (id: string) => {
        props.deleteItemHandler(id)
    }

    return (
        <div>
            <ul>
                {props.scheduleList.map((item) => {

                    const onchangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
                        props.changeItemStatus(item.id, event.currentTarget.checked)
                    }

                    const onClickDeleteHandler = () => {
                        props.deleteItemHandler2(item.id)
                    }

                    const onchangeHandler2 = (event: ChangeEvent<HTMLInputElement>) => {
                        props.changeItemStatus2(item.id, event.currentTarget.checked)
                    }

                    return <li key={item.id}>
                        <label>
                            <input type="checkbox"
                                   checked={item.isDone}
                                   onChange={onchangeHandler}
                            />
                            <input type="checkbox" checked={item.isDone} onChange={onchangeHandler2}/>
                            <span>{item.item}</span>
                        </label>
                        <button type='button'
                                onClick={() => {
                            deleteClickHandler(item.id)
                        }}
                                title={'Delete'}
                        >
                            Move to Trash
                        </button>
                        <button type='button' onClick={onClickDeleteHandler}>Delete!</button>
                    </li>
                })}
            </ul>
            <div>
                <button type='button' onClick={onAllClickHandler}>All</button>
                <button type='button' onClick={onActiveClickHandler}>Active</button>
                <button type='button' onClick={onDoneClickHandler}>Done</button>
            </div>
        </div>
    );
}
