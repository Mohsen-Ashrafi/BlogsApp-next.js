export type SignupInput = {
    // name: string;
    email: string;
    password: string;
};

export type User = {
    id: string;
    name: string;
    email: string;
};

export type SignupResponse = {
    user: User;
    message: string;
};

