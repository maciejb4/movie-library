import Image from "next/image";
import { Rating, StarIcon } from "@/lib/mui";

export default async function MovieDetail({ params }) {
  const { movie } = params;
  const imagePath = "https://image.tmdb.org/t/p/original";
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/${movie}?api_key=${process.env.API_KEY}`
  );
  const res = await data.json();
  return (
    <div>
      <div className="container p-8 mx-auto xl:px-0 flex flex-wrap ">
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8">
            <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
              {res.title}
            </h1>
            <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
              {res.overview}
            </p>

            <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
              <h2 className="bg-green-600 my-2 px-8 py-4 text-lg rounded">
                {res.release_date}
              </h2>
              {res.homepage && (
                <a href={`${res.homepage}`} target="_blank">
                  <h2 className="bg-blue-600 my-2 px-8 py-4 text-lg rounded">
                    Movie Page
                  </h2>
                </a>
              )}
              <Rating
                name="vote average"
                max={10}
                precision={0.5}
                value={res.vote_average}
                readOnly
                sx={{"& .MuiRating-iconEmpty": {
                    color: "rgb(250, 175, 0)"
                  } }}
              />
            </div>
          </div>
        </div>
        <div className="flex-col items-center justify-center w-full lg:w-1/2">
          <Image
            src={imagePath + res.backdrop_path}
            width="700"
            height="700"
            alt="Movie illustration"
            loading="eager"
          />
          {res.genres.map((el) => (
            <span
              key={el.id}
              className="inline-block whitclassNamee-nowrap rounded-[0.27rem] bg-neutral-800 px-[0.65em] pb-[0.25em] pt-[0.35em] text-center align-baseline text-base font-bold leading-none text-neutral-50 dark:bg-neutral-900 mt-6 mr-4"
            >
              {el.name}
            </span>
          ))}
        </div>
      </div>
      <div className="container p-8 mx-auto xl:px-0 flex flex-wrap "></div>
    </div>
  );
}
