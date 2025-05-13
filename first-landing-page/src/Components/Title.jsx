import React from 'react'

const Title = (props) => {
    return (
        <section>
      

            <div className='container py-5'>
                <div className="row justify-content-between align-items-center">
                    <div className="col-md-6">
                        {props.left}
                    </div>
                    <div className="col-md-6">
                        {props.right}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Title