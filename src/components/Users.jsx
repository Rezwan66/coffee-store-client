import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const Users = () => {
  const loadedUsers = useLoaderData();
  const [users, setUsers] = useState(loadedUsers);

  const handleDelete = _id => {
    console.log(_id);
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then(result => {
      if (result.isConfirmed) {
        // Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
        fetch(
          `https://coffee-store-server-j15jfl3t0-shaikh-rezwans-projects.vercel.app/users/${_id}`,
          {
            method: 'DELETE',
          }
        )
          .then(res => res.json())
          .then(data => {
            console.log(data);
            if (data.deletedCount === 1) {
              Swal.fire('Deleted!', 'The user has been deleted.', 'success');
              //   remove the user from the UI
              const remaining = users.filter(user => user._id !== _id);
              setUsers(remaining);
            }
          });
      }
    });
  };

  return (
    <div className="max-w-7xl mx-auto mt-10">
      <h2 className="text-4xl font-bold text-center">
        All Users: {users.length}
      </h2>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Email</th>
                <th>Created At</th>
                <th>Last Logged In</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {users?.map((user, idx) => (
                <tr key={user._id}>
                  <th>{idx + 1}</th>
                  <td>{user.email}</td>
                  <td>{user.createdAt}</td>
                  <td>{user?.lastLoggedAt}</td>
                  <td>
                    <button
                      onClick={() => handleDelete(user._id)}
                      className="btn"
                    >
                      X
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Users;
