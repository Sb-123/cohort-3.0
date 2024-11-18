
export interface ButtonProps {
  variant: "primary" | "secondary";
  size: "small" | "medium" | "large";
  text: string;
  startIcon?: JSX.Element;
  endIcon?: JSX.Element;
  onClick?: () => void;
}

const variantStyles = {
  primary: "bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2",
  secondary: "bg-white hover:bg-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2",
};

const sizeStyles = {
  small: "text-xs",
  medium: "text-sm",
  large: "text-lg",
};

const defaultStyles = {
  text: "text-white",
};

export const Button = (props: ButtonProps) => { 
  return (
    <button
      className={`${variantStyles[props.variant]} ${sizeStyles[props.size]} text-white bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2`}
      onClick={props.onClick}
    >
      {props.startIcon}
      {props.text}
      {props.endIcon}
    </button>
  );
};


