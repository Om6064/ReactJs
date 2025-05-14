import { useState } from "react";

const Faq = (props) => {
  const [showAnswer1, setShowAnswer1] = useState(false);
  const [showAnswer2, setShowAnswer2] = useState(false);
  const [showAnswer3, setShowAnswer3] = useState(false);
  const [showBuiltQuestions, setShowBuiltQuestions] = useState(false);

  // Answer blocks
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

  // Show built section instead of general
  if (showBuiltQuestions) {
    return (
      <section>
        <div className="container">
          <h2 className="text-center fs-1">FAQ</h2>
          <p className="mb-5 pb-5 text-center fs-2">Your Question Answer Here</p>

          <div className="d-flex">
            <div className="col-2">
              <ul className="text-decoration-none list-unstyled">
                <li className="hover" onClick={() => setShowBuiltQuestions(false)}>General</li>
                <li className="hover active">Build</li>
                <li className="hover">Promote</li>
                <li className="hover">Manage</li>
                <li className="hover">Integration</li>
                <li className="hover">Legal</li>
              </ul>
            </div>
            <div className="col-10">
              <i className="fa-solid fa-bars text fs-2" />
              <span className="ms-3 fs-2"> Built Questions</span>

              <div className="d-flex mt-5 fs-3 justify-content-between align-items-center">
                <p className="m-0" onClick={() => setShowAnswer1(!showAnswer1)}>
                  {props.q1}
                </p>
                <i className="fa-solid fa-caret-down"></i>
              </div>
              {answer1}

              <div className="d-flex mt-5 fs-3 justify-content-between align-items-center">
                <p className="m-0" onClick={() => setShowAnswer2(!showAnswer2)}>
                  How does Frenk AI work?
                </p>
                <i className="fa-solid fa-caret-down"></i>
              </div>
              {answer2}

              <div className="d-flex mt-5 fs-3 justify-content-between align-items-center">
                <p className="m-0" onClick={() => setShowAnswer3(!showAnswer3)}>
                  Is Frenk AI free to use?
                </p>
                <i className="fa-solid fa-caret-down"></i>
              </div>
              {answer3}
            </div>
          </div>
        </div>
      </section>
    );
  }

  // If not built section, show general section
  return (
    <section className="bg-color p-5">
      <div className="container">
        <h2 className="text-center fs-1">FAQ</h2>
        <p className="mb-5 pb-5 text-center fs-2">Your Question Answer Here</p>

        <div className="d-flex">
          <div className="col-2">
            <ul className="text-decoration-none list-unstyled">
              <li className="hover active  mt-3">General</li>
              <li className="hover mt-3" onClick={() => setShowBuiltQuestions(true)}>
                Build
              </li>
              <li className="hover mt-3">Promote</li>
              <li className="hover mt-3">Manage</li>
              <li className="hover mt-3">Integration</li>
              <li className="hover mt-3">Legal</li>
            </ul>
          </div>
          <div className="col-10">
            <i className="fa-solid fa-bars text fs-2" />
            <span className="ms-3 fs-2"> General Questions</span>

            <div className="d-flex mt-5 fs-3 justify-content-between align-items-center">
              <p className="m-0" onClick={() => setShowAnswer1(!showAnswer1)}>
                {props.q1}
              </p>
              <i className="fa-solid fa-caret-down"></i>
            </div>
            {answer1}

            <div className="d-flex mt-5 fs-3 justify-content-between align-items-center">
              <p className="m-0" onClick={() => setShowAnswer2(!showAnswer2)}>
                How does Frenk AI work?
              </p>
              <i className="fa-solid fa-caret-down"></i>
            </div>
            {answer2}

            <div className="d-flex mt-5 fs-3 justify-content-between align-items-center">
              <p className="m-0" onClick={() => setShowAnswer3(!showAnswer3)}>
                Is Frenk AI free to use?
              </p>
              <i className="fa-solid fa-caret-down"></i>
            </div>
            {answer3}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
