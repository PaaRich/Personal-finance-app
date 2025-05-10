import { createContext } from "react"; 
import {User} from "firebase/auth";

interface AuthContextProps {
    user: User | null; // User object or null if not authenticated
    // setUser:React.Dispatch<React.SetStateAction<User | null>>; // Function to set the user state
    login: (password:string,email:string) => void;
    logout: () => void;
    error: string; // Error message
}

export const AuthContext = createContext<AuthContextProps>({} as AuthContextProps); // Create a context for authentication with an empty object as the default value