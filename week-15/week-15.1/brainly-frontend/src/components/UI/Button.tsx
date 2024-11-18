

// export interface ButtonProps {
//   variant: "primary" | "secondary";
//   size: "small" | "medium" | "large";
//   text: string;
//   startIcon?: JSX.Element;
//   endIcon?: JSX.Element;
//   onClick?: () => void;
// }

// const variantStyles = {
//   primary: "bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2",
//   secondary: "bg-white hover:bg-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2",
// };

// const sizeStyles = {
//   small: "text-xs",
//   medium: "text-sm",
//   large: "text-lg",
// };

// const defaultStyles = {
//   text: "text-white",
// };

// export const Button = (props: ButtonProps) => { 
//   return (
//     <button
//       className={`${variantStyles[props.variant]} ${sizeStyles[props.size]} text-white bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2`}
//       onClick={props.onClick}
//     >
//       {props.startIcon}
//       {props.text}
//       {props.endIcon}
//     </button>
//   );
// };



import { ReactElement } from "react";

interface ButtonInterface {
  title: string;
  size: "lg" | "md" | "sm" | "xs";
  startIcon?: ReactElement;
  endIcon?: ReactElement;
  variant: "primary" | "secondary";
}

const sizeStyles = {
  lg: "text-xl px-8 py-4 rounded-xl",
  md: "text-md rounded-md px-4 py-2",
  sm: "text-sm rounded-md px-2 py-1",
  xs: "text-xs rounded-md px-2 py-1",
};

const variantStyles = {
  "primary": "bg-purple-600 text-white",
  "secondary": "bg-purple-200 text-white/80",
};

export function Button(props: ButtonInterface) {
  return (
    <button
      className={sizeStyles[props.size] + " " + variantStyles[props.variant] + " "}>
      <div className="flex justify-center items-center">
        {props.startIcon}
        <div className="pl-2 pr-2">{props.title}</div>
        {props.endIcon}
      </div>
      </button>
  )
}