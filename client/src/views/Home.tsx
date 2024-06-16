import { useState } from "react";
import { DetailVacancy, Vacancy } from "../components";
import { DUMMY_VACANCY } from "../constant";

export default function Home() {
  const [selectedVacancy, setSelectedVacancy] = useState<number | null>(null);

  const handleSelectedVacancy = (key: number) => {
    setSelectedVacancy(key);
  };

  const selectedVacancyDetails =
    DUMMY_VACANCY.find((vacancy) => vacancy.key === selectedVacancy) || null;

export default function Home() {
  useEffect(() => {
    document.title = "Quick Job | Home";
  }, []);

  return (
    <>
      {/* md:flex md:justify-center lg:justify-start h-full xl:ml-[120px] mx-[20px] my-[20px] gap-[20px] */}
      <section className="mt-[100px] md:flex md:justify-center lg:justify-start h-full xl:ml-[120px] mx-[20px] my-[20px] gap-[20px]">
        <Vacancy vacancies={DUMMY_VACANCY} onSelect={handleSelectedVacancy} />
        <DetailVacancy vacancy={selectedVacancyDetails} />
      </section>
    </>
  );
}
