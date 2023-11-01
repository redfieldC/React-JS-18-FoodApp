import { useEffect, useState } from "react";

export default function FoodDetails({ foodId }) {
  const [food, setFood] = useState({});

  const API_KEY = "b1aa86777caf4dac98853532a97e88f3";

  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${URL}?apiKey=${API_KEY}`);
      const data = await res.json();
      console.log(data);
      setFood(data);
    }
    fetchFood();
  }, [foodId]);
  return (
    <div>
      <div>
        <h1>{food.title}</h1>
        <img src={food.image} alt="" />
      </div>
      <span>
        <strong>
        ⏲️{food.readyInMinutes} Minutes
        </strong>
      </span>
      <span>
        {food.vegetarian ? "Vegetarian" : "Non-Vegetarian"}
      </span>
    </div>
  );
}
