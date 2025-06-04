const Title = (props) => {
  return (
    <>
      <div className="section-title position-relative">
        <h2 className="text-center fw-bold mb-3 pb-3">{props.main}</h2>
      </div>
      <p className="text-center">{props.sub}</p>
    </>
  )
}

export default Title