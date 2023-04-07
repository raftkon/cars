import React from "react";
import CarForm from "./components/CarForm";
import CarList from "./components/CarList";
import CarSearch from "./components/CarSearch";
import CarValue from "./components/CarValue";

const App = () => {
  return (
    <div>
      <CarForm />
      <CarList />
      <CarValue />
      <CarSearch />
    </div>
  );
};

export default App;
