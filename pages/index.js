import { useEffect, useState } from "react";
import Hero from "../components/Hero";
import Nav from "../components/nav";

export default function IndexPage() {
  return (
    <div>
      <Nav />
      <div className="md:p-8 py-8 p-3">
        <Hero />
        <Hero />
      </div>
    </div>
  );
}
