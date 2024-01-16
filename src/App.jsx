
import PojectsSlidebar from "./component/ProjectsSlidebar.jsx";
import NewProject from "./component/NewProject.jsx";
import NoProjectSelected from "./component/NoProjectSelected.jsx";

function App() {
  return (
    <main className="h-screen my-8 flex gap-8">
      <PojectsSlidebar />
      <NoProjectSelected />
    </main>
  );
}

export default App;
