import { useEffect } from "react";
import { useState } from "react";
// import categoriesData from "/foodieland-react/data/categories.json?url";
import "./categories.scss";

function Categories() {
  const [categories, setCategories] = useState([]);
  const [showAll, setShowAll] = useState(false);
  useEffect(() => {
    fetch("/foodieland-react/data/categories.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch categories");
        }
        return response.json();
      })
      .then((data) => {
        setCategories(data);
      });
  }, []);
  console.log(categories);
  const displayedCategories = showAll ? categories : categories.slice(0, 6);
  return (
    <section className='categories'>
      <div className='container'>
        <div className='categories__content'>
          <div className='categories__part'>
            <h2 className='categories__title'>Categories</h2>
            <button
              className='categories__btn'
              onClick={() => setShowAll((prev) => !prev)}
            >
              {showAll ? "Show less" : "View All Categories"}
            </button>
          </div>
          <div className='categories__menu'>
            {displayedCategories.map((category, index) => (
              <a href='/' key={index} className='categories__item'>
                <img src={category.image} />
                <h3
                  style={{
                    background: `linear-gradient(to top, ${category.color}, #70824600)`,
                  }}
                >
                  {category.title}
                </h3>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Categories;
