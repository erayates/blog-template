"use client";

import { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { QueryClient, QueryClientProvider } from 'react-query'


interface ProviderProps {
    children: React.ReactNode;
    session: Session;
}

const queryClient = new QueryClient();

const Provider = ({ children, session }: ProviderProps) => {
    return (
        <SessionProvider session={session}>
            <QueryClientProvider client={queryClient}>
                {children}
            </QueryClientProvider>
        </SessionProvider>
    )
}

export default Provider