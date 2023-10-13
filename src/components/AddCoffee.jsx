const AddCoffee = () => {
  const handleAddCoffee = e => {
    e.preventDefault();

    const form = e.target;

    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;

    const newCoffee = {
      name,
      quantity,
      supplier,
      taste,
      category,
      details,
      photo,
    };
    console.log(newCoffee);
  };

  return (
    <div className="bg-[#F4F3F0] max-w-5xl mx-auto text-center mt-20 p-10 rounded-md">
      <h2 className="text-4xl font-extrabold">Add New Coffee</h2>
      <form onSubmit={handleAddCoffee} className="space-y-4 mt-4">
        {/* form name and quantity row */}
        <div className="md:flex gap-6">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Coffee Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter coffee name"
              className="input input-bordered md:w-full"
            />
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Available Quantity</span>
            </label>

            <input
              type="text"
              name="quantity"
              placeholder="Enter available quantity"
              className="input input-bordered md:w-full"
            />
          </div>
        </div>
        {/* form supplier and taste row */}
        <div className="md:flex gap-6">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Supplier</span>
            </label>
            <input
              type="text"
              name="supplier"
              placeholder="Enter coffee supplier"
              className="input input-bordered md:w-full"
            />
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Taste</span>
            </label>

            <input
              type="text"
              name="taste"
              placeholder="Enter coffee taste"
              className="input input-bordered md:w-full"
            />
          </div>
        </div>
        {/* form category and details row */}
        <div className="md:flex gap-6">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <input
              type="text"
              name="category"
              placeholder="Enter coffee category"
              className="input input-bordered md:w-full"
            />
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Details</span>
            </label>

            <input
              type="text"
              name="details"
              placeholder="Enter coffee details"
              className="input input-bordered md:w-full"
            />
          </div>
        </div>
        {/* form photo url row */}
        <div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Photo</span>
            </label>
            <input
              type="text"
              name="photo"
              placeholder="Enter Photo URL"
              className="input input-bordered w-full"
            />
          </div>
        </div>
        {/* submit btn */}
        <div>
          <input
            type="submit"
            value="Add Coffee"
            className="btn btn-block bg-[#D2B48C] mt-6"
          />
        </div>
      </form>
    </div>
  );
};

export default AddCoffee;
