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

interface PotsProp{
    name: string;
    target: number;
    total: number;
    theme: string;
}

interface BudgetProp{
    category: string;
    maximum: number;
    theme: string;
}
interface BalanceProp{
    current: string;
    income: string;
    expenses: string;
}
 export interface transactionProp{
  amount: number;
  avatar: string;
  name: string;
  recurring: boolean;
  category: string;
  date: string;
}
export interface dataProp{
    balance:BalanceProp;
    transactions: transactionProp[];
    budgets: BudgetProp[];
    pots: PotsProp[];

}

export interface initialStateProp{
    isLoading: boolean;
    data:dataProp;
    error: string | null;
}
export interface potItemProp{
    name: string;
    target: number;
    theme: string;
}

export interface budgetItemProp{
    category: string;
    maxSpend: number;
    theme: string;
}


