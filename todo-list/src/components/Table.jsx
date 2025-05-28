const Table = ({ id, name, complete, onComplete }) => {
  return (
    <li className="bg-gray-100 rounded-lg flex justify-between items-center px-4 py-3 shadow-sm">
      <span
        className={`text-base font-medium ${complete ? "line-through text-green-600" : "text-gray-800"}`}
      >
        {name}
      </span>

      {complete ? (
        ""
      ) : (
        <button
          onClick={() => onComplete(id)}
          className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center hover:bg-green-600 shadow-md transition"
        >
          ✔
        </button>
      )}
    </li>
  );
};

export default Table;
