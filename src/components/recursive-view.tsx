import { AnimatePresence, motion } from "framer-motion";
import { isArray, isObject } from "lodash";
import { Fragment } from "react";
import styled from "styled-components";

import { fadeInAnim } from "@/styles/animations/simple-fade";

import DataTypeIcon from "./icons/data-type";
import { Title } from "./title";

export function RecursiveView({
  data,
  path = "root",
  handleClick,
  expanded,
  $active,
}: {
  data: unknown;
  path: string;
  handleClick: (str: string) => void;
  expanded: {
    [x: string]: string;
  };
  $active: boolean;
}) {
  function isArrayOrObject(value: unknown): boolean {
    return isObject(value) || isArray(value);
  }
  if (!data || !isArrayOrObject(data)) return null;

  return (
    <Style.Container className="details" {...fadeInAnim} key={path} $active={$active}>
      {Object.entries(data).map(([key, value]) => {
        const currentPath = path ? `${path}.${key}` : "root";

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
                    $active={expanded[currentPath] === "shown"}
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
                <span>{value}</span>
              </p>
            </figure>
          );
        }
      })}
    </Style.Container>
  );
}

const Style = {
  Container: styled(motion.article)<{ $active: boolean }>`
    padding-left: 40px;
    height: 100%;
    position: relative;

    &::after {
      content: "";
      bottom: 5%;
      left: 12px;
      height: 92.5%;
      position: absolute;
      width: 1px;
      background-color: rgba(0, 0, 0, 0.1);
    }

    figure {
      height: 30px;
      font-size: 15px;
      display: flex;
      font-weight: 500;
      align-items: center;
      color: #1f2020;
      text-transform: capitalize;

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
