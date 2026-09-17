import MovieCard from '../components/MovieCard';
import MovieGallery from '../components/MovieGallery';

function Playground() {
  return (
    <div className="mx-auto max-w-3xl space-y-10 p-8">
      <h1 className="text-2xl font-bold">สนามทดลอง 🧪</h1>
      <MovieCard title="Parasite" year={2019} />
      <MovieGallery />
      {/* เขียน component ใหม่เสร็จ ก็ import แล้วมาวางตรงนี้ */}
    </div>
  );
}

export default Playground;