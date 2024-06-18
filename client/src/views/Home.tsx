import { useEffect } from "react";
import { DetailVacancy, Vacancy } from "../components";
import Chat from "../components/Chat";

export default function Home() {
  useEffect(() => {
    document.title = "Quick Job | Home";
  }, []);

  return (
    <>
      <section className="flex">
        <Vacancy />
        <DetailVacancy />
        <div className="hidden sm:flex">
          <Chat />
        </div>
      </section>
    </>
  );
}
