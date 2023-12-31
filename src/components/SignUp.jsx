import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import Swal from 'sweetalert2';

const SignUp = () => {
  const { signUp } = useContext(AuthContext);
  const handleSignUp = e => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signUp(email, password)
      .then(res => {
        console.log(res.user);
        // new user has been created here
        const createdAt = res.user.metadata.creationTime;
        const user = { email, createdAt };
        fetch(
          'https://coffee-store-server-j15jfl3t0-shaikh-rezwans-projects.vercel.app/users',
          {
            method: 'POST',
            headers: {
              'content-type': 'application/json',
            },
            body: JSON.stringify(user),
          }
        )
          .then(res => res.json())
          .then(data => {
            console.log(data);
            if (data.insertedId) {
              Swal.fire({
                title: 'Success!',
                text: 'User added successfully!',
                icon: 'success',
                confirmButtonText: 'Cool',
              });
            }
          });
      })
      .catch(err => console.log(err.message));
  };

  return (
    <div className="max-w-7xl mx-auto mt-10">
      <div className="hero min-h-screen bg-[#F4F3F0]">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Sign Up Now!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSignUp} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">
                  Sign Up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
