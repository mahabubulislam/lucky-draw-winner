import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Container from './components/Container/Container';
import Question from './components/Question/Question';
import { useEffect } from 'react';
import AOS from 'aos'
import "aos/dist/aos.css";


function App() {
  useEffect(()=>{
    AOS.init();
  },[])
  return (
    <div>
      <Header></Header>
      <Container></Container>
      <Question></Question>
    </div>
  );
}

export default App;
