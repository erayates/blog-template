import { useRouter } from 'next/navigation'
import { FiLogIn } from 'react-icons/fi'

export default function LoginButton (){
    const router = useRouter();

    return(
        <button
            type="button"
            className="text-white bg-blue-700 hover:scale-105 dark:bg-white dark:text-[#121212] hover:bg-blue-600 transition font-medium rounded-lg text-sm px-5 py-2.5  flex items-center"
            onClick={() => router.push('/login')}
        >
            Login
            <FiLogIn className="ml-2" />
        </button>
    )
}