const LEVELS = [
  {
    label: "Hand-written",
    description: "No AI involvement.",
  },
  {
    label: "AI-assisted",
    description: "Autocomplete and lookup level; all design and code mine.",
  },
  {
    label: "AI pair-programmed",
    description: "I drove architecture and review; AI wrote significant code.",
  },
  {
    label: "Vibecoded",
    description: "I described what I wanted and steered; AI built it.",
  },
];

const AiUsageMeter = ({
  level,
  note,
}: {
  level: 0 | 1 | 2 | 3;
  note?: string;
}) => {
  const { label, description } = LEVELS[level];

  return (
    <div className="flex items-center gap-3 text-sm text-secondary">
      <span>AI collaboration:</span>
      <span className="flex items-center gap-1">
        {[0, 1, 2].map((index) => (
          <span
            key={index}
            className="h-2.5 w-2.5 rounded-full border"
            style={
              index < level
                ? {
                    backgroundColor: "var(--color-accent)",
                    borderColor: "var(--color-accent)",
                  }
                : { borderColor: "var(--border-secondary)" }
            }
          />
        ))}
      </span>
      <span className="group relative">
        <button
          type="button"
          className="cursor-help font-medium text-primary underline decoration-border-secondary decoration-dotted underline-offset-4"
        >
          {label}
        </button>
        <span
          role="tooltip"
          className="pointer-events-none absolute bottom-full left-1/2 z-10 mb-2 w-max max-w-64 -translate-x-1/2 rounded-md border border-border bg-surface px-3 py-2 text-xs text-secondary opacity-0 shadow-sm transition-opacity group-focus-within:opacity-100 group-hover:opacity-100"
        >
          {note ?? description}
        </span>
      </span>
    </div>
  );
};

export default AiUsageMeter;
