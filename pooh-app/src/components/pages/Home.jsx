import MovieCard from '../components/MovieCard';
import { movies } from '../data/data';

function Home() {
  return (
    <div className="p-8 text-center">
      <h1 className="text-3xl font-bold text-slate-800">🏠 หน้าแรก</h1>
      <p className="mt-2 text-slate-500">ยินดีต้อนรับสู่ MovieHub</p>

      <h2 className="mt-10 text-xl font-bold text-slate-700">หนังแนะนำ</h2>
      <div className="mx-auto mt-4 grid max-w-4xl gap-6 text-left md:grid-cols-3">
        {movies.slice(0, 3).map(m => (
          <MovieCard key={m.id} title={m.title} year={m.year} poster={m.poster} />
        ))}
      </div>
    </div>
  );
}

export default Home;