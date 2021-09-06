import client from '../client';
import { Recipe } from '../components/Recipe';

const HomePage = (props) => {
  const { recipes } = props;

  return (
    <div className='home'>
      <h1>Kokeboka!</h1>
      <div className='recipes-list'>
        {recipes.map((recipe) => {
          console.log(recipe);
          return recipe.slug.current ? (
            <Recipe key={recipe.slug.current} recipe={recipe} />
          ) : null;
        })}
      </div>
    </div>
  );
};

HomePage.getInitialProps = async () => {
  return { recipes: await client.fetch(`*[_type == 'recipe']`) };
};

export default HomePage;
