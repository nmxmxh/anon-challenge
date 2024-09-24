"use client";

import { AnimatePresence } from "framer-motion";
import { Inter } from "next/font/google";
import { useState } from "react";
import styled from "styled-components";

import CloseIcon from "@/components/icons/close";
import DetailsIcon from "@/components/icons/details";
import { RecursiveView } from "@/components/recursive-view";
import { TextArea } from "@/components/text-area";
import { Title } from "@/components/title";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const dummy_data: unknown | unknown[] = [
  {
    id: 1,
    name: "Alice",
    details: {
      age: 30,
      address: {
        street: "123 Main St",
        city: "Anytown",
        coordinates: {
          latitude: 40.7128,
          longitude: -74.006,
        },
      },
      data: [
        42,
        "text",
        false,
        null,
        {
          key: "value",
          nestedArray: [
            {
              item: "item1",
              attributes: {
                color: "red",
                size: "large",
              },
            },
            {
              item: "item2",
              attributes: {
                color: "blue",
                size: "medium",
              },
            },
          ],
        },
      ],
    },
  },
  {
    id: 2,
    name: "Bob",
    details: {
      age: 25,
      address: {
        street: "456 Elm St",
        city: "Othertown",
        coordinates: {
          latitude: 34.0522,
          longitude: -118.2437,
        },
      },
      data: ["another string", 3.14, true],
    },
  },
];

const initialState: { [key: string]: string } = {
  root: "shown",
};

export default function Home() {
  const [expanded, setExpanded] = useState({
    ...initialState,
  });
  const [data] = useState({
    jsonOrArray: dummy_data,
  });

  function toggleExpand(str: string) {
    setExpanded({
      ...expanded,
      [str]: expanded[str] === "shown" ? "hidden" : "shown",
    });
  }

  return (
    <Style.Container className={inter.className}>
      <section className="cell-input">
        <h1 className={inter.className}>json example</h1>
        <TextArea value={data.jsonOrArray} />
      </section>
      <section className="cell-details">
        <header>
          <p>
            <span>
              <DetailsIcon />
            </span>
            Cell Details
          </p>
          <button>
            <CloseIcon />
          </button>
        </header>
        <div className="content">
          <Title
            expanded={expanded["root"] === "shown"}
            value={data.jsonOrArray}
            text="Company"
            handleClick={() => toggleExpand("root")}
          />
          <AnimatePresence key="root">
            {expanded["root"] === "shown" && (
              <RecursiveView
                expanded={expanded}
                handleClick={toggleExpand}
                data={data.jsonOrArray}
                path="root"
                key="root"
                $active={expanded["root"] === "shown"}
              />
            )}
          </AnimatePresence>
        </div>
      </section>
    </Style.Container>
  );
}

const Style = {
  Container: styled.main`
    width: 100%;
    height: 100%;
    padding: 12px;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    section.cell-input {
      border-radius: 12px;
      height: calc(100vh - 24px);
      width: 45vw;
      overflow: hidden;
      margin-right: 15vw;
      padding: 24px;
      padding-top: 15vh;

      h1 {
        display: flex;
        align-items: center;
        font-size: 20px;
        font-weight: 500;
        color: #1f2020;
      }
    }

    section.cell-details {
      border-radius: 12px;
      height: calc(100vh - 24px);
      width: 35vw;
      box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.2);
      background-color: white;
      overflow: hidden;

      div.content {
        height: max-content;
        width: calc(100% - 30px);
        margin: auto;
        margin-top: 25px;
        display: flex;
        flex-direction: column;
        overflow-y: scroll;
        position: relative;

        &::after {
          content: "";
          top: 30px;
          left: 12px;
          height: calc(100% - 30px);
          position: absolute;
          width: 1px;
          background-color: rgba(0, 0, 0, 0.1);
        }
      }

      header {
        height: 75px;
        border-bottom: 1px solid #eceded;
        padding: 0 15px;
        display: flex;
        align-items: center;
        justify-content: space-between;

        button {
          height: 36px;
          width: 36px;
          border-radius: 4px;
          display: grid;
          place-items: center;

          svg {
            height: 50%;
          }
        }

        p {
          display: flex;
          align-items: center;
          font-size: 20px;
          font-weight: 500;

          svg {
            height: 50%;
          }

          span {
            height: 36px;
            width: 36px;
            border-radius: 4px;
            display: grid;
            place-items: center;
            background-color: #eceded;
            margin-right: 10px;
          }
        }
      }
    }
  `,
};
