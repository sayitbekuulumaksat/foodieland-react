import "./recipeDetails.scss";
import { useContext } from "react";
import { FaPrint } from "react-icons/fa";
import { FaRegShareSquare } from "react-icons/fa";
import RecipesContext from "../../context/RecipesContext";

function RecipeDetails() {
  const recipesData = useContext(RecipesContext);
  const recipe = recipesData[7];

  return (
    <>
      <section className='recipe mt-30 '>
        <div className='container'>
          <div className='recipe__detailes'>
            <div className='recipe__info'>
              <h3 className='text-5xl font-semibold'>{recipe.title}</h3>
              <div className='recipe__header_block grid grid-cols-3 gap-10 mt-15'>
                <div className='recipe__time grid grid-cols-4  divide-x-2 divide-gray-200 items-center  col-span-2 '>
                  <div className='flex items-center gap-4 justify-center'>
                    <img src={recipe.author.photo} />
                    <div>
                      <strong>{recipe.author.name}</strong>
                      <span className='block'>{recipe.author.date}</span>
                    </div>
                  </div>
                  {/* <div className='border-l h-10 border-gray-400'></div> */}
                  <div className='flex items-center gap-4 justify-center'>
                    <img src={recipe.iconTime} />
                    <div>
                      <span className='font-medium'>PREP TIME</span>
                      <span className='block'>{recipe.prepTime}</span>
                    </div>
                  </div>
                  {/* <div className='border-l h-10 border-gray-400'></div> */}
                  <div className='flex items-center gap-4 justify-center'>
                    <img src={recipe.iconTime} alt='Author' />
                    <div>
                      <span className='font-medium block'>COOK TIME</span>
                      <span>{recipe.prepTime}</span>
                    </div>
                  </div>
                  {/* <div className='border-l h-10 border-gray-400'></div> */}
                  <div className='flex items-center justify-center gap-4'>
                    <img src={recipe.iconKnife} alt='Knife icon' />
                    <p>{recipe.type}</p>
                  </div>
                </div>
                <div className='print-And-Share justify-self-end col-span-1 flex  items-center'>
                  <div className='text-center'>
                    <div className='bg-[#E7FAFE] p-5 mr-5 rounded-full mb-5'>
                      <FaPrint className='w-8 h-8' />
                    </div>
                    <span>PRINT</span>
                  </div>
                  <div className='text-center'>
                    <div className='bg-[#E7FAFE] p-5 rounded-full mb-5'>
                      <FaRegShareSquare className='w-8 h-8' />
                    </div>
                    <span>SHARE</span>
                  </div>
                </div>
              </div>
              <div className='recipe__block mt-20 grid grid-cols-3 gap-10 '>
                <div className='video col-span-2  '>
                  <iframe
                    className='modal__block_video size-full rounded-3xl'
                    src={recipe.video}
                    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                  ></iframe>
                </div>
                <div className='nutrition col-span-1 bg-[#E7FAFE] p-10 rounded-3xl '>
                  <h3 className='font-semibold text-2xl'>
                    Nutrition Information
                  </h3>
                  <div className='grid grid-cols-2 justify-items-stretch mt-5 '>
                    <span className='text-[#00000099]'>Calories</span>
                    <strong className='justify-self-end'>
                      {recipe.nutrition.calories}
                    </strong>
                    <hr className='col-span-2 text-[#0000001A] mt-3 mb-3' />
                    <span className='text-[#00000099]'>Total Fat</span>
                    <strong className='justify-self-end'>
                      {recipe.nutrition.totalFat}
                    </strong>
                    <hr className='col-span-2 text-[#0000001A] mt-3 mb-3' />
                    <span className='text-[#00000099]'>Protein</span>
                    <strong className='justify-self-end'>
                      {recipe.nutrition.protein}
                    </strong>
                    <hr className='col-span-2 text-[#0000001A] mt-3 mb-3' />
                    <span className='text-[#00000099]'>Carbohydrate</span>
                    <strong className='justify-self-end'>
                      {recipe.nutrition.carbohydrate}
                    </strong>
                    <hr className='col-span-2 text-[#0000001A] mt-3 mb-3' />
                    <span className='text-[#00000099]'>cholesterol</span>
                    <strong className='justify-self-end'>
                      {recipe.nutrition.cholesterol}
                    </strong>
                    <hr className='col-span-2 text-[#0000001A] mt-3 mb-3' />
                  </div>
                  <p className='text-center text-[#00000099]  mt-20'>
                    adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua.{" "}
                  </p>
                </div>
              </div>
              <p className='mt-15 text-[#00000099] '>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default RecipeDetails;
