import { Inter } from "next/font/google";
import styled from "styled-components";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export function TextArea({ value }: { value: unknown }) {
  return (
    <Style.Container
      disabled
      cols={50}
      rows={10}
      className={inter.className}
      defaultValue={JSON.stringify(value, undefined, 4)}
    />
  );
}

const Style = {
  Container: styled.textarea`
    width: 99%;
    margin-top: 0.5vh;
    background-color: white;
    min-height: 70vh;
    line-height: 155%;
    color: #737474;
    resize: none;
    outline: none;
  `,
};
