import "./hero.scss";
import recipesData from "../../data/recipes.json";
import badgeIcon from "../../assets/images/hero/Badge.svg";
import playCircle from "../../assets/images/hero/PlayCircle.svg";
import hotRecipesIcon from "../../assets/images/hero/hotRecipesIcon.svg";

function Hero() {
  if (!recipesData || recipesData.length === 0) {
    return <p>Data is not available</p>;
  }

  const recipe = recipesData[0];

  return (
    <section className="hero">
      <div className="container">
        <div className="hero__content">
          <div className="hero__block hero__block_left">
            <div className="hero__name">
              <img src={hotRecipesIcon} alt="Hot Recipes Icon" className="hero__icon" />
              <p className="hero__name--text">Hot Recipes</p>
            </div>
            <h1 className="hero__title">{recipe.title}</h1>
            <p className="hero__description">{recipe.description}</p>
            <div className="hero__links">
              <a href="#" className="hero__link">
                <img src={recipe.iconTime} alt="Time icon" className="hero__link--icon" />
                <p className="hero__link--text">30 Minutes</p>
              </a>
              <a href="#" className="hero__link">
                <img src={recipe.iconKnife} alt="Knife icon" className="hero__link--icon" />
                <p className="hero__link--text">Chicken</p>
              </a>
            </div>
            <div className="hero__chef">
              <div className="hero__chef_profile">
                <img src={recipe.authorPhoto} alt="Author" className="hero__chef--photo" />
                <p className="hero__chef_info">
                  John Smith
                  <span className="hero__chef_name">15 March 2022</span>
                </p>
              </div>
              <button className="hero__recipes">
                <p className="hero__recipes--text">View Recipes</p>
                <img className="hero__recipes_play" src={playCircle} alt="Play button" />
              </button>
            </div>
          </div>
          <div className="hero__block hero__block_right">
            <img className="hero__badge" src={badgeIcon} alt="Badge" />
            <img
              className="hero__maskpng"
              src={new URL(recipe.image, import.meta.url).href}
              alt="Mask Group"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
