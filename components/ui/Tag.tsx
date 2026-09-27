type TagProps = {
  children: string
  className?: string
}

export function Tag({ children, className = "" }: TagProps) {
  return (
    <span
      className={`inline-block px-2.5 py-0.5 text-xs font-mono text-zinc-400 bg-zinc-900 border border-zinc-800 rounded leading-5 ${className}`}
    >
      {children}
    </span>
  )
}
