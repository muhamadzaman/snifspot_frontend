import "./App.css";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "react-bootstrap/dist/react-bootstrap.min.js";
import AddSpotForm from "./components/Spot/AddSpotForm/AddSpotForm";
import SpotList from "./components/Spot/SpotList/SpotList";
import Header from "./components/navbar/Navbar";
import SpotDetails from "./components/Spot/SpotList/SpotDetails";
import EditSpotForm from "./components/Spot/EditSpot/EditSpotForm";
import AddReview from "./components/Reviews/AddReview";
import EditReview from "./components/Reviews/EditReview";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route index element={<SpotList />} />
        <Route path="/spots" element={<SpotList />} />
        <Route path="/spots/:id" element={<SpotDetails />} />
        <Route path="/addSpot" element={<AddSpotForm />} />
        <Route path="/spots/:id/editSpot" element={<EditSpotForm />} />
        <Route path="/editreview" element={<EditReview />} />
        <Route path="/addReview" element={<AddReview />}></Route>
      </Routes>
    </>
  );
}

export default App;
