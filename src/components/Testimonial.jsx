import React from 'react'

export const Testimonial = (props) => {

    let heading = props.heading
    let subHeading = props.subHeading
    let path = props.path
    let name = props.name
    let desig = props.desig

    return (
        <figure className="flex space-x-3 p-6 h-[20rem] bg-slate-100 rounded-lg 
        outline-4 outline-yellow-400 outline-offset-2 ">
            <img className="flex md:align-middle w-24 h-24 md:w-42 md:h-[50%] lg:w-48 lg:h-auto
             md:rounded-none rounded-full mx-auto"
             src={path} alt="" width="384" height="300"/>
            <article className="flex flex-col">
                <div className=" mb-6 overflow-y-scroll !scrollbar-thin !scrollbar-thumb-rounded-lg !scrollbar-thumb-orange-500">
                    <div className="mr-5"> 
                        <blockquote>
                            <q>
                                <p className="text-lg font-medium text-slate-800">{subHeading}
                                </p>
                            </q>
                        </blockquote>
                    </div>
                </div>
            <figcaption className="font-medium">
                <h3 className="text-orange-600 font-semibold text-lg">
                    {name}
                </h3>
                <div className="text-amber-600">
                    {desig}
                </div>
                </figcaption>
            </article>
        </figure>
  )
}
