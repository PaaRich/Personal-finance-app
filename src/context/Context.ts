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
    openEditPopUp: boolean;
    setOpenEditPopUp: React.Dispatch<React.SetStateAction<boolean>>;
    openDelBudget: boolean;
    setOpenDelBudget: React.Dispatch<React.SetStateAction<boolean>>;
    openPot: boolean;
    setOpenPot: React.Dispatch<React.SetStateAction<boolean>>;
    openEditPot: boolean;
    setOpenEditPot: React.Dispatch<React.SetStateAction<boolean>>;
    openDelPot: boolean;
    setOpenDelPot:React.Dispatch<React.SetStateAction<boolean>>;

}
//how to define the context
export const Context = createContext<ContextProp>({} as ContextProp);