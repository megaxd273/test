import { useEffect, useState } from 'react';
import TruckItem from './TruckItem/TruckItem';
import TruckSkeleton from './TruckItem/TruckSkeleton';
import './TruckList.css';

function TruckList() {
  const [trucks, setTrucks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch('https://65748053b2fbb8f6509c4490.mockapi.io/trucks')
      .then((res) => res.json())
      .then((data) => {
        setTimeout(() => {
          setTrucks(data);
          setIsLoading(false);
        }, 1500);
      });
  }, []);

  return (
    <section className="trucks">
      {isLoading
        ? [...new Array(8)].map((_, index) => <TruckSkeleton key={index} />)
        : trucks.map((el) => {
            return <TruckItem key={el.id} {...el} />;
          })}
    </section>
  );
}

export default TruckList;
