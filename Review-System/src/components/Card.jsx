import { motion } from "framer-motion";

const Card = (props) => {
    const { name, date, star, review } = props.textObj;

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-80 bg-white shadow-xl rounded-xl p-6 text-center overflow-x-auto"
            style={{
                boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
                borderRadius: "20px",
            }}
        >
            <div>
                <div className="w-20 h-20 mx-auto bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-2xl font-bold mb-4">
                    {name[0].toUpperCase()}
                </div>
                <h2 className="text-xl font-semibold text-gray-800 mb-1">Thank you, {name}!</h2>
                <p className="text-gray-500 text-sm mb-2">{new Date(date).toDateString()}</p>
                <div className="flex justify-center gap-1 text-yellow-400 text-xl mb-3">
                    {"⭐".repeat(Number(star))}
                </div>
                <div className="h-14 overflow-auto">
                    <p className="italic text-gray-700">“{review}”</p>
                </div>

                <div className="flex gap-4 pt-4">
                    <button
                        type="button"
                        className="w-full bg-red-700 hover:bg-red-800 text-white font-semibold py-2 px-4 rounded-lg transition duration-300"
                        onClick={props.onDelete}
                    >
                        Delete
                    </button>
                    <button
                        type="button"
                        className="w-full bg-blue-700 hover:bg-blue-800 text-white font-semibold py-2 px-4 rounded-lg transition duration-300"
                        onClick={props.onEdit}
                    >
                        Edit
                    </button>
                </div>
            </div>
        </motion.div>
    );
};

export default Card;
