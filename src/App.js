import Container from "react-bootstrap/Container";
import Card from "./components/card/Card";
import Header from "./components/header/Header";

function App() {
  return (
    <Container className="text-center mt-4">
      <Header />
      <Card/>
    </Container>
  );
}

export default App;
