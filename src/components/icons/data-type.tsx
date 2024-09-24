import { IconProps } from "@/types/icons";

const DataTypeIcon = (props: IconProps) => (
  <svg preserveAspectRatio="xMidYMid meet" viewBox="0 0 16 16" fill="none" {...props}>
    <rect width={15} height={15} x={0.5} y={0.5} fill="#E6F2FF" rx={3.5} />
    <rect width={15} height={15} x={0.5} y={0.5} stroke="#A0BFFC" rx={3.5} />
    <path stroke="#0048C0" strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.667} d="M6 5.333h4m-2 0v5.334" />
  </svg>
);

export default DataTypeIcon;
