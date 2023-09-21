import React from 'react'
import { useState } from 'react'
import ButtonComp from './components/ButtonComp';
import { useDispatch, useSelector } from 'react-redux';
import { increase } from "./Redux/NumSlice"
import { Link } from 'react-router-dom';
import { studentsInfo } from './info';


const EventAssignment = () => {
    const dispatch = useDispatch();

    const { num } = useSelector((state) => state.globalNum.num)
    const [initial, setinitial] = useState(0);
    const [tpage, settpage] = useState(3)
    const increaseState = () => {
        console.log("Hello");
        dispatch(increase())
    }
   
    const [allStudents, setallStudents] = useState(studentsInfo.slice(initial, tpage))
    const displayAllstudents = () => {
        setallStudents(studentsInfo)
    }
    const showValidated = () => {
        const validated = allStudents.filter((element) => element.validated)
        setallStudents(validated)
    }
    const showUnValidated = () => {
        const unvalidated = allStudents.filter((element) => !element.validated)
        setallStudents(unvalidated)

    }

    const paginateNext = () => {
        let paginated = studentsInfo.slice(initial + 3, tpage + 3)
        setallStudents(paginated)
        setinitial(initial + 3)
        settpage(tpage + 3)
        // console.log(initial);
    }
    const paginatePrev = () => {

    }
    return (
        <>
            <h1>Global num is {num}</h1>
            <button onClick={increaseState}>Increase Global State</button>
            <div className='flex mb-5 ml-9'>
                <button onClick={displayAllstudents} className='bg-green-600 rounded p-2 mr-3'>All Students</button>
                <button onClick={showValidated} className='bg-orange-600 rounded p-2 mr-3'>Validated</button>
                <button onClick={showUnValidated} className='bg-purple-600 rounded p-2'>Not Validated</button>
                <ButtonComp daniel="Click me" color="red" />
                <ButtonComp daniel="Click you" color="blue" />
                <ButtonComp daniel="Click this" color="yellow" />
            </div>
            <div class="relative overflow-x-auto">
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-white bg-teal-500 uppercase dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                S/N
                            </th>
                            <th scope="col" class="px-6 py-3">
                                NAME
                            </th>
                            <th scope="col" class="px-6 py-3">
                                CLASS
                            </th>
                            <th scope="col" class="px-6 py-3">
                                GENDER
                            </th>
                            <th scope="col" class="px-6 py-3">
                                STATUS
                            </th>
                        </tr>
                    </thead>
                    <tbody>

                        {allStudents.map((element, index) => (

                            <tr key={index} class="bg-blue-500 text-white font-sans font-bold border-b dark:bg-gray-800 dark:border-gray-700">
                                <td>{index + 1}</td>
                                <td>
                                    <Link to={`/assignment/${element.name}`}>
                                        {element.name}
                                    </Link>
                                </td>
                                <td>{element.class}</td>
                                <td>{element.gender}</td>
                                <td>{element.validated ? "validated" : "Not Validated"}</td>

                            </tr>
                        ))}
                    </tbody>

                </table>
                <button onClick={paginatePrev}>Prev</button>
                <button onClick={paginateNext}>Next</button>
            </div>

        </>
    )
}

export default EventAssignment