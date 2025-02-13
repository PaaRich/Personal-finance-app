import chroma from "chroma-js";
import Select, { StylesConfig } from 'react-select';

interface ColourOption {
  readonly value: string;
  readonly label: string;
  readonly color: string;
  readonly isFixed?: boolean;
  readonly isDisabled?: boolean;
}

const colourOptions: readonly ColourOption[] = [
  { value: 'ocean', label: 'Ocean', color: '#00B8D9', isFixed: true },
  { value: 'blue', label: 'Blue', color: '#0052CC'},
  { value: 'purple', label: 'Purple', color: '#5243AA' },
  { value: 'red', label: 'Red', color: '#FF5630', isFixed: true },
  { value: 'orange', label: 'Orange', color: '#FF8B00' },
  { value: 'yellow', label: 'Yellow', color: '#FFC400' },
  { value: 'green', label: 'Green', color: '#36B37E' },
  { value: 'forest', label: 'Forest', color: '#00875A' },
  { value: 'slate', label: 'Slate', color: '#253858' },
  { value: 'silver', label: 'Silver', color: '#666666' },
];


const dot = (color = 'transparent') => ({
  alignItems: 'center',
  display: 'flex',

  ':before': {
    backgroundColor: color,
    borderRadius: 10,
    content: '" "',
    display: 'block',
    marginRight: 8,
    height: 10,
    width: 10,
  },
});

const colourStyles: StylesConfig<ColourOption> = {
  control: (styles) => ({ ...styles, backgroundColor: 'white' }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    const color = chroma(data.color);
    return {
      ...styles,
      backgroundColor: isDisabled
        ? undefined
        : isSelected
        ? data.color
        : isFocused
        ? color.alpha(0.1).css()
        : undefined,
      color: isDisabled
        ? '#ccc'
        : isSelected
        ? chroma.contrast(color, 'white') > 2
          ? 'white'
          : 'black'
        : data.color,
      cursor: isDisabled ? 'not-allowed' : 'default',

      ':active': {
        ...styles[':active'],
        backgroundColor: !isDisabled
          ? isSelected
            ? data.color
            : color.alpha(0.3).css()
          : undefined,
      },
    };
  },
  input: (styles) => ({ ...styles, ...dot() }),
  placeholder: (styles) => ({ ...styles, ...dot('#ccc') }),
  singleValue: (styles, { data }) => ({ ...styles, ...dot(data.color) }),
};

export const ColorDropdown = () => (
  <Select
    defaultValue={colourOptions[2]}
    options={colourOptions}
    styles={colourStyles}
  />
);

// import { useState,useRef } from "react";
// const ColorDropdown = ({toggle,setToggle}:{toggle:boolean,setToggle: React.Dispatch<React.SetStateAction<boolean>>}) => {
//   const [color, setColor] = useState();
//   const colorRef = useRef(null);
// console.log(colorRef)
//   return (
//     <div className="relative">
//       <input onFocus={()=>setToggle(true)} className="w-full outline-0 p-3 border-2 rounded-[10px]" type="text" placeholder="Choose a theme.." value={color} onChange={()=>setColor(colorRef.current.childNodes[0])}/>
//       {toggle &&
//         <ul ref={colorRef} className="absolute top-full w-full bg-[whitesmoke] shadow-2xl mt-2 z-50 p-3 rounded-[5px]">
          
//         <li  className="flex items-center cursor-pointer" value={"#e32f"}>
//           <div style={{backgroundColor:"#e32f"}} className="w-[10px] h-[10px] rounded-full mr-1"></div>
//           <p>Red</p>
//           </li>
          
//       </ul>}
//     </div>
//   )
// }

// export default ColorDropdown;