

const HeroSec = (props) => {


    return (
        <div className="container">
            <section className="p-t-100">
                <div className="row gy-5">
                    <div className="col-md-6">
                        {props.left}
                    </div>
                    <div className="col-md-6">
                        {props.right}
                    </div>
                </div>
            </section>
            <div className="mt-3">
                <div className="row justify-content-between">
                    {props.sub}
                </div>
            </div>
        </div>
    );
};

export default HeroSec;
