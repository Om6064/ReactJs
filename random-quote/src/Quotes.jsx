import { useEffect, useState } from 'react';


const Quotes = () => {
    const [quotes, setQuotes] = useState([]);

    useEffect(() => {
        getNewQuote();
    }, []);

    const getNewQuote = async () => {
        const URL = "https://dummyjson.com/quotes/random";
        const res = await fetch(URL);
        const data = await res.json();
        setQuotes([...quotes, data]);
    };

    return (
        <div className="quotes-wrapper">
            <div className="container d-flex flex-column align-items-center justify-content-center min-vh-100 px-3">
                <h1 className="display-5 fw-bold text-center mb-4">Random Quote Generator</h1>

                <button className="btn-my mb-4 fs-5" onClick={getNewQuote}>
                    <i class="fa-solid fa-plus"></i> Get New Quote
                </button>

                <div
                    className="quote-list my-3 row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 overflow-auto"
                    style={{ maxHeight: '60vh' }}
                >
                    {quotes.map((quoteItem) => (
                        <div className="quote-box col d-flex" style={{ maxWidth: '400px' }}>
                            <div className="quote-card card shadow-sm w-100">
                                <div className="card-body d-flex flex-column justify-content-between">
                                    <blockquote className="blockquote mb-0">
                                        <p className="quote-text">"{quoteItem.quote}"</p>
                                        <footer className="blockquote-footer mt-2">
                                            <cite>{quoteItem.author}</cite>
                                        </footer>
                                    </blockquote>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Quotes;
