import React from 'react'

export default function Input({ label, textarea, ...props }) {
    const classes='border-stone-300 w-full p-1 border-b-2 rounded-sm bg-stone-200 text-store-600 focus:outline-none focus:border-store-600'
    return (

        <p className='flex flex-col gap-1 my-4'>
            <label className='text-sm font-blod uppercase text-stone-500' htmlFor=" ">{label}</label>
            {textarea ? <textarea className={classes} {...props} /> : <input className={classes} {...props} />}
        </p>

    )
}
