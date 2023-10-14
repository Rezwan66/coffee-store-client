import { FaEye, FaPen } from 'react-icons/fa';
import { AiFillDelete } from 'react-icons/ai';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
// eslint-disable-next-line
const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
  // eslint-disable-next-line
  const { _id, name, quantity, supplier, taste, category, details, photo } =
    coffee;

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
        console.log('delete confirmed');
        fetch(`http://localhost:5000/coffee/${_id}`, {
          method: 'DELETE',
        })
          .then(res => res.json())
          .then(data => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire('Deleted!', 'Your coffee has been deleted.', 'success');
              // eslint-disable-next-line
              const remaining = coffees.filter(c => c._id !== _id);
              setCoffees(remaining);
            }
          });
      }
    });
  };

  return (
    <div>
      <div className="card card-side h-72 bg-base-100 shadow-xl text-left">
        <figure>
          <img src={photo} alt="Coffee" />
        </figure>
        <div className="flex items-center justify-between w-full pr-10">
          <div className="card-body">
            <h2 className="card-title">{name}</h2>
            <p>
              <strong>Quantity: </strong>
              {quantity}
            </p>
            <p>
              <strong>Supplier: </strong>
              {supplier}
            </p>
            <p>
              <strong>Taste: </strong>
              {taste}
            </p>
            <p>
              <strong>Category: </strong>
              {category}
            </p>
            <i className="text-purple-600">{details}</i>
          </div>
          <div className="join join-vertical space-y-4">
            <button className="btn btn-primary join-item">
              <FaEye></FaEye>
            </button>
            <Link to={`/updateCoffee/${_id}`}>
              <button className="btn btn-neutral join-item">
                <FaPen></FaPen>
              </button>
            </Link>
            <button
              onClick={() => handleDelete(_id)}
              className="btn btn-error join-item text-white"
            >
              <AiFillDelete></AiFillDelete>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
