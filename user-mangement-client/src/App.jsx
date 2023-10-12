import { ToastContainer, toast } from "react-toastify";

function App() {
  const handleCreateUser = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const name = form.name.value;
    const user = { name, email };
    console.log(user);

    fetch("http://localhost:4545/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.insertedId) {
          toast.success("User created successfully");
        }
        form.reset();
      })
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <div>
        <ToastContainer position="top-center" autoClose={1500} />
        <div className="my-20">
          <h1 className="text-3xl font-bold text-center mb-10">
            Create New User
          </h1>
          <div className="flex justify-center">
            <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
              <form className="card-body" onSubmit={handleCreateUser}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    name="name"
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
                    type="email"
                    placeholder="email"
                    className="input input-bordered"
                    required
                  />
                </div>

                <div className="form-control mt-6">
                  <button className="btn btn-primary">Create User</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
