import { useState } from "react"

export default function FilterToDo({ FilterActive }) {
    const [activeButton, setActiveButton] = useState("all")

    return(
        <>
            <div>

                <button className={`btn btn-sm me-2 ${ activeButton.toLowerCase() === 'all' ? 'btn-success' : 'btn-outline-success' }`}
                onClick={() => {
                    setActiveButton('all')
                    FilterActive('all')
                }}
                >All</button>
                
                <button className={`btn btn-sm me-2 ${ activeButton.toLowerCase() === 'active' ? 'btn-success' : 'btn-outline-success' }`}
                onClick={() => {
                    setActiveButton('active')
                    FilterActive('active')
                }}
                >Active</button>

                <button className={`btn btn-sm ${ activeButton.toLowerCase() === 'complete' ? 'btn-success' : 'btn-outline-success' }`}
                onClick={() => {
                    setActiveButton('complete')
                    FilterActive('complete')
                }}
                >Complete</button>

            </div>
        </>
    )
}