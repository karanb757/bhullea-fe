import { values } from "@/data/values";

export function ValueIconRow() {
  return (
    <ul className="grid grid-cols-2 gap-8 sm:grid-cols-5">
      {values.map(({ label, icon: Icon }) => (
        <li key={label} className="flex flex-col items-center gap-3">
          <Icon className="h-8 w-8 text-ink/80" strokeWidth={1.25} />
          <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-ink/80">{label}</span>
        </li>
      ))}
    </ul>
  );
}