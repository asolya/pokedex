import { List } from "./components/List";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <main className="flex max-w-100 justify-center">
        <List />
      </main>
      <Footer />
    </>
  );
}

export default App;
