import { useRouter } from 'next/router';

export const Recipe = ({ recipe }) => {
  const router = useRouter();

  return (
    <div
      className='recipe'
      onClick={() => router.push('/oppskrift/' + recipe.slug.current)}
    >
      <h3>{recipe.name}</h3>
      <p>{recipe.description}</p>
      <p>Det tar {recipe.duration} min å lage denne retten</p>
    </div>
  );
};
