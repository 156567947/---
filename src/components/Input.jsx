import React, { forwardRef } from 'react'

const Input = forwardRef(function Input({ label, textarea, ...props }, ref) {
    const classes = 'border-stone-300 w-full p-1 border-b-2 rounded-sm bg-stone-200 text-store-600 focus:outline-none focus:border-store-600'
    return (

        <p className='flex flex-col gap-1 my-4'>
            <label  className='text-sm font-blod uppercase text-stone-500' htmlFor=" ">{label}</label>
            {textarea ? <textarea ref={ref} className={classes} {...props} /> : <input ref={ref} className={classes} {...props} />}
        </p>

    )
})
export default Input
