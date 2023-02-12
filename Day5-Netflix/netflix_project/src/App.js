import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MovieGallery from "./Components/MovieGallery";
import Navbars from "./Components/Navbars";

function App() {
  return (
    <>
      <Navbars />
      <MovieGallery name="harry&potter" />
      <MovieGallery name="lord&of&the&rings" />
      <MovieGallery name="star&wars" />
    </>
  );
}

export default App;
