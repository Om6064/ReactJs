import React from 'react'

const Button = (props) => {
  return (
    <div>
        <button className={`p-4 btn btn-${props.bgColor} text-${props.textColor} fw-${props.fontweight} fs-${props.fontsize}`}>Download Your Free Theme</button>
    </div>
  )
}

export default Button