import { isArray, isObject } from "lodash";
import { Inter, Roboto_Mono } from "next/font/google";
import styled from "styled-components";

import DownIcon from "./icons/down";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const roboto_mono = Roboto_Mono({ subsets: ["latin"], variable: "--font-roboto-mono" });

export function Title({
  value,
  text,
  handleClick,
  expanded,
}: {
  value: unknown;
  text: string;
  handleClick: () => void;
  expanded: boolean;
}) {
  return (
    <Style.Container className={inter.className} onClick={handleClick} $expanded={!expanded}>
      <DownIcon /> <p>{text}</p>
      <span className={roboto_mono.className}>
        [{isArray(value) ? value.length : isObject(value) ? Object.keys(value).length : "0"} items]
      </span>
    </Style.Container>
  );
}

const Style = {
  Container: styled.button<{ $expanded: boolean }>`
    display: flex;
    align-items: center;
    font-weight: 500;
    color: #1f2020;
    text-transform: capitalize;
    height: 30px;
    min-height: 30px;

    svg {
      height: 8px;
      margin-left: 5px;
      color: #737474;
      transform: ${({ $expanded }) => ($expanded ? "rotate(-90deg)" : "rotate(0)")};
      transition: all 0.3s ease-in-out;
    }

    p {
      margin-left: 15px;
      margin-right: 5px;
      min-width: 15px;
    }

    span {
      color: #737474;
      font-weight: 400;
    }
  `,
};
