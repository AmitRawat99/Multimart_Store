import React from 'react'
import '../style/Title.scss'

function Title({title}) {
    return (
        <>
            <div className="title_section mt-5">
                <h1>{title}</h1>
            </div>
        </>
    )
}

export default Title
