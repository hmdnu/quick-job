import { useEffect } from "react";
import { Vacancy } from "../components";
export default function Home() {
  useEffect(() => {
    document.title = "Quick Job | Home";
  }, []);

  return (
    <>
      <Vacancy />
    </>
  );
}
