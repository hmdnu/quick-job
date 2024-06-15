const ErrorPage = () => {
  return (
    <section className="grid h-dvh content-center p-10 md:p-0">
      <div className="mx-auto">
        <img
          src="/img/larry-404.svg"
          alt="404 Not Found"
          className="size-[400px]"
        />
        <div className="grid justify-items-center md:justify-items-start">
          <h1 className="text-5xl-s text-green-90">Ooops !</h1>
          <p className="text-green-90 text-xl-s">Halaman tidak tersedia</p>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
