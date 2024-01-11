import { createContext } from 'react'

// Make sure the shape of the default value passed to
// createContext matches the shape that the consumers expect!
export const StepHikeContext = createContext<{
  activeStep: undefined | { titleId: string; step: number }
  steps: any
}>({
  activeStep: undefined,
  steps: undefined,
})
