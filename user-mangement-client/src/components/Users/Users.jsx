import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

function Users() {
  const loadedUsers = useLoaderData();

  const [users, setUsers] = useState(loadedUsers);

  const handleUserDelete = (id) => {
    fetch(`http://localhost:4545/users/deleteOne/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.deletedCount > 0) {
          toast.warning(`user deleted successfully.`);
        }
      });

    const displayUsers = users.filter((user) => user._id !== id);
    setUsers(displayUsers);
  };

  return (
    <div className="max-w-7xl px-5 lg:px-0 lg:mx-auto my-20">
      <ToastContainer autoClose={1500} position="top-right" />
      <h1 className="text-3xl text-center font-bold my-10">Users of DB</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 justify-center gap-6">
        {users?.map((user) => (
          <div key={user._id} className="border p-6 space-y-2 rounded-md">
            <h1 className="text-2xl font-medium">Name: {user.name} </h1>
            <h2 className="text-xl font-medium">Email: {user.email} </h2>
            <h4 className="text-lg font-medium">id: {user._id}</h4>
            <div className="flex gap-10">
              <Link to={`/users/updateUser/${user._id}`}>
                <button className="border-2 px-6 py-2 rounded-lg hover:bg-blue-500 hover:text-white border-blue-500 text-blue-600 font-semibold text-lg">
                  Edit User
                </button>
              </Link>
              <button
                onClick={() => handleUserDelete(user._id)}
                className="border-2 px-6 py-2 rounded hover:bg-red-500 hover:text-white border-red-500 text-red-600 font-semibold text-lg"
              >
                Delete User
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Users;
