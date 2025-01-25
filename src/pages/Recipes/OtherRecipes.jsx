import { useContext } from "react";
import RecipesContext from "../../context/RecipesContext";

function OtherRecipes() {
  const recipesData = useContext(RecipesContext);
  const recipe = recipesData.slice(1, 4);
  console.log(recipe);
  return (
    <div>
      <h3 className='text-3xl font-semibold'>Other Recipe</h3>
      <div className='block-recipes grid gap-5 mt-5'>
        {recipe.map((recipe, i) => (
          <div className='div grid grid-cols-2 items-center gap-5' key={i}>
            <img src={recipe.image} className='rounded-3xl size-full' />
            <div className='grid gap-5'>
              <h4 className='text-xl font-semibold'>
                {recipe.title.length > 20
                  ? recipe.title.slice(0, 25) + "..."
                  : recipe.title}
              </h4>
              <span>{recipe.type}</span>
            </div>
          </div>
        ))}
        {recipesData.map((recipe, i) =>
          recipe.advertising ? (
            <a key={i} href='/' className='recipes__item advertising'>
              <img src={recipe.advertising} />
            </a>
          ) : null
        )}
      </div>
    </div>
  );
}

export default OtherRecipes;
