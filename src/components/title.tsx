import { isArray, isObject } from "lodash";
import styled from "styled-components";
import DownIcon from "./icons/down";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

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
      <span>[{isArray(value) ? value.length : isObject(value) ? Object.keys(value).length : "0"} items]</span>
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
    }

    span {
      color: #737474;
      font-weight: 400;
    }
  `,
};
