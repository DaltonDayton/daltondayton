import type { Project } from "./types";

export const PROJECTS: Project[] = [
  {
    slug: "quill",
    name: "Quill",
    summary:
      "A declarative dotfiles and machine-setup tool written in Go. TOML modules describe packages, config symlinks, and services; host profiles apply them across Arch Linux and WSL through a Bubble Tea TUI that installs everything from a single bootstrap script.",
    description: [
      "Quill grew out of maintaining the same development environment across multiple machines: an Arch Linux desktop, a laptop, and a WSL setup at work. Instead of a pile of shell scripts, it treats machine setup as declarative data. Each module is a directory with a module.toml describing the packages it needs, the config files it symlinks, and the services it enables, and host profiles pick which modules apply to which machine.",
      "The CLI is written in Go using the Charm stack. A Bubble Tea TUI presents the module list with live status, so a fresh machine goes from bare install to fully configured by piping one bootstrap script into bash and picking modules from the menu. The runner is idempotent: re-running quill reconciles drift instead of blindly reinstalling.",
      "Modules currently cover the full environment, from the Hyprland desktop session and Neovim config to language runtimes, fonts, gaming tooling, and peripheral drivers. Arch is the primary target, with WSL/Ubuntu supported through the same os-gated modules.",
    ],
    image: "/images/quill.png",
    tech: ["Go", "Bubble Tea", "TOML", "Linux"],
    role: "Solo dev",
    links: {
      repo: "https://github.com/DaltonDayton/dotfiles",
    },
  },
  {
    slug: "react-portfolio",
    name: "React Portfolio",
    summary: "The portfolio you're currently viewing.",
    description: [
      "This site started life as a Next.js app and was rebuilt from scratch in React with Vite, both as a portfolio and as deliberate practice with the patterns from my React coursework: a data router with a shared root layout, NavLink-based navigation, context for theming, and custom hooks.",
      "The theme system is built on CSS variables mapped into Tailwind. A pre-hydration script applies the saved theme before React mounts, so there is no flash of the wrong theme, and a context provider keeps the toggle state in sync with localStorage and the system preference.",
      "The contact page is a controlled form that validates on submit and posts messages to a Firebase Realtime Database over its REST API, with write-only security rules so submissions stay private. The site deploys to Vercel as a static SPA with a rewrite rule handling client-side routes.",
    ],
    image: "/images/Portfolio.png",
    tech: ["React", "TypeScript", "Vite", "React Router", "Tailwind CSS"],
    role: "Solo dev",
    links: {
      demo: "https://www.daltondayton.com",
      repo: "https://github.com/daltondayton/daltondayton",
    },
  },
  {
    slug: "pomera-pomodoro-timer",
    name: "Pomera",
    summary:
      "A cross-platform Pomodoro timer built with Flutter. Configurable work and break intervals, audio and system notifications, a wakelock to keep the screen alive, and a circular countdown display.",
    description: [
      "Pomera is a Pomodoro timer built with Flutter, sharing one codebase across desktop and mobile. Work and break intervals are configurable, and a circular countdown display shows progress through the current session at a glance.",
      "State management uses Riverpod to keep timer logic separate from the UI. When a session ends, the app fires both audio cues and system notifications, and a wakelock keeps the screen alive during active sessions so the timer stays visible.",
    ],
    image: "/images/pomera.png",
    tech: ["Flutter", "Dart", "Riverpod"],
    role: "Solo dev",
    links: {
      repo: "https://github.com/DaltonDayton/pomodorotimer",
    },
  },
  {
    slug: "asteroids",
    name: "Asteroids",
    summary:
      "A clone of the classic Asteroids arcade game written in Python with Pygame. Control a spaceship to move and shoot, destroying asteroids to survive as long as possible.",
    description: [
      "A clone of the classic Asteroids arcade game written in Python with Pygame. The ship rotates and thrusts under player control, shots destroy asteroids, and large asteroids split into smaller, faster fragments when hit.",
      "The project is an exercise in game-loop fundamentals: frame timing, keyboard input, sprite groups, and circle-based collision detection between shots, asteroids, and the player.",
    ],
    image: "/images/asteroids.png",
    tech: ["Python", "Pygame"],
    role: "Solo dev",
    links: {
      repo: "https://github.com/DaltonDayton/asteroids",
    },
  },
];
