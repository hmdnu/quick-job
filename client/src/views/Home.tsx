import { useEffect, useState } from "react";
import { DetailVacancy, Vacancy } from "../components";
import Chat from "../components/Chat";
import { DUMMY_VACANCY } from "../constant";

export default function Home() {
  const [selectedVacancy, setSelectedVacancy] = useState<number | null>(null);

  const handleSelectedVacancy = (key: number) => {
    setSelectedVacancy(key);
  };

  const selectedVacancyDetails =
    DUMMY_VACANCY.find((vacancy) => vacancy.key === selectedVacancy) || null;

  useEffect(() => {
    document.title = "Quick Job | Home";
  }, []);

  return (
    <>
      <section className="mt-[100px] md:flex justify-center xl:justify-start h-full xl:ml-[120px] mx-[20px] my-[20px] gap-[20px]">
        <Vacancy vacancies={DUMMY_VACANCY} onSelect={handleSelectedVacancy} />
        <DetailVacancy vacancy={selectedVacancyDetails} />
        <Chat />
      </section>
    </>
  );
}
