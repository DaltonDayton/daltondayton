import ThemeButton from "@/components/ThemeButton";

export default function Home() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-24">
      <div className="flex flex-col items-center gap-8 text-center">
        <div className="flex flex-col gap-4">
          <h1 className="text-5xl font-bold tracking-tight text-primary sm:text-6xl">
            Dalton Dayton
          </h1>
          <p className="text-xl text-secondary">
            Software Test Engineer → Developer
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
}
