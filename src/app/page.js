"use client"; 

import { useState } from "react";
import TeamCode from "./components/TeamCode" 
import Login from "./components/Login"
import Soon from "./components/Soon"

export default function Home() {
  const [code,setCode]=useState("Hello");
  const [flag,setFlag]=useState(true);
  return (
    <main>
      <Soon />
      <TeamCode visible={flag} code={code}/>
      <Login />
    </main>
  );
}
