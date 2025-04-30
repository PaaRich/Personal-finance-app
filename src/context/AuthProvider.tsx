import { AuthContext } from "./AuthContext";
import { useState, useContext } from "react";
import { signInWithEmailAndPassword,signOut,User } from "firebase/auth";
import { auth } from "../../firebase/firebaseConfig";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

//useAuth that provides the login and logout functions
function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  
  const navigate = useNavigate();

  return {
    user,
// setUser,
    //login:  // login function that takes email and password as arguments
    async login(email: string, password: string) {
      try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        toast.success("Login successfully");
        
          navigate("/overview", { replace: true });
       
        setUser(userCredential.user);
      }catch (error) {
        console.error("Login failed", error);
        toast.error("Login failed. Please check your credentials.");
      }
    
    },
    
    //logout: // logout function that signs out the user
    async logout() {
      try {
        await signOut(auth);
    setUser(null);
      } catch (error) {
        console.error("Logout failed", error);
      }
    },
  };
}

export const AuthProvider = ({ children }: React.PropsWithChildren) => {
  const auth = useAuth();
  return (
      <AuthContext.Provider value={auth}>
          {children}
    </AuthContext.Provider>
  )
}

export default function AuthConsumer() {
  return useContext(AuthContext);
}