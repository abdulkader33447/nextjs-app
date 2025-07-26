const fetchSingleMeal = async (id) => {
  try {
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    );
    const data = await res.json();
    //   setMeals(data?.meals || []);
    return data.meals;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export async function generateMetadata({ params }) {
  //read route params
  const id = (await params).id;

  //fetch data
  const [singleMeal] = await fetchSingleMeal(id);
console.log(singleMeal)
  //optionally access and extend (rtather then replace) parant metadata
  // const previousImages = (await parent).opengraph?.tmage || [];

  return {
    title: singleMeal.strMeal,
    descrption: singleMeal.strInstructions,
  };
}

const SingleMealPage = async ({ params }) => {
  const p = await params;

  const singleMeale = await fetchSingleMeal(p?.id);

  return (
    <div>
      <p>{JSON.stringify(singleMeale)}</p>
    </div>
  );
};

export default SingleMealPage;
