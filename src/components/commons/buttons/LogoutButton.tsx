import { signOut } from 'next-auth/react';
import { LuLogOut } from 'react-icons/lu';

export default function LogoutButton() {
    return (
        <button
            type="button"
            className="text-white bg-dark hover:scale-105 transition dark:bg-white dark:text-[#121212] hover:bg-dark/90  font-medium rounded-lg text-sm px-5 py-2.5  flex items-center"
            onClick={() => signOut()}
        >
            Logout
            <LuLogOut className="ml-2" />
        </button>
    )
}