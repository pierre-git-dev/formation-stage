
import PojectsSlidebar from "./component/ProjectsSlidebar.jsx";
import NewProject from "./component/NewProject.jsx";
function App() {
  return (
    <main className="h-screen my-8 flex gap-8">
      <PojectsSlidebar />
      <NewProject />
    </main>
  );
}

export default App;
