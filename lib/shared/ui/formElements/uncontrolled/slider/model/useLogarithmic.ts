interface UseLogarithmicProps {
  min: number
  max: number
  defaultSum: number
}

export const useLogarithmic = ({ min, max, defaultSum }: UseLogarithmicProps) => {
  const initSum = Math.ceil((max - min) * 0.2 + min)
  const startSum = initSum > defaultSum ? defaultSum : initSum

  const fromSlider = (value: number) => {
    return round(Math.round(Math.pow(10, value)), 2)
  }

  const toSlider = (value: number) => {
    return Math.log(value) / Math.log(10)
  }

  const round = (sum: number, threshold = 2) => {
    const fixedSum = sum.toFixed(0)
    const digits = fixedSum.length

    let out = fixedSum.slice(0, Math.min(digits, threshold))

    if (digits > threshold) {
      out = out + '000000000000'.slice(0, digits - threshold)
    }

    return parseInt(out, 10)
  }

  return {
    min,
    max,
    initSum,
    startSum,
    fromSlider,
    toSlider,
    round
  }
}
