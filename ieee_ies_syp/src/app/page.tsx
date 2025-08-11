import type { Metadata } from "next";
import Home from "./Home/page";


export const metadata: Metadata = {
  title: "IEEE IES SYP",
  description: "",
};


function Page() {
  return (
    <Home/>
  );
}

export default Page;