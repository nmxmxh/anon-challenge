import { isArray, isObject } from "lodash";
import { Fragment, Key, useState } from "react";
import styled from "styled-components";
import DataTypeIcon from "./icons/data-type";
import { Title } from "./title";
import { AnimatePresence, motion } from "framer-motion";
import { fadeInAnim } from "@/styles/animations/simple-fade";

export function RecursiveView({
  data,
  path = "root",
  handleClick,
  expanded,
}: {
  data: unknown;
  path: string;
  handleClick: (str: string) => void;
  expanded: {
    [x: string]: string;
  };
}) {
  if (!data) return null;
  function isArrayOrObject(value: any): boolean {
    return isObject(value) || isArray(value);
  }

  return (
    <Style.Container className="details" {...fadeInAnim} key={path}>
      {Object.entries(data).map(([key, value]) => {
        let currentPath = path ? `${path}.${key}` : "root";

        if (isArrayOrObject(value)) {
          return (
            <Fragment key={currentPath}>
              <Title
                value={value}
                text={key}
                handleClick={() => handleClick(currentPath)}
                expanded={expanded[currentPath] === "shown"}
              />
              <AnimatePresence key={currentPath}>
                {expanded[currentPath] === "shown" && (
                  <RecursiveView
                    expanded={expanded}
                    data={value}
                    path={currentPath}
                    key={currentPath}
                    handleClick={handleClick}
                  />
                )}
              </AnimatePresence>
            </Fragment>
          );
        } else {
          return (
            <figure key={`${currentPath}-figure`}>
              <DataTypeIcon />
              <p>
                {key}
                <span>{value as any}</span>
              </p>
            </figure>
          );
        }
      })}
    </Style.Container>
  );
}

const Style = {
  Container: styled(motion.article)`
    margin-left: 40px;

    figure {
      margin: 7.5px 0;
      font-size: 15px;
      display: flex;
      font-weight: 500;
      color: #1f2020;
      text-transform: capitalize;

      p {
        margin-top: 2px;
      }

      span {
        margin-left: 10px;
        color: #737474;
        font-weight: 400;
      }

      svg {
        height: 24px;
        margin-right: 10px;
      }
    }
  `,
};
