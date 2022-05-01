import GlobalNav from "./components_sk/ui/GlobalNav";
import Nav from "./components_sk/ui/Nav";
import Product from "./components_sk/ui/Product";

function App() {
  return (
    <>
    <GlobalNav></GlobalNav>
    <Nav></Nav>
    <Product barName="mac-studio" name="Mac Studio" content="창조의 원동력." price="₩2,690,000부터" isNew="Y"></Product>
    <Product barName="studio-display" name="Studio Display" content="대담한 비전을 위한 캔버스." price="₩2,090,000부터" isNew="Y"></Product>
    <Product barName="macbook-pro" name="MacBook Pro" content="프로다운 막강한 파워." price="₩2,690,000부터" isNew="N"></Product>
    </>
  );
}

export default App;
