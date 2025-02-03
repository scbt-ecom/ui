export const contentAnimation = {
  initial: 'collapsed',
  animate: 'expanded',
  exit: 'collapsed',
  variants: {
    expanded: { opacity: 1, height: 'auto' },
    collapsed: { opacity: 0, height: 0 }
  },
  transition: {
    duration: 0.3,
    ease: [0.04, 0.62, 0.23, 0.98]
  }
}
