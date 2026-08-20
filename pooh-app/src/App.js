import React from "react";
import Header from './components/Header';
import Footer from './components/Footer';
import MovieList from './components/MovieList';
import Card from "./components/Card";
import Greeting from "./Greeting";
const students = [
  { id: 1, name: 'ฝน',   year: 3 },
  { id: 2, name: 'เต้ย', year: 2 },
  { id: 3, name: 'มายด์', year: 4 },
];

function App() {
  return (
    <div>
      <Card title="ประกาศ">
  <p>สัปดาห์หน้าเรียนเรื่อง <b>State & Forms</b></p>
  <p>อย่าลืม push การบ้านขึ้น GitHub!</p>
</Card>
    </div>
  );
}

export default App;