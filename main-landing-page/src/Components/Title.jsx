const Title = (props) => {
  return (
    <div className={`text-${props.align}`}>
        <p className="text-main text-uppercase fw-semibold">{props.main}</p>
        <h2 className="font-36 ">{props.des}</h2>
        <p className="text-secondary">{props.subDes}</p>

    </div>
  )
}

export default Title