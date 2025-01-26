import RecipeDetails from "./RecipeDetails";
import Inbox from "../Home/Inbox";
import Ingredients from "./Ingredients";
import Directions from "./Directions";
import Delicious from "../Home/Delicious";

function Recipes() {
  return (
    <>
      <RecipeDetails />
      <Ingredients />
      <Directions />
      <Inbox />
      <Delicious />
    </>
  );
}

export default Recipes;
