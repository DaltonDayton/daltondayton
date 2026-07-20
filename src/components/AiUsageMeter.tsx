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

const AiUsageMeter = ({ level }: { level: 0 | 1 | 2 | 3 }) => {
  const { label, description } = LEVELS[level];

  return (
    <div
      className="flex items-center gap-3 text-sm text-secondary"
      title={description}
    >
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
      <span className="font-medium text-primary">{label}</span>
    </div>
  );
};

export default AiUsageMeter;
