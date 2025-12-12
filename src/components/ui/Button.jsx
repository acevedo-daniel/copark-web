import { cn } from "../../lib/utils";

export const Button = ({ className, variant = "primary", ...props }) => {
  const baseStyles =
    "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none h-9 px-6  py-2";

  const variants = {
    primary: "bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] shadow-xs text-[var(--color-text-primary)]",
    secondary: "bg-[var(--color-bg-muted)] text-[var(--color-text-primary)] hover:brightness-95",
    outline: "border border-[var(--color-text-primary)] hover:bg-[var(--color-bg-muted)] text-[var(--color-text-primary)]",
    ghost: "hover:bg-[var(--color-bg-muted)] text-[var(--color-text-secondary)]",
    danger: "bg-[var(--color-danger)] text-white hover:bg-[var(--color-danger-hover)]",
  };

  return (
    <button
      className={cn(baseStyles, variants[variant], className)}
      {...props}
    />
  );
};
