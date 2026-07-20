import ThemeButton from "../components/ThemeButton";
import usePageTitle from "../hooks/usePageTitle";

const Home = () => {
  usePageTitle("Dalton Dayton");

  return (
    <main className="mx-auto max-w-2xl px-6 py-24">
      <div className="flex flex-col items-center gap-8 text-center">
        <div className="flex flex-col gap-4">
          <h1 className="text-5xl font-bold tracking-tight text-primary sm:text-6xl">
            Dalton Dayton
          </h1>
          <p className="flex items-center justify-center gap-2 text-xl text-secondary">
            Software Test Engineer
            <svg
              viewBox="0 0 32 24"
              className="h-5 w-7"
              style={{ color: "var(--color-accent)" }}
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-label="to"
              role="img"
            >
              <path d="M3 12h25" />
              <path d="m21 5 7 7-7 7" />
            </svg>
            Developer
          </p>
        </div>

        <p className="max-w-lg text-lg leading-relaxed text-secondary">
          Transitioning from test engineering to full-stack development.
          Building with React, C#, and Ruby on Rails.
        </p>

        <ThemeButton href="/projects">View Projects</ThemeButton>
      </div>
    </main>
  );
};

export default Home;
