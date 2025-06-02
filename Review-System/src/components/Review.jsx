import { useRef, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

const Review = () => {
    const [text, setText] = useState({});
    const [error, setError] = useState({});
    const [submittedData, setSubmittedData] = useState(null);
    const inputRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        let tempObj = {};

        if (!text.name || text.name.trim() === "") {
            tempObj.name = "Please Enter The Name";
        }

        if (!text.date || text.date.trim() === "") {
            tempObj.date = "Please Enter The Date";
        }

        if (text.star === undefined || text.star === null || text.star === "") {
            tempObj.star = "Please Enter The Stars";
        }

        if (!text.review || text.review.trim() === "") {
            tempObj.review = "Please Enter The Review";
        }

        setError(tempObj);

        if (Object.keys(tempObj).length === 0) {
            setSubmittedData({ ...text }); // store submitted data
            setText({}); // clear form
            setError({});
        }
    };

    const handleChange = (e) => {
        setText({ ...text, [e.target.id]: e.target.value });
    };

    return (
        <>
            <div className="container mx-auto px-4 py-6">
                <div className="min-h-screen flex flex-col items-center justify-center">
                    <form
                        className="max-w-md w-full bg-white shadow-lg rounded-2xl p-6"
                        onSubmit={handleSubmit}
                        ref={inputRef}
                    >
                        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Leave a Review</h2>

                        {/* Name Input */}
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                Name
                            </label>
                            <input
                                onChange={handleChange}
                                value={text.name || ""}
                                type="text"
                                id="name"
                                className="mt-1 block w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                            />
                            {error.name && <p className="text-red-500 text-sm mt-1">{error.name}</p>}
                        </div>

                        {/* Date & Rating */}
                        <div className="grid grid-cols-2 gap-4 mb-4">
                            <div>
                                <label htmlFor="date" className="block text-sm font-medium text-gray-700">
                                    Date
                                </label>
                                <input
                                    onChange={handleChange}
                                    value={text.date || ""}
                                    type="date"
                                    id="date"
                                    className="mt-1 block w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                />
                                {error.date && <p className="text-red-500 text-sm mt-1">{error.date}</p>}
                            </div>

                            <div>
                                <label htmlFor="star" className="block text-sm font-medium text-gray-700">
                                    Rating
                                </label>
                                <select
                                    onChange={handleChange}
                                    value={text.star || ""}
                                    id="star"
                                    className="mt-1 block w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                >
                                    <option value="">-- Rate Me --</option>
                                    {[1, 2, 3, 4, 5].map((num) => (
                                        <option key={num} value={num}>
                                            {num}
                                        </option>
                                    ))}
                                </select>
                                {error.star && <p className="text-red-500 text-sm mt-1">{error.star}</p>}
                            </div>
                        </div>

                        {/* Review */}
                        <div className="mb-4">
                            <label htmlFor="review" className="block text-sm font-medium text-gray-700">
                                Review
                            </label>
                            <textarea
                                onChange={handleChange}
                                value={text.review || ""}
                                id="review"
                                rows="4"
                                className="mt-1 block w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                            ></textarea>
                            {error.review && <p className="text-red-500 text-sm mt-1">{error.review}</p>}
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-medium shadow-md transition duration-300"
                        >
                            Submit Review
                        </button>
                    </form>

                    {/* Review Card */}

                    {submittedData && (
              
              <div>  <h3 className="text-xl font-semibold mb-2 text-blue-900">🌟 Your Review:</h3>
                <p className="text-gray-800"><strong>Name:</strong> {submittedData.name}</p>
                <p className="text-gray-800"><strong>Date:</strong> {submittedData.date}</p>
                <p className="text-gray-800"><strong>Rating:</strong> {submittedData.star} ⭐</p>
                <p className="text-gray-800"><strong>Review:</strong> {submittedData.review}</p></div>

                    )}

                </div>
            </div>
        </>
    );
};

export default Review;
