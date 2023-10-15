import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';

const SignIn = () => {
  const { signIn } = useContext(AuthContext);

  const handleSignIn = e => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email, password)
      .then(res => {
        console.log(res.user);
        const user = {
          email,
          lastLogin: res?.user?.metadata?.lastSignInTime,
        };
        // update last logged at in the database
        fetch('http://localhost:5000/users', {
          method: 'PATCH',
          headers: {
            'content-type': 'application/json',
          },
          body: JSON.stringify(user),
        })
          .then(res => res.json())
          .then(data => {
            console.log(data);
          });
      })
      .catch(err => console.log(err.message));
  };

  return (
    <div className="max-w-7xl mx-auto mt-10">
      <div className="hero min-h-screen bg-[#F4F3F0]">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Sign In To Your Account</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSignIn} className="card-body">
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
                <button className="btn btn-primary">Sign In</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
