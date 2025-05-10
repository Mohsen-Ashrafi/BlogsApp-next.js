"use client";
import { getUserApi, signinApi, signupApi } from "@/services/authService";
import { useRouter } from "next/navigation";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useReducer,
} from "react";
import toast from "react-hot-toast";
import { AuthAction, AuthContextType, AuthState } from "types/ContextTypes";

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
  isLoading: true,
  error: null,
};

const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case "loading":
      return {
        ...state,
        isLoading: true,
      };
    case "rejected":
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case "signin":
      return {
        user: action.payload,
        isAuthenticated: true,
        isLoading: false,
        error: null,
      };
    case "signup":
      return {
        user: action.payload,
        isAuthenticated: true,
        isLoading: false,
        error: null,
      };
    case "user/loaded":
      return {
        user: action.payload,
        isAuthenticated: true,
        isLoading: false,
        error: null,
      };
  }
};

export default function AuthProvider({ children }: { children: ReactNode }) {
  const router = useRouter();
  const [{ user, isAuthenticated, isLoading, error }, dispatch] = useReducer(
    authReducer,
    initialState
  );

  async function signin(values: { email: string; password: string }) {
    dispatch({ type: "loading" });
    try {
      const { user, message } = await signinApi(values);
      dispatch({ type: "signin", payload: user });
      toast.success(message);
      router.push("/profile");
    } catch (error) {
      const errorMsg = error?.response?.data?.message;
      dispatch({ type: "rejected", payload: errorMsg });
      toast.error(errorMsg);
    }
  }
  async function signup(values: {
    name: string;
    email: string;
    password: string;
  }) {
    dispatch({ type: "loading" });
    try {
      const { user, message } = await signupApi(values);
      dispatch({ type: "signup", payload: user });
      toast.success(message);
      router.push("/profile");
    } catch (error) {
      const errorMsg = error?.response?.data?.message;
      dispatch({ type: "rejected", payload: errorMsg });
      toast.error(errorMsg);
    }
  }
  async function getUser() {
    dispatch({ type: "loading" });
    try {
      await new Promise((resolve) => setTimeout(resolve, 3000));
      const { user } = await getUserApi();
      dispatch({ type: "user/loaded", payload: user });
    } catch (error) {
      const errorMsg = error?.response?.data?.message;
      dispatch({ type: "rejected", payload: errorMsg });
    }
  }

  useEffect(() => {
    async function fetchData() {
      await getUser();
    }
    fetchData();
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, isAuthenticated, isLoading, signin, signup }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) throw new Error("not found Auth context");
  return useContext(AuthContext);
}



