import Link from "next/link";
import MealSearch from "./components/MealSearch";
import Image from "next/image";
import { Playfair_Display } from "next/font/google";


//custom font
const playfair_Display = Playfair_Display({
  weight: ["400"],
  subsets: ["latin"],
});

export const metadata = {
  title: "All Meals",
  description: "meals loaded from mealdb api",
};

const mealsPage = async ({ searchParams }) => {
  const query = await searchParams;

  const fetchMeals = async () => {
    try {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${query.search}`
      );
      const data = await res.json();
      //   setMeals(data?.meals || []);
      return data.meals;
    } catch (error) {
      console.log(error);
      return [];
    }
  };
  const meals = await fetchMeals();

  return (
    <div  
    
    //custom font
    className={`${playfair_Display.className} antialiased`}>
      <div className="flex justify-center">
        <MealSearch />
      </div>{" "}
      <div className="grid sm:grid-cols-4 grid-cols-1 gap-5">
        {meals?.map((meal) => {
          return (
            <div key={meal?.idMeal}>
              <h1>{meal?.strMeal}</h1>
              <Image
                src={meal?.strMealThumb}
                alt={meal?.strMeal}
                className="rounded-lg"
                width={641}
                height={641}
                
              />
              <Link href={`/meals/${meal.idMeal}`}>Meal Details</Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default mealsPage;
