import Image from "next/image";

export default async function MovieDetail({ params }) {
  const { movie } = params;
  const imagePath = "https://image.tmdb.org/t/p/original";
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/${movie}?api_key=${process.env.API_KEY}`
  );
  const res = await data.json();
  return (
    <div>
      <h2 className="text-2xl">{res.title}</h2>
      <h2 className="text-lg">{res.release_date}</h2>
      <h2 className="text-lg">Runtime: {res.runtime} minutes</h2>
      <h2 className="bg-green-600 inline-block my-2 py-2 px-4 rounded">
        {res.status}
      </h2>
      <Image
        className="my-12"
        src={imagePath + res.backdrop_path}
        width={1000}
        height={1000}
        alt={res.id}
        priority
      />
        <h1>{res.overview}</h1>
    </div>
  );
}
