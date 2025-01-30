interface PropType{
    placeholder?: string;
    value?: string;
    size : "sm" | "md" | "lg";
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Input({placeholder, value,size, onChange}: PropType) {
    return (
        <input
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder={placeholder}
            size={size}
            value={value}
            onChange={onChange}
        />
    )
}