export const allTooltipPlacements = ['top', 'right', 'bottom', 'left'] as const

export type TooltipPlacement = (typeof allTooltipPlacements)[number]
