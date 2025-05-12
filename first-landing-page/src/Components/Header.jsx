

const Header = (props) => {
    return (
        <header className='bg-color'>
            <div className="container">
                <div className="d-flex py-3 justify-content-between">
                    <div className="fw-bold fs-1 d-flex align-items-center">
                        <svg className="text-primary-500 stroke-current mr-1" xmlns="http://www.w3.org/2000/svg" width={44} height={44} viewBox="0 0 24 24" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M0 0h24v24H0z" stroke="none" /><rect x={3} y={12} width={6} height={8} rx={1} /><rect x={9} y={8} width={6} height={12} rx={1} /><rect x={15} y={4} width={6} height={16} rx={1} /><path d="M4 20h14" /></svg>
                        <span className="">{props.name}</span>
                    </div>

                    <div className="d-flex align-items-center  fs-5 gap-5">
                       <div>{props.menu1}</div>
                       <div>{props.menu2}</div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header