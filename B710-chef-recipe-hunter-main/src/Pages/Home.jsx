import React from "react";
import Nav from "../components/Nav";
import Banner from "../Components/Banner";
import Menu from "../Components/Menu";
import Footer from "../Components/Footer";
import Feedback from "../Components/Feedback";
import Chefs from "./Chefs";
import ChefRecipes from "./ChefRecipes";
import RecipesDetails from "./RecipesDetails";
import Blogs from "./Blogs";

export default function Home() {
  return (
    <div>
      <Nav />
      <h1 className="font-bold text-4xl text-center mt-10">
        Welcome at <br /> BLACK CUMIN BANGLADESH
      </h1>
      <Banner />

      <h1 className="font-bold text-4xl text-center mt-10 mb-10">
        All CHEF'S FOR <br /> BLACK CUMIN BANGLADESH
      </h1>
      <Chefs/>

      <h1 className="font-bold text-4xl text-center mt-10 mb-10">
        All CHEF'S RECIPES FOR <br /> BLACK CUMIN BANGLADESH
      </h1>


    <ChefRecipes/>
    <h1 className="font-bold text-4xl text-center mt-10 mb-10">
        RECIPES DETAILS PAGE
      </h1>
      <RecipesDetails/>
      <h1 className="font-bold text-4xl text-center mt-10 mb-10">
        BLOGS DETAILS PAGE
      </h1>

<Blogs/>








      <h1 className="font-bold text-4xl text-center mt-10 mb-10">
        All MENU FOR <br /> BLACK CUMIN BANGLADESH
      </h1>
      <Menu/>
      <h1 className="font-bold text-4xl text-center mt-10 mb-10">
        FEEDBACK CORNER
      </h1>
      <Feedback/>

      <h1 className="font-bold text-4xl text-center mt-10 mb-10">
        FOOTER
      </h1>
      <Footer/>

    </div>
  );
}
