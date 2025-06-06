const SubAbout = (props) => {
    return (
        <>
            <div className="d-flex gap-3 pb-1">
                <div>
                    <i class="bi bi-check-circle-fill color-main fs-5"></i>
                </div>
                <div>
                    {props.title}
                </div>

            </div>
        </>
    )
}

export default SubAbout