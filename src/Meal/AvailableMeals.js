import { useState, useEffect } from "react";
import MealItem from "./MealItem/MealItem";
import { Card } from "../UI/Card";
import s from "./AvailableMeals.module.css";

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading,setIsLoading]=useState(false)
  const [requestError,setRequestError]=useState()

  useEffect(() => {
    setIsLoading(true)
    const fetchMeals = async () => {
      const response = await fetch(
        "https://foods-fe8e8-default-rtdb.firebaseio.com/meals.json"
      );
      if(!response.ok){
        throw new Error('Something was wrong')
      }
      const responseData = await response.json();
      let loadedMeals = [];

      for (const key in responseData) {
        loadedMeals.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
        });
      }

      setMeals(loadedMeals);
      setIsLoading(false)
    };
    fetchMeals().catch(error=>{ 
      setIsLoading(false) 
      setRequestError(error.message)})
  }, []);
  if(isLoading){
    return <section className={s.mealsLoading}>
      <p>Loading...</p>
    </section>
  }
  if(requestError){
    return <section className={s.mealsError}>
      <p>{requestError}</p>
    </section>
  }
  return (
    <section className={s.meals}>
      <Card>
        <ul>
          {meals.map((meal) => (
            <MealItem
              key={meal.id}
              id={meal.id}
              name={meal.name}
              description={meal.description}
              price={meal.price}
            />
          ))}
        </ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
