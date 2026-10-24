import { Container } from "../components/Container/Container";
import { Header } from "../widgets/Header/Header";

function App() {
  return (
    <Container>      
      <Header isMoodLogged={false}/>
    </Container>
  );
}

export default App;
