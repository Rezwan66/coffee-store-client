import { useLoaderData } from 'react-router-dom';
import CoffeeCard from './CoffeeCard';

const Home = () => {
  const loadedCoffee = useLoaderData();
  return (
    <div className="max-w-7xl mx-auto text-center mt-10">
      <h2 className="text-4xl text-purple-600 font-bold">
        Hot hot cold coffee: {loadedCoffee.length}
      </h2>
      <div className="grid md:grid-cols-2 gap-6 my-10">
        {loadedCoffee.map(coffee => (
          <CoffeeCard key={coffee._id} coffee={coffee}></CoffeeCard>
        ))}
      </div>
    </div>
  );
};

export default Home;
