import RecipeDetails from "./RecipeDetails";
import Inbox from "../Home/Inbox";
// import OtherRecipes from "./OtherRecipes";
import Ingredients from "./Ingredients";


function Recipes() {
  return (
    <>
      <RecipeDetails />
      <Ingredients/>
      {/* <OtherRecipes/> */}
      <Inbox/>
    </>
  );
}

export default Recipes;
