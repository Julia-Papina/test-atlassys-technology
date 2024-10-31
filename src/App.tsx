import Header from "./components/header/header";
import SideBar from "./components/side-bar/side-bar";
import FormProfile from "./components/form-person/form-person";
import InputSearch from "./components/input-search/input-search";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <div className="input-container">
        <InputSearch />
      </div>
      <main className="wrapper">
        <SideBar />
        <FormProfile />
      </main>
    </>
  );
}

export default App;
