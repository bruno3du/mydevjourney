import { type ReactNode } from 'react'

export const TypographyH2: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
      {children}
    </h2>
  )
}
