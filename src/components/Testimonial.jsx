import React from 'react'

export const Testimonial = (props) => {

    let heading = props.heading
    let subHeading = props.subHeading
    let path = props.path
    let name = props.name
    let desig = props.desig

    return (
        <figure className="grid grid-cols-2 space-x-3 p-6 bg-slate-100 rounded-lg outline-4 outline-yellow-400 outline-offset-2">
            <img className=""
             src={path} alt="" width="384" height="512"/>
            <div className="">
                <blockquote>
                <p className="text-lg font-medium">{subHeading}
                </p>
                </blockquote>
                <figcaption className="font-medium">
                <h3 className="text-sky-500 dark:text-sky-400">
                    {name}
                </h3>
                <div className="text-slate-700 dark:text-slate-500">
                    {desig}
                </div>
                </figcaption>
            </div>
        </figure>
  )
}
