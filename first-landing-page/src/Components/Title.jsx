import React from 'react'

const Title = (props) => {
    return (
        <section>
      

            <div className='container py-5'>
                <div className="d-flex justify-content-between">
                    <div className="col-6">
                        {props.left}
                    </div>
                    <div className="col-6">
                        {props.right}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Title