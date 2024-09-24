import { Inter } from "next/font/google";
import styled from "styled-components";
import _ from "lodash";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export function TextArea({ value, setData }: any) {
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
    background-color: white;
    width: 100%;
    margin-top: 2.5vh;
    border-radius: 8px;
    border: 0.5px solid rgba(0, 0, 0, 0.1);
    min-height: 65vh;
    padding: 25px;
    line-height: 155%;
    color: #737474;
    resize: none;
    outline: none;
  `,
};
