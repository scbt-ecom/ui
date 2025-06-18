import { useState } from 'react'
import type { FormStepSetter } from '../types'

export type UseRatingReturn = {
  selectedRating: number
  hoveredRatings: number
  handleMouseEnter: (index: number) => void
  handleMouseLeave: () => void
  handleSelectRating: (index: number) => void
}

export const useRating = (setFormStep: FormStepSetter): UseRatingReturn => {
  const [selectedRating, setSelectedRating] = useState(0)
  const [hoveredRatings, setHoveredRatings] = useState(0)

  const handleMouseEnter = (index: number) => {
    setHoveredRatings(index)
  }

  const handleMouseLeave = () => {
    setHoveredRatings(selectedRating)
  }

  const handleSelectRating = (index: number) => {
    setSelectedRating(index)
    setFormStep('review')
  }

  return {
    selectedRating,
    hoveredRatings,
    handleMouseEnter,
    handleMouseLeave,
    handleSelectRating
  }
}
