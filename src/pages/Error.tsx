import Header from "../components/Header";

const ErrorPage = () => {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-2xl px-6 py-24 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-primary">
          An error occurred!
        </h1>
        <p className="mt-4 text-lg text-secondary">Could not find this page.</p>
      </main>
    </>
  );
};

export default ErrorPage;
