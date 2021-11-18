import React from "react"

import { makeStyles } from "@material-ui/styles"

const useStyles = makeStyles((theme) => ({
  icon: {
    height: 20,

    [theme.breakpoints.up("sm")]: {
      height: 28,
    },
  },
}))

export function LogoBlue() {
  const classes = useStyles()

  return (
    <svg
      viewBox="0 0 171 24"
      className={classes.icon}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M33.239 5.077c2.35 0 4.297 1.029 5.105 1.8L36.985 8.53c-.66-.588-2.13-1.396-3.746-1.396-2.975 0-4.811 2.057-4.811 4.848s1.763 4.848 4.848 4.848c1.8 0 3.342-.955 4.04-1.616L38.6 16.94c-.808.845-2.828 1.984-5.325 1.984-4.37 0-7.052-2.939-7.052-6.905-.037-4.004 2.718-6.942 7.015-6.942ZM46.755 5.077c4.04 0 6.978 2.938 6.978 6.905 0 4.003-2.938 6.905-6.978 6.905-4.04 0-6.978-2.938-6.978-6.905-.037-3.967 2.901-6.905 6.978-6.905Zm0 11.753c2.755 0 4.775-2.057 4.775-4.848s-2.02-4.848-4.775-4.848c-2.755 0-4.775 2.057-4.775 4.848S44 16.83 46.755 16.83ZM67.616 14.773c0 1.947-1.25 3.82-4.481 3.82h-7.052V5.371h6.648c2.68 0 4.223 1.653 4.223 3.526 0 1.065-.477 2.02-1.652 2.791 1.175.404 2.314 1.286 2.314 3.085ZM58.25 7.465v3.526l4.187-.037c1.506 0 2.277-.845 2.277-1.8 0-.918-.661-1.69-1.983-1.69H58.25Zm5.032 9.071c1.542 0 2.13-.844 2.13-1.763 0-.991-.698-1.8-2.094-1.8h-5.031v3.6h4.995v-.037ZM76.32 11.798l5.877 6.831h-2.902l-4.885-5.766h-2.497v5.766h-2.167V5.407h2.167v5.473h2.498l4.774-5.473h2.902l-5.767 6.39Z"
        fill="#21409A"
      />
      <path
        d="M88.882 5.077c4.04 0 6.978 2.938 6.978 6.905 0 4.003-2.938 6.905-6.978 6.905-4.04 0-6.979-2.938-6.979-6.905s2.939-6.905 6.979-6.905Zm0 11.753c2.754 0 4.774-2.057 4.774-4.848s-2.02-4.848-4.774-4.848c-2.755 0-4.775 2.057-4.775 4.848s2.057 4.848 4.775 4.848ZM110.515 5.371h2.093v13.222h-2.167V8.787l-4.334 5.803h-1.322l-4.334-5.803v9.843h-2.167V5.408h2.094l5.068 6.795 5.069-6.832ZM122.561 10.77c2.901 0 4.48 1.69 4.48 3.893 0 2.204-1.579 3.93-4.334 3.93h-7.198V5.371h10.284v2.094h-8.117v3.342h4.885v-.037Zm.073 5.766c1.506 0 2.204-.844 2.204-1.836 0-.992-.698-1.836-2.204-1.836h-4.922v3.672h4.922ZM139.162 18.593l-1.433-3.305h-6.243l-1.433 3.305h-2.387l5.73-13.222h2.387l5.729 13.222h-2.35Zm-6.868-5.289h4.554l-2.277-5.289-2.277 5.29ZM152.971 5.371h2.167v13.222h-2.167v-5.656h-7.639v5.656h-2.167V5.371h2.167v5.473h7.639V5.37ZM164.688 11.798l5.876 6.831h-2.901l-4.885-5.766h-2.498v5.766h-2.167V5.407h2.167v5.473h2.498l4.774-5.473h2.902l-5.766 6.39Z"
        fill="#21409A"
      />
      <path
        d="M0 11.982c0 6.06 4.922 10.981 10.982 10.981h.44v-4.15h-.44c-3.747 0-6.832-3.048-6.832-6.831 0-3.747 3.049-6.832 6.832-6.832h.44V1h-.44C4.922 1 0 5.922 0 11.982Z"
        fill="#F04E53"
      />
      <path
        d="M13.185 1.22v5.73h-2.204a5.079 5.079 0 0 0-5.068 5.069 5.079 5.079 0 0 0 5.069 5.068h2.203v5.73a10.958 10.958 0 0 0 8.778-10.762C22 6.656 18.217 2.25 13.185 1.221Z"
        fill="#21409A"
      />
    </svg>
  )
}