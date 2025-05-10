export type UserContext = {
    id: string;
    name: string;
    email: string;
    // password: string;
};

export type AuthState = {
    user: UserContext | null;
    isAuthenticated: boolean;
    isLoading: boolean;
    error: string | null;
};

export type AuthAction =
    | { type: "loading" }
    | { type: "rejected"; payload: string }
    | { type: "signin" | "signup" | "user/loaded"; payload: UserContext };

export type AuthContextType = {
    user: UserContext | null;
    isAuthenticated: boolean;
    isLoading: boolean;
    signin: (values: { email: string; password: string }) => Promise<void>;
    signup: (values: { name: string; email: string; password: string }) => Promise<void>;
};