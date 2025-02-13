import { createContext } from "react";

type p = {
    name: string;
    value: number;
    color: string;
}
interface ContextProp{
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    openPopUp: boolean;
    setOpenPopUp: React.Dispatch<React.SetStateAction<boolean>>;
    data: p[];

}
//how to define the context
export const Context = createContext<ContextProp>({} as ContextProp);