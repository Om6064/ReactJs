import { useState } from "react";

const Faq = () => {
  const [activeTab, setActiveTab] = useState("general");
  const [showAnswer1, setShowAnswer1] = useState(false);
  const [showAnswer2, setShowAnswer2] = useState(false);
  const [showAnswer3, setShowAnswer3] = useState(false);

  // Dummy question-answer content (can be customized per section)
  const faqContent = {
    general: [
      {
        question: "What Is Frenk AI?",
        answer: "Frenk AI is an artificial intelligence tool that helps automate tasks.",
      },
      {
        question: "How does Frenk AI work?",
        answer: "Frenk AI uses machine learning to understand data and provide smart suggestions.",
      },
      {
        question: "Is Frenk AI free to use?",
        answer: "Yes, Frenk AI has a free plan with basic features. Premium plans offer more options.",
      },
    ],
    build: [
      {
        question: "How to build a workflow?",
        answer: "Use the drag-and-drop builder to create automated workflows.",
      },
      {
        question: "Can I integrate my own tools?",
        answer: "Yes, Frenk AI supports integrations with multiple third-party tools.",
      },
      {
        question: "Is coding required to build?",
        answer: "No, building with Frenk AI requires no coding skills.",
      },
    ],
    promote: [
      {
        question: "Can Frenk AI help with marketing?",
        answer: "Yes, it provides automated marketing recommendations.",
      },
      {
        question: "Does it support social platforms?",
        answer: "It can post and track performance across platforms.",
      },
      {
        question: "Are analytics available?",
        answer: "Yes, built-in analytics are included.",
      },
    ],
    manage: [
      {
        question: "Can I manage team access?",
        answer: "Yes, admin roles and permissions can be configured.",
      },
      {
        question: "How to monitor activity?",
        answer: "View logs and usage reports in the dashboard.",
      },
      {
        question: "Is there user limit?",
        answer: "Depends on your subscription plan.",
      },
    ],
    integration: [
      {
        question: "Which apps are supported?",
        answer: "Popular apps like Slack, Zapier, Google Sheets, and more.",
      },
      {
        question: "Is API access available?",
        answer: "Yes, with documentation in the developer portal.",
      },
      {
        question: "Does it support webhooks?",
        answer: "Yes, incoming and outgoing webhooks are supported.",
      },
    ],
    legal: [
      {
        question: "Is my data secure?",
        answer: "Yes, we use industry-standard encryption and security policies.",
      },
      {
        question: "Where is data stored?",
        answer: "In secure, compliant data centers based on your region.",
      },
      {
        question: "How do I delete my data?",
        answer: "Use the account settings or contact support.",
      },
    ],
  };

  const currentFaq = faqContent[activeTab] || [];

  return (
    <section className="bg-color p-5">
  <div className="container">
    <h2 className="text-center fs-1">FAQ</h2>
    <p className="mb-5 pb-3 text-center fs-4">Your Question Answer Here</p>

    <div className="row">
      {/* Tabs list */}
      <div className="col-12 col-md-3 mb-4 mb-md-0">
        <ul className="list-unstyled text-center text-md-start">
          {["general", "build", "promote", "manage", "integration", "legal"].map((tab) => (
            <li
              key={tab}
              className={`hover mt-3 pointer text-capitalize ${activeTab === tab ? "active fw-bold" : ""}`}
              onClick={() => {
                setActiveTab(tab);
                setShowAnswer1(false);
                setShowAnswer2(false);
                setShowAnswer3(false);
              }}
            >
              {tab}
            </li>
          ))}
        </ul>
      </div>

      {/* Questions area */}
      <div className="col-12 col-md-9">
        <div className="d-flex align-items-center mb-4">
          <i className="fa-solid fa-bars fs-2 text" />
          <span className="ms-3 fs-3 text-capitalize"> {activeTab} Questions</span>
        </div>

        {currentFaq.map((item, index) => {
          const toggleShow = () => {
            if (index === 0) setShowAnswer1(!showAnswer1);
            if (index === 1) setShowAnswer2(!showAnswer2);
            if (index === 2) setShowAnswer3(!showAnswer3);
          };

          const isShown = index === 0 ? showAnswer1 : index === 1 ? showAnswer2 : showAnswer3;

          return (
            <div key={index}>
              <div className="d-flex mt-4 fs-5 justify-content-between align-items-center">
                <p className="m-0 pointer" onClick={toggleShow}>
                  {item.question}
                </p>
                <i className="fa-solid fa-caret-down" />
              </div>
              {isShown && (
                <p style={{ fontSize: "16px", color: "gray" }} className="mt-2">
                  {item.answer}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  </div>
</section>

  );
};

export default Faq;
