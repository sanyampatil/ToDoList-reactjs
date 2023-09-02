"use client"
import { Kings } from 'next/font/google';
import React, { useState } from 'react'

const page = () => {
  const [title, settitle] = useState("")
  const [desc, setdesc] = useState("");
  const [MainTask, setMainTask] = useState("");
  const submitHandler = (e) => {
    // console.log("hiii")
    e.preventDefault()
    setMainTask([...MainTask, { title, desc }])
    settitle("")
    setdesc("")
    console.log(MainTask)


  }

  const deleteHandler = (i) => {
    let copyTask = [...MainTask]
    copyTask.splice(i, 1)
    setMainTask(copyTask)
  }

  let renderTask = <h2>No Task Available</h2>
  if (MainTask.length > 0) {

    renderTask = MainTask.map((t, i) => {
      return (
        <ul>
        <li className='flex item-center justify-between mt-5 border-2 border-gray-400 rounded  p-4'>
          <div className=' mb-5 w-2/3'>



            <h2 className='text-2xl font-semibold'>{t.title}</h2>
            <h4 className='text-xl '>{t.desc}</h4>
            {/* <h3 className=''>{t.desc}</h3> */}
          </div>
          <button onClick={() => {
            deleteHandler();
          }} className='bg-red-600 text-white rounded-2xl py-1 px-2 text-xl'>Delete</button>

        </li>
        </ul>
      )

    }
    )

  }
  return (
    <>
      <h1 className='font-bold bg-black p-5 text-4xl text-center text-white '>MyToDoList</h1>
      <form action="" onSubmit={submitHandler}>
        <input type="text"
          className='border-2 border-black  p-4 m-5 rounded text-xl' placeholder='Enter the title '
          value={title}
          onChange={(e) => {
            settitle(e.target.value)
          }} />

        <input type="text"
          className='border-2 border-black  p-4 m-5 rounded text-xl' placeholder='Enter the description  ' value={desc} onChange={(e) => {
            setdesc(e.target.value)
          }} />
        <button
          onClick={() => {
            submitHandler();
          }} className='p-4 m-4 bg-black text-white rounded py-3 px-4 text-2xl'

        >Submit</button>
        <hr />
        <ul className='p-8 bg-slate-200'>
          {renderTask}
        </ul>


      </form>

    </>
  )
}
export default page
