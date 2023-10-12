import { useLoaderData, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

function User() {
  const loadedUser = useLoaderData();
  // console.log(loadedUser);
  const navigate = useNavigate();

  const handleUpdateUser = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const updatedUser = { name, email };
    // console.log(updatedUser);

    fetch(`http://localhost:4545/users/updateUser/${loadedUser._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedUser),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.modifiedCount > 0) {
          toast.success(`User updated Successfully, ${loadedUser.id}`);
        }
        navigate("/");
      });
  };

  return (
    <div className="my-20">
      <ToastContainer autoClose={1500} position="top-center" />
      <h1 className="text-3xl text-center font-bold my-10">
        Update Users Info
      </h1>
      <div className="flex justify-center">
        <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
          <form className="card-body" onSubmit={handleUpdateUser}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                name="name"
                defaultValue={loadedUser.name}
                type="text"
                placeholder="full name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                name="email"
                defaultValue={loadedUser.email}
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control mt-6">
              <button className="btn btn-primary">Update User</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default User;
