export type Role = 'admin' | 'manager' | 'user';

export interface User {
    uid: string;
    displayName: string;
    role: Role;
    email: string;
}


// great use of types and interfaces in combination instead of vs