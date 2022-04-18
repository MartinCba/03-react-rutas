import ConceptosBasicos from "./components/ConceptosBasicos";
import SongSearch from "./components/SongSearch";

function App() {
  return (
    <div>
      <h1>React Router</h1>
      <a
        href="https://reactrouter.com/web/guides/quick-start"
        target="_blank"
        rel="noreferrer"
      >
        Documentación
      </a>
      <hr />
      {/* <ConceptosBasicos /> */}
      <hr />
      <SongSearch />
    </div>
  );
}

export default App;
