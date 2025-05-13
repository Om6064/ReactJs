import { useState } from "react"

const Faq = (props) => {
    const [showAnswer1, setShowAnswer1] = useState(false);
    const [showAnswer2, setShowAnswer2] = useState(false);
    const [showAnswer3, setShowAnswer3] = useState(false);

    // Step 2: Create answer variables
    let answer1;
    if (showAnswer1 === true) {
        answer1 = (
            <p style={{ fontSize: '18px', color: 'gray' }}>
                Frenk AI is an artificial intelligence tool that helps automate tasks.
            </p>
        );
    }

    let answer2;
    if (showAnswer2 === true) {
        answer2 = (
            <p style={{ fontSize: '18px', color: 'gray' }}>
                Frenk AI uses machine learning to understand data and provide smart suggestions.
            </p>
        );
    }

    let answer3;
    if (showAnswer3 === true) {
        answer3 = (
            <p style={{ fontSize: '18px', color: 'gray' }}>
                Yes, Frenk AI has a free plan with basic features. Premium plans offer more options.
            </p>
        );
    }
    return (
        <section>
            <div className="container">
                <h2 className="text-center fs-1">FaQ</h2>
                <p className='mb-5 pb-5 text-center fs-2'>Your Qustion Answer Here</p>

                <div className="d-flex">
                    <div className="col-2">
                        <ul className="text-decoration-none list-unstyled">
                            <li className="hover active">Genral</li>
                            <li className="hover">Bulid</li>
                            <li className="hover">Promote</li>
                            <li className="hover">Manage</li>
                            <li className="hover">Intergration</li>
                            <li className="hover">Legal</li>
                        </ul>
                    </div>
                    <div className="col-10">
                        <i className="fa-solid fa-bars text fs-2" />
                        <span className="ms-3 fs-2"> Genral Qustions</span>

                        <div className="d-flex mt-5 fs-3 justify-content-between align-items-center ">
                            <p className="m-0" onClick={() => setShowAnswer1(!showAnswer1)}>{props.q1}</p>
                            <i class="fa-solid fa-caret-down"></i>
                        </div>
                        <p className="mt-2">{answer1}</p>



                        <div className="d-flex mt-5 fs-3 justify-content-between align-items-center ">
                            <p className="m-0" onClick={() => setShowAnswer2(!showAnswer2)}>How does Frenk AI work?</p>
                            <i class="fa-solid fa-caret-down"></i>
                        </div>
                        <p className="mt-2">{answer2}</p>



                        <div className="d-flex mt-5 fs-3 justify-content-between align-items-center ">
                            <p className="m-0" onClick={() => setShowAnswer3(!showAnswer3)}>Is Frenk AI free to use?</p>
                            <i class="fa-solid fa-caret-down"></i>
                        </div>
                        <p className="mt-2">{answer3}</p>


                    </div>
                </div>




            </div>

        </section>
    )
}

export default Faq