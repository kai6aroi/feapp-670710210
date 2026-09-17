import Button from './Button';

function ProfileCard({ name, nickname, major = 'ยังไม่ระบุสาขา', favorites = [] }) {
  return (
    <div className="flex flex-col justify-between rounded-2xl border border-slate-100 bg-white p-6 shadow-md transition hover:-translate-y-1 hover:shadow-xl">
      <div>
        <h3 className="text-lg font-bold text-slate-800">
          {name} <span className="text-cyan-600">({nickname})</span>
        </h3>
        <p className="mt-1 text-sm text-slate-500">สาขา: {major}</p>
        
        {/* แท็กของโปรดแบบ Pill */}
        <ul className="mt-4 flex flex-wrap gap-2">
          {favorites.map((item, index) => (
            <li
              key={index}
              className="rounded-full bg-cyan-50 px-3 py-1 text-xs font-medium text-cyan-700"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* ปุ่มโบนัสด้านล่างการ์ด */}
      <div className="mt-6 flex gap-2">
        <Button variant="primary">โปรไฟล์</Button>
        <Button variant="outline">ติดต่อนักศึกษา</Button>
      </div>
    </div>
  );
}

export default ProfileCard;