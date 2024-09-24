import type { IconProps } from "@/types/icons";

const DetailsIcon = (props: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid meet"
    viewBox="0 0 16 16"
    fill="none"
    {...props}
  >
    <path
      stroke="#1F2020"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.333}
      d="M8.667 3.333H14M8.667 6H12m-3.333 4H14m-5.333 2.667H12M2 3.333a.667.667 0 0 1 .667-.666h2.666A.667.667 0 0 1 6 3.333V6a.667.667 0 0 1-.667.667H2.667A.667.667 0 0 1 2 6V3.333ZM2 10a.667.667 0 0 1 .667-.667h2.666A.667.667 0 0 1 6 10v2.667a.667.667 0 0 1-.667.666H2.667A.667.667 0 0 1 2 12.667V10Z"
    />
  </svg>
);

export default DetailsIcon;
