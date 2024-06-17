import { useEffect } from "react";
import { DetailVacancy, Vacancy } from "../components";

export default function Home() {
  useEffect(() => {
    document.title = "Quick Job | Home";
  }, []);

  return (
    <>
      <section className="flex">
        <Vacancy />
        <DetailVacancy />
      </section>
    </>
  );
}
