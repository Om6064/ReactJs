import { useRef, useState } from "react";
import { motion } from "framer-motion";
import Card from "./Card";

const Review = () => {
    const [text, setText] = useState({
        name: "",
        date: "",
        star: "",
        review: ""
    });
    const [error, setError] = useState({});
    const inputRef = useRef(null);
    const [showCard, setShowCard] = useState(false);
    const [reviews, setReviews] = useState([]);
    const [editIndex, setEditIndex] = useState(null);

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
        if (text.review.trim().length > 250) {
            tempObj.review = "Review must be within 250 characters";
        }

        setError(tempObj);

        if (Object.keys(tempObj).length === 0) {
            if (editIndex !== null) {
                const updatedReviews = [...reviews];
                updatedReviews[editIndex] = text;
                setReviews(updatedReviews);
                setEditIndex(null);
            } else {
                setReviews([...reviews, text]);
            }
            setText({ name: "", date: "", star: "", review: "" });
            setShowCard(true);
        }
    };

    const handleChange = (e) => {
        setText({ ...text, [e.target.id]: e.target.value });
        setError({ ...error, [e.target.id]: "" });
    };

    const deleteReview = (index) => {
        const newReviews = [...reviews];
        newReviews.splice(index, 1);
        setReviews(newReviews);
    };


    const editReview = (index) => {
        setText(reviews[index]);
        setEditIndex(index);
        setShowCard(false);
    };

    return (
        <div className="bg-slate-100">
            <div className="container mx-auto px-4 min-h-screen  flex items-center justify-center">
                {!showCard ? (
                    <motion.form
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="bg-white p-8 rounded-xl shadow-2xl max-w-lg w-full"
                        onSubmit={handleSubmit}
                        ref={inputRef}
                    >
                        <h2 className="text-2xl font-bold text-center text-blue-700 mb-6">Leave a Review</h2>

                        <div className="mb-5">
                            <label htmlFor="name" className={`block text-sm ${!error.name ? "text-gray-600" : "text-red-600"}`}>Name</label>
                            <input
                                onChange={handleChange}
                                value={text.name}
                                type="text"
                                name="name"
                                id="name"
                                className={`w-full border-b-2 focus:border-blue-600 outline-none p-2 ${!error.name ? "border-gray-300" : "border-red-300"}`}
                            />
                            {error.name && <p className="text-red-500 text-sm mt-1">{error.name}</p>}
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="mb-5">
                                <label htmlFor="date" className={`block text-sm ${!error.date ? "text-gray-600" : "text-red-600"}`}>Date</label>
                                <input
                                    onChange={handleChange}
                                    value={text.date}
                                    type="date"
                                    name="date"
                                    id="date"
                                    className={`w-full border-b-2 focus:border-blue-600 outline-none p-2 ${!error.date ? "border-gray-300" : "border-red-300"}`}
                                />
                                {error.date && <p className="text-red-500 text-sm mt-1">{error.date}</p>}
                            </div>

                            <div className="mb-5">
                                <label htmlFor="star" className={`block text-sm ${!error.star ? "text-gray-600" : "text-red-600"}`}>Rating</label>
                                <select
                                    onChange={handleChange}
                                    value={text.star}
                                    name="star"
                                    id="star"
                                    className={`w-full border-b-2 focus:border-blue-600 outline-none p-2 ${!error.star ? "border-gray-300" : "border-red-300"}`}
                                >
                                    <option value="">---Rate---</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select>
                                {error.star && <p className="text-red-500 text-sm mt-1">{error.star}</p>}
                            </div>
                        </div>

                        <div className="mb-5">
                            <label htmlFor="review" className={`block text-sm ${!error.review ? "text-gray-600" : "text-red-600"}`}>Review</label>
                            <textarea
                                onChange={handleChange}
                                value={text.review}
                                name="review"
                                id="review"
                                rows="4"
                                className={`w-full border-b-2 focus:border-blue-600 outline-none p-2 ${!error.review ? "border-gray-300" : "border-red-300"}`}
                            ></textarea>
                            <div className="flex justify-between text-xs text-gray-400">
                                <span>{text.review.length}/250</span>
                            </div>
                            {error.review && <p className="text-red-500 text-sm mt-1">{error.review}</p>}
                        </div>

                        <div className="flex gap-4">
                            <button
                                type="button"
                                className="w-full bg-blue-700 hover:bg-blue-800 text-white font-semibold py-2 px-4 rounded-lg transition duration-300"
                                onClick={() => {
                                    setShowCard(true)
                                }}
                            >
                                Show Data
                            </button>
                            <button
                                type="submit"
                                className="w-full bg-blue-700 hover:bg-blue-800 text-white font-semibold py-2 px-4 rounded-lg transition duration-300"
                            >
                                Submit
                            </button>
                        </div>
                    </motion.form>
                ) : (
                    <div>
                        <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto px-6 py-8">
                            {reviews.map((review, index) => (
                                <Card key={index} textObj={review} onDelete={() => deleteReview(index)}
                                    onEdit={() => editReview(index)} />
                            ))}
                        </div>



                        <div className="w-full flex justify-center pb-3">
                            <button
                                className="text-2xl text-center p-3 font-semibold bg-blue-100 rounded flex items-center justify-center text-blue-600 cursor-pointer hover:bg-blue-600 hover:text-blue-100 transition-all duration-75"
                                onClick={() => {
                                    setShowCard(false);
                                }}
                            >
                                Back
                            </button>
                        </div>
                    </div>

                )}
            </div>
        </div>
    );
};

export default Review;
