import "./delicious.scss";
import recipesData from "../../data/recipes.json";
import heartIcon from "/src/assets/images/recipes/heart.svg";
import redHeart from "/src/assets/images/recipes/redheart.svg";

function Delicious() {
  const handleToggleFavorite = (e) => {
    console.log(e.target.src)
    if(e.target.src === heartIcon){
      e.target.src = redHeart
    }else{
      e.target.src = heartIcon
    }
  };
  return (
    <section className='delicious'>
      <div className='container'>
        <div className='delicious__content'>
          <h2 className='delicious__title'>
            Try this delicious recipe to make your day
          </h2>
          <p className='delicious__description'>
            Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqut enim ad minim
          </p>
          <div className='delicious__block'>
            {recipesData.map((recipe, index) => (
                recipe.advertising ?(""): (
              <div key={index} className='delicious__item'>
                <img
                  src={recipe.image}
                  alt=""
                  className='delicious__item_image'
                />

                <h3 className='delicious__name'>{recipe.title}</h3>
                <div className='delicious__info'>
                  <img
                    src={recipe.iconTime}
                    alt='Time Icon'
                    className='delicious__icon'
                  />
                  <span>{recipe.textTime}</span>
                  <img
                    src={recipe.iconKnife}
                    alt='Knife Icon'
                    className='delicious__icon'
                  />
                  <span>{recipe.textKnife}</span>
                </div>
                <div className='delicious__like'>
                  <img
                      src={heartIcon}
                      onClick={(e) => handleToggleFavorite(e)}
                    className='delicious__like--icon'
                  />
                </div>
              </div>)
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Delicious;
