import {  Container } from "react-bootstrap";
import { person } from './data';
import { useEffect, useState } from "react";
import DatesCount from "./components/DatesCount";
import DatesList from "./components/DatesList";
import DatesActions from './components/DatesActions';


function App() {
  // const [render, setrender] = useState(true);
  // const [render, setrender] = useState(person);
  const [personData, setpersonData] = useState(person);

  const onDelete = () => {
    setpersonData([])
  }

  const onviewData = () => {
    setpersonData(person)
  }

  useEffect(()=> {
setpersonData([])
  },[])
  return (
    <div className="font color-body">
    <Container className="py-5">
  <DatesCount person={personData}/>

<DatesList person={personData}/>

<DatesActions onDelete={onDelete} onviewData={onviewData}/>
    </Container>
    </div>
  );
}

export default App;
