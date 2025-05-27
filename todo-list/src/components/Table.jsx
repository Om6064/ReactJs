const Table = (props) => {

    return (
        <tr className="bg-white border-b">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                {props.name}
            </th>
            <td className="px-6 py-4 text-right">
                {
                    props.complete ? 
                    <a href="#" className="font-medium text-green-600  hover:underline">Completed</a> 
                    : <a href="#" className="font-medium text-blue-600  hover:underline" onClick={() => {
                        props.onComplete(props.id)
                    }}>Marks As Complete</a>
                }
            </td>
        </tr>
    )
}

export default Table
