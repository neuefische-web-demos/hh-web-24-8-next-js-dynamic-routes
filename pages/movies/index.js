import Link from "next/link";
import { movies } from "../../lib/data";
import { useRouter } from "next/router";

export default function Movies() {
  const router = useRouter();

  return (
    <>
      <h1>List of Movies</h1>
      <ul>
        {movies.map((movie) => (
          <li key={movie.slug}>
            <Link href={`/movies/${movie.slug}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
      <button
        onClick={() => {
          if (confirm("Are you Aquaman?")) {
            router.push("/movies/aquaman");
          }
        }}
        type="button"
      >
        Are you Aquaman?
      </button>
    </>
  );
}
