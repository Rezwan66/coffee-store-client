import { FaEye, FaPen } from 'react-icons/fa';
import { AiFillDelete } from 'react-icons/ai';

const CoffeeCard = ({ coffee }) => {
  const { name, quantity, supplier, taste, category, details, photo } = coffee;
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
            <button className="btn btn-neutral join-item">
              <FaPen></FaPen>
            </button>
            <button className="btn btn-error join-item text-white">
              <AiFillDelete></AiFillDelete>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
