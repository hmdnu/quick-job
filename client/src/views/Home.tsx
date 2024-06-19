import { useEffect } from "react";
import { Vacancy } from "../components";
import Chat from "../components/Chat";

export default function Home() {
  useEffect(() => {
    document.title = "Quick Job | Home";
  }, []);

  return (
    <>
      <section className="flex">
        <div className="mr-[20px]">
          <Vacancy />
        </div>
        {/* <DetailVacancy /> */}
        <div className="hidden sm:flex">
          <Chat />
        </div>
      </section>
    </>
  );
}
