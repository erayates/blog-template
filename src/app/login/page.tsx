'use client';

import { useEffect, useState } from 'react';

import { signIn, signOut, useSession, getProviders } from 'next-auth/react'

export default function Login() {
    const { data: session, status } = useSession();

    const [providers, setProviders] = useState(null);

    useEffect(() => {
        const setUpProviders = async () => {
            const response = await getProviders();
            setProviders(response);
        }

        setUpProviders();
    }, [])

    console.log(status)

    return (
        <main className="">
            <div className="text-4xl font-bold">Login</div>
            {providers && Object.values(providers).map((provider: any) => {
                return (
                    <button
                        key={provider.name}
                        className="bg-gray-800 text-white rounded-md p-4"
                        onClick={() => signIn(provider.id)}
                    >
                        Sign in with {provider.name}
                    </button>
                )
            })}
            {session?.user && (
                <div>
                    <div className="text-4xl font-bold">Signed in as {session.user.email}</div>
                    <button
                        className="bg-gray-800 text-white rounded-md p-4"
                        onClick={() => signOut()}
                    >
                        Sign out
                    </button>
                </div>
            )}
        </main>
    )
}