import React, {ChangeEvent} from 'react';
import {FilterType, ScheduleArrType} from "../App";

export type PropsType = {
    scheduleList: ScheduleArrType
    filterItemHandler: (filter: FilterType) => void
    deleteItemHandler: (id: string) => void
    changeItemStatus: (id: string, newIsDone: boolean) => void

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
                    function onchangeHandler(event: ChangeEvent<HTMLInputElement>) {
                        props.changeItemStatus(item.id, event.currentTarget.checked)
                    }

                    return <li key={item.id}>
                        <label>
                            <input type="checkbox"
                                   checked={item.isDone}
                                   onChange={onchangeHandler}
                            />
                            <span>{item.item}</span>
                        </label>
                        <button type='button' onClick={() => {
                            deleteClickHandler(item.id)
                        }}>
                            Move to Trash
                        </button>
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
