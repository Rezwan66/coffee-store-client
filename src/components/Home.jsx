import { useLoaderData } from 'react-router-dom';
import CoffeeCard from './CoffeeCard';
import { useState } from 'react';

const Home = () => {
  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees);
  return (
    <div className="max-w-7xl mx-auto text-center mt-10">
      <h2 className="text-4xl text-purple-600 font-bold">
        Hot hot cold coffee: {coffees.length}
      </h2>
      <div className="grid md:grid-cols-2 gap-6 my-10">
        {coffees.map(coffee => (
          <CoffeeCard
            key={coffee._id}
            coffee={coffee}
            coffees={coffees}
            setCoffees={setCoffees}
          ></CoffeeCard>
        ))}
      </div>
    </div>
  );
};

export default Home;
