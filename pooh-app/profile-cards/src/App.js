import ProfileCard from './ProfileCard';

const members = [
  {
    id: 1,
    name: 'สมชาย ใจดี',
    nickname: 'ชาย',
    major: 'วิทยาการคอมพิวเตอร์',
    favorites: ['ดูหนัง', 'เขียนโค้ด', 'เล่นเกม'],
  },
  {
    id: 2,
    name: 'สมหญิง รักเรียน',
    nickname: 'หญิง',
    major: 'เทคโนโลยีสารสนเทศ',
    favorites: ['อ่านหนังสือ', 'ฟังเพลง', 'ถ่ายภาพ'],
  },
  {
    id: 3,
    name: 'อนันต์ สายลุย',
    nickname: 'นัน',
    major: 'วิศวกรรมซอฟต์แวร์',
    favorites: ['เล่นบาส', 'ท่องเที่ยว', 'กาแฟ'],
  },
];

function App() {
  return (
    <div className="min-h-screen bg-slate-50 p-8">
      <h1 className="mb-8 text-center text-3xl font-bold text-slate-800">
        สมาชิกกลุ่มของเรา
      </h1>
      
      {/* Grid Layout: มือถือ 1 / แท็บเล็ต 2 / โน้ตบุ๊ก 3 */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {members.map((m) => (
          <ProfileCard
            key={m.id}
            name={m.name}
            nickname={m.nickname}
            major={m.major}
            favorites={m.favorites}
          />
        ))}
      </div>
    </div>
  );
}

export default App;