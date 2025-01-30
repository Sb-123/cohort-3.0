type PropType = {
    placeholder: string,
    size?: "big" | "small",
    // onChange:(e:any)=> void,
    onChange:any
}

const TextInput = ({
    placeholder,
    size = "small",
    onChange,
}:PropType) => {
  return (
    <input 
      type="text"
      onChange={onChange}
    placeholder={placeholder} 
    style={{
        padding: size === "big" ? 20 : 10,
        margin: 10,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 5,
        width: 200,
        height: 40,
    }} />
  )
}

export default TextInput
