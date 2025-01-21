import "./recipes.scss";
import recipesData from "../../data/recipes.json";
import heartIcon from "/src/assets/images/recipes/heart.svg";
import redHeart from "/src/assets/images/recipes/redheart.svg";

function Recipes() {
  const handleToggleFavorite = (e) => {
    console.log(e.target.src)
    if(e.target.src === heartIcon){
      e.target.src = redHeart
    }else{
      e.target.src = heartIcon
    }
  };
  return (
    <section className='recipes'>
      <div className='container'>
        <div className='recipes__content'>
          <h2 className='recipes__title'>Simple and tasty recipes</h2>
          <p className='recipes__description'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className='recipes__items'>
            {recipesData.map((recipe, i) =>
              recipe["advertising"] ? (
                <a key={i} href='/' className='recipes__item advertising'>
                  <img src={recipe.advertising} />
                </a>
              ) : (
                <div key={i} className='recipes__item'>
                  <img
                    src={recipe.image}
                    alt={recipe.title}
                    className='recipes__item_image'
                  />

                  <h3 className='recipes__name'>{recipe.title}</h3>
                  <div className='recipes__info'>
                    <img
                      src={recipe.iconTime}
                      alt='Time Icon'
                      className='recipes__icon'
                    />
                    <span>{recipe.textTime}</span>
                    <img
                      src={recipe.iconKnife}
                      alt='Knife Icon'
                      className='recipes__icon'
                    />
                    <span>{recipe.textKnife}</span>
                  </div>
                  <div className='recipes__like'>
                    <img
                      id={recipe.id}
                      src={heartIcon}
                      onClick={(e) => handleToggleFavorite(e)}
                      className='recipes__like--icon'
                    />
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Recipes;
