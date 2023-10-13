const AddCoffee = () => {
  return (
    <div className="bg-[#F4F3F0] max-w-5xl mx-auto text-center mt-20 p-4">
      <h2 className="text-4xl font-bold">Add New Coffee</h2>
      <form>
        <div className="flex justify-around">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Coffee Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Enter coffee name"
                className="input input-bordered"
              />
            </label>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Available Quantity</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Available quantity"
                className="input input-bordered"
              />
            </label>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddCoffee;
