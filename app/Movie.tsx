import Link from "next/link";
import Image from "next/image";
import { MovieInterface } from "@/app/interface/Movie";

interface  MovieProps {
  movie: MovieInterface
}

export default function Movie({ movie } : MovieProps) {
  const imagePath = "https://image.tmdb.org/t/p/original";
  return (
    <Link href={`/${movie.id}`}>
      <div
        className="group w-full [perspective:1000px]"
        style={{ height: "28rem" }}
      >
        <div className="relative h-full w-full transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
          <div className="absolute inset-0">
            <Image
              src={imagePath + movie.poster_path}
              width={800}
              height={800}
              alt={movie.title}
              priority
            />
          </div>
          <div className="absolute inset-0 h-full w-full bg-black/80 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
            <div className="flex min-h-full flex-col items-center justify-center">
              <h1 className="text-3xl font-bold">{movie.title}</h1>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
