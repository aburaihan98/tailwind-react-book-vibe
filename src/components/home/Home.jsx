import React from "react";
import Hero from "../headers/Hero";
import Books from "./Books";

export default function Home() {
  return (
    <div className=" mb-24">
      <Hero />
      <h2 className="font-bold text-[40px] mb-9 text-center">Books</h2>
      <Books />
    </div>
  );
}
