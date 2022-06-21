import React, {useState} from 'react';
import './App.css';
import {v1} from "uuid";
import {Todolist} from "./components/Todolist";

export type ScheduleArrType = Array<ScheduleTaskType>
export type ScheduleTaskType = {
    id: string
    item: string
    isDone: boolean
}
export type FilterType = 'all' | 'active' | 'done'


function App() {

    const [schedule, setSchedule] = useState<ScheduleArrType>([
        {id: v1(), item: "Waking up", isDone: true},
        {id: v1(), item: "Exercise", isDone: false},
        {id: v1(), item: "Washing", isDone: false},
        {id: v1(), item: "Breakfast", isDone: true},
        {id: v1(), item: "Lazy time", isDone: true},
        {id: v1(), item: "Lunch", isDone: true},
        {id: v1(), item: "Horse racing", isDone: false},
        {id: v1(), item: "Afternoon tea", isDone: true},
        {id: v1(), item: "Snooker", isDone: true},
        {id: v1(), item: "Dinner", isDone: true},
        {id: v1(), item: "Cigar time", isDone: true},
        {id: v1(), item: "Washing", isDone: false},
        {id: v1(), item: "Putting to bed", isDone: true}
    ])


    // * ----------- active/done filter ------------- //
    const [filter, setFilter] = useState<FilterType>('all')
    const filterItemHandler = (filterName: FilterType) => {
        setFilter(filterName)
    }
    let scheduleList = schedule
    if (filter === 'active') {
        scheduleList = schedule.filter(item => !item.isDone)
    }
    if (filter === 'done') {
        scheduleList = schedule.filter(item => item.isDone)
    }
    // * ----------- active/done filter ------------- //


    // * ----------- delete filter ------------- //
    const deleteItemHandler = (id: string) => {
        setSchedule(schedule.filter(item => item.id !== id))
    }
    // * ----------- delete filter ------------- //

    // * ----------- checkbox activate ------------- //
    const changeItemStatus = (id: string, newIsDone: boolean) => {
        setSchedule(
            schedule.map((item) => {
                    return (
                        item.id === id ? {...item, isDone: newIsDone} : item
                    )
                }
            )
        )
    }
    // * ----------- checkbox activate ------------- //


    return (
        <div>
            <Todolist filterItemHandler={filterItemHandler}
                      scheduleList={scheduleList}
                      deleteItemHandler={deleteItemHandler}
                      changeItemStatus={changeItemStatus}
            />
        </div>
    );
}

export default App;
