import { motion } from "framer-motion";

const Card = (props) => {
    const { name, date, star, review } = props.textObj;

    return (
        <>
            
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="w-80 bg-white shadow-xl rounded-xl p-6 text-center"
            >

                <div className="w-16 h-16 mx-auto bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-2xl font-bold mb-4">
                    {name[0].toUpperCase()}
                </div>
                <h2 className="text-xl font-semibold text-gray-800 mb-1">Thank you, {name}!</h2>
                <p className="text-gray-500 text-sm mb-2">{new Date(date).toDateString()}</p>
                <div className="flex justify-center gap-1 text-yellow-400 text-xl mb-3">
                    {"⭐".repeat(Number(star))}
                </div>
                <p className="italic text-gray-700">“{review}”</p>
            </motion.div>
        </>
    );
};

export default Card;
