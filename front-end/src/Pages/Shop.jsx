import React from "react";
import Hero from "../Components/Hero/Hero";
import Popular from "../Components/Popular/Popular";
import Offers from "../Components/Offers/Offers";
import Collections from "../Components/Collections/Collections";
import NewsLetters from "../Components/NewsLetters/NewsLetters";

export default function Shop() {
  return (
    <div>
      <Hero />
      <Popular />
      <Offers />
      <Collections />
      <NewsLetters />
    </div>
  );
}
