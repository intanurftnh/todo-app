export default function FilterToDo({ filter, handleFilterChange }) {

    return(
        <>
        <div className="btn-group btn-group-sm" role="group" aria-label="Basic outlined example">
            <button
                className={`btn ${filter === 'all' ? 'btn-success' : 'btn-outline-success'}`}
                onClick={() => handleFilterChange('all')} style={{width: '80px'}}>All</button>
            <button 
                className={`btn ${filter === 'active' ? 'btn-success' : 'btn-outline-success'}`}
                onClick={() => handleFilterChange('active')} style={{width: '80px'}}>Active</button>
            <button
                className={`btn ${filter === 'complete' ? 'btn-success' : 'btn-outline-success'}`}
                onClick={() => handleFilterChange('complete')} style={{width: '80px'}}>Complete</button>
        </div>
 
        </>
    )
}