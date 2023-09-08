import { useCallback, useState } from "react";
import clsx from "clsx";
import { styled } from "@mui/material";
import type { FC, HTMLProps, ReactNode } from "react";

import { BurgerIcon, HalvaIcon } from "@src/components/Icons";
import { Button } from "@src/components/base";
import { Phone } from "@src/components/HeaderHalva/Phone";
import { Portal } from "@src/components/Portal";
import type { PhoneProps } from "@src/components/HeaderHalva/Phone";

import Nav from "./Nav/Nav";
import Sidebar from "./Sidebar/Sidebar";
import { HintAndCountdown } from "./HintAndCountdown";
import type { SidebarProps } from "./Sidebar/Sidebar";
import type { Link } from "./types";

import styles from "./HeaderHalva.module.scss";

type HeaderHalvaProps = {
  hintTitle?: ReactNode;
  hintText?: string;
  btnText?: string;
  countdownTime?: number;
  Logo?: FC<Partial<HTMLProps<SVGElement>>>;
  SecondLogo?: FC<Partial<HTMLProps<SVGElement>>>;
  PhoneProps?: PhoneProps;
  SidebarProps?: Pick<SidebarProps, "onClickBtn" | "onLogoClick">;
  links?: Link[];
  orderNum?: string;
  withBtn?: boolean;
  withHint?: boolean;
  withPhone?: boolean;
  withShadow?: boolean;
  withNav?: boolean;
};

const HeaderHalva = ({
  hintTitle,
  hintText,
  btnText = "Оформить карту",
  countdownTime = 1800000,
  withBtn = true,
  withHint = false,
  withPhone = false,
  withShadow = false,
  withNav = false,
  Logo = HalvaIcon,
  SecondLogo,
  PhoneProps,
  SidebarProps,
  orderNum,
  links,
}: HeaderHalvaProps) => {
  const HalvaLogo = styled(Logo)(({ theme }) => ({
    fill: [theme.palette.primary.main],
    width: 72,
    height: 14,

    [theme.breakpoints.up("sm")]: {
      width: 78,
    },

    [theme.breakpoints.up("md")]: {
      width: 108,
      height: 20,
    },
  }));

  const [isActive, setIsActive] = useState(false);

  const onToggleSidebar = useCallback(() => {
    setIsActive((prevState) => !prevState);
  }, []);

  const mods = {
    hidePhone: { [styles.hideOnMob]: true, [styles.hideOnTab]: true },
    hideBtn: { [styles.hideOnMob]: withHint },
    shadow: { [styles.shadow]: withShadow },
  };

  return (
    <>
      <header className={clsx(mods.shadow)}>
        <div className={styles.wrapper}>
          <div className={styles.leftSection}>
            <HalvaLogo alt="halva logo" />
            {SecondLogo && <SecondLogo className={styles.secondLogo} alt="second logo" />}
            {withNav && <Nav links={links} />}
          </div>
          <div className={styles.rightSection}>
            {withNav ? (
              <div className={styles.btnGroup}>
                <Button className={styles.btn}>{btnText}</Button>
                <BurgerIcon
                  className={styles.burger}
                  onClick={onToggleSidebar}
                  data-exclude={orderNum}
                />
              </div>
            ) : (
              <>
                {withHint && (
                  <HintAndCountdown
                    hintTitle={hintTitle}
                    hintText={hintText}
                    onTooltipClose={() => {}}
                    onTooltipOpen={() => {}}
                    countdownTime={countdownTime}
                  />
                )}
                {withPhone && <Phone className={clsx(mods.hidePhone)} {...PhoneProps} />}
                {withBtn && (
                  <Button variant="contained" className={clsx(mods.hideBtn)}>
                    {btnText}
                  </Button>
                )}
              </>
            )}
          </div>
        </div>
      </header>
      {withNav && (
        <Portal>
          <Sidebar
            Logo={Logo}
            isActive={isActive}
            buttonText={btnText}
            onCloseSidebar={onToggleSidebar}
            orderNum={orderNum}
            {...SidebarProps}
          />
        </Portal>
      )}
    </>
  );
};

export default HeaderHalva;
