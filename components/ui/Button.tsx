import Link from "next/link"
import { ReactNode } from "react"

type ButtonProps = {
  children: ReactNode
  href?: string
  onClick?: () => void
  variant?: "primary" | "secondary" | "ghost"
  external?: boolean
  className?: string
  disabled?: boolean
  "aria-label"?: string
}

export function Button({
  children,
  href,
  onClick,
  variant = "primary",
  external,
  className = "",
  disabled,
  "aria-label": ariaLabel,
}: ButtonProps) {
  const base =
    "inline-flex items-center gap-2 px-4 py-2 text-sm font-medium tracking-wide transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-400 focus-visible:outline-offset-2 disabled:opacity-50 disabled:pointer-events-none whitespace-nowrap"

  const variants: Record<string, string> = {
    primary:
      "bg-cyan-400 text-zinc-950 hover:bg-cyan-300 font-semibold",
    secondary:
      "border border-zinc-700 text-zinc-300 hover:border-zinc-500 hover:text-zinc-100 bg-transparent",
    ghost:
      "text-zinc-400 hover:text-zinc-100",
  }

  const classes = `${base} ${variants[variant]} ${className}`

  if (href) {
    const ext = external
      ? { target: "_blank" as const, rel: "noopener noreferrer" }
      : {}
    return (
      <Link href={href} className={classes} aria-label={ariaLabel} {...ext}>
        {children}
      </Link>
    )
  }

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={classes}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  )
}
