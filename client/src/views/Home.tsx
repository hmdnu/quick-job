import { useEffect } from "react";
import { Vacancy } from "../components";
import Chat from "../components/Chat";

export default function Home() {
  useEffect(() => {
    document.title = "Quick Job | Home";
  }, []);

  return (
    <main className="mt-[120px] w-fit m-auto">
      <Vacancy />
      <div className="hidden sm:flex">
        <Chat />
      </div>
    </main>
  );
}
