import React,{useState} from "react";
import Birthdata from "./Birthdata";
import List from "./List";


function App() {
  const [people,setpeople]= useState(Birthdata);
  return (
    <main>
      <section className="container">
        <h3>{people.length} birthdays today</h3>
        <List people={people}/>
        <button onClick={()=> setpeople([])}>Clear All</button>
      </section>
    </main>
  );
}

export default App;
