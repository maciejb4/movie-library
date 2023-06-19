import Movie from "./Movie";
export default async function Home() {
    const data = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`);
    const res = await data.json();
    console.log(res);
  return (
    <main>
        <div className="grid gap-20 grid-cols-fluid">
            {res.results.map((movie) => (
                <Movie key={movie.id} movie={movie}/>
                ))}
        </div>
    </main>
  )
}
