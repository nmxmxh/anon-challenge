import type { IconProps } from "@/types/icons";

const CloseIcon = (props: IconProps) => (
  <svg preserveAspectRatio="xMidYMid meet" viewBox="0 0 16 16" fill="none" {...props}>
    <path stroke="#1F2020" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.333} d="m12 4-8 8m0-8 8 8" />
  </svg>
);

export default CloseIcon;
