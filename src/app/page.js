"use client"; 

import { useState } from "react";
import TeamCode from "./components/Teamcode" 

export default function Home() {
  const [code,setCode]=useState("Hello");
  const [flag,setFlag]=useState(true);
  return (
    <main>
      <TeamCode visible={flag} code={code}/>
    </main>
  );
}
