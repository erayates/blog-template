'use client';

import { useEffect, useState } from 'react';

import { signIn, signOut, useSession, getProviders } from 'next-auth/react'

import { AiFillGithub, AiOutlineGoogle } from 'react-icons/ai'
import { useRouter } from 'next/navigation';

export default function Login() {
    const { data: session } = useSession();
    const router = useRouter();

    const [providers, setProviders] = useState(null);
    
    if (session) router.push('/');

    useEffect(() => {


        const setUpProviders = async () => {
            const response: any = await getProviders();
            setProviders(response);
        }

        setUpProviders();
    }, [])

    console.log(providers)

    return (
        <main className="flex justify-center items-center flex-col py-20 col-span-9">
            {providers && !session?.user &&
                (
                    <>
                        <h2 className="text-4xl font-primary">Login</h2>
                        <p className='text-gray-500 text-center mt-2 mb-4 font-secondary'>Sign in to your account to continue</p>
                        <button type="button" className="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 mr-2 mb-2" onClick={() => signIn(providers.github.id)}>
                            <AiFillGithub className="mr-2 text-[20px]" />
                            Sign in with Github
                        </button>
                        <button type="button" className="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2" onClick={() => signIn(providers.google.id)}>
                            <AiOutlineGoogle className='mr-2 text-[20px]' />
                            Sign in with Google
                        </button>
                    </>
                )
            }

        </main>
    )
}