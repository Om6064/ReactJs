const UserList = ({ users }) => {
    return (
        <div className="p-6">
            <h2 className="text-xl font-bold mb-4">Registered Users</h2>
            {users.length === 0 ? (
                <p>No users found.</p>
            ) : (
                <ul className="space-y-4">
                    {users.map((user, index) => (
                        <li key={index} className="border p-4 rounded shadow">
                            <p><strong>Name:</strong> {user.name}</p>
                            <p><strong>Email:</strong> {user.email}</p>
                            <p><strong>Course:</strong> {user.course}</p>
                            <p><strong>Gender:</strong> {user.gender}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default UserList;
