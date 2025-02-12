export interface ContextProps{
    children:React.ReactNode
}
export interface NavbarProps{
    title: string;
    children?: React.ReactNode;
}
export interface BudgetCardProp{
    label: string;
    amount: number;
    spent: number;
    color: string;
}