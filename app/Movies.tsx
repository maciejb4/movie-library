import Movie from "./Movie";

const getMovies = async () => {
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`
  );
  return await data.json();
};
export default async function Movies() {
  const res = await getMovies();
  return (
    <div className="grid gap-20 grid-cols-fluid">
      {res.results.map((movie) => (
        <Movie key={movie.id} movie={movie} />
      ))}
    </div>
  );
}
