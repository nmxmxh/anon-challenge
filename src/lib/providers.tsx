"use client";

import type { PropsWithChildren } from "react";
import { useRef } from "react";

import StyledComponentsRegistry from "./registry";

const Providers = (props: PropsWithChildren) => {
  return (
        <StyledComponentsRegistry>
          {props.children}
        </StyledComponentsRegistry>
  );
};

export default Providers;
