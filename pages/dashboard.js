import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import data from '../data/bioData.json'

const dashboard = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const tempDataName = data.map((item) => item.name.toLowerCase());
  const [reqBool, setReqBool] = useState(true);
  const [errorToast, setErrorToast] = useState(true);

  const handleNameChange = (e) => {
    if (tempDataName.includes(e.target.value.toLowerCase())) {
      setReqBool(false);
    } else {
      setReqBool(true);
    }
  }

  const onSubmit = (data) => {
    data && fetch("/api/saveBioData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  };

  useEffect(() => {
    if (errors.name) {
      setErrorToast(true);
    }
    setTimeout(() => {
      setErrorToast(false)
    }, 3000)
  }, [errors])


  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-3 my-6">
      <div className='space-y-2'>

        <input className='py-3 px-3 border border-rose-500 rounded-md md:w-1/3 mx-2'
          {...register("name",
            { required: true })}
          type="text" placeholder='Name' name='name' onChange={(e) => handleNameChange(e)} />

        {/* <input className='py-3 px-3 border border-rose-500 rounded-md md:w-1/3 mx-2'
          {...register("profession",
            { required: reqBool })}
          type="text" placeholder='Profession' name='profession' /> */}

      </div>
      {/* <div className='space-y-2'>

        <input className='py-3 px-3 border border-rose-500 rounded-md md:w-1/3 mx-2'
          {...register("origin",
            { required: reqBool })}
          type="text" placeholder='Origin' name='origin' />

        <input className='py-3 px-3 border border-rose-500 rounded-md md:w-1/3 mx-2'
          {...register("image",
            { required: reqBool })}
          type="text" placeholder='Image' name='image' />

      </div>
      <div className='space-y-2'>

        <textarea className='py-3 px-3 border border-rose-500 rounded-md md:w-1/3 mx-2'
          {...register("bio",
            { required: reqBool })}
          name="bio" placeholder='Short Bio' rows="10"></textarea>

        <textarea className='py-3 px-3 border border-rose-500 rounded-md md:w-1/3 mx-2'
          {...register("briefBio",
            { required: reqBool })}
          name="briefBio" placeholder='brief Bio' rows="10"></textarea>


      </div> */}
      <textarea className='py-3 px-3 border border-rose-500 rounded-md md:w-1/3 mx-2'
        {...register("funfacts",
          { required: reqBool })}
        name="funfacts" placeholder='funfacts' rows="10"></textarea>
      <button type='submit' className='py-3 px-5 w-fit bg-blue-400 mx-2 rounded-md text-white font-semibold'>
        Submit
      </button>

      <div>
        {errors.length > 0 && errorToast && <span className='text-white absolute right-4 top-28 bg-red-500 py-2 px-3'>This field is required</span>}
      </div>
    </form>
  )
}

export default dashboard