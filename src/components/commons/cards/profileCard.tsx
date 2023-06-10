import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'


export default function ProfileCard() {
    return (
        <div className=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray- w-full lg:w-1/2 mr-12 mb-12 lg:mb-0">
            <div className="flex flex-col items-center py-10">
                <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src="/docs/images/people/profile-picture-3.jpg" alt="Bonnie image" />
                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white font-primary">Eray Ates</h5>
                <span className="text-sm text-gray-500 dark:text-gray-400 font-primary">Web Developer</span>
                <div className="flex mt-4 space-x-3 md:mt-6">
                    <button type="button" className="text-white bg-[#24292F] hover:scale-105 transition hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 mr-2 mb-2">
                        <AiFillGithub className='text-[20px]' />
                    </button>
                    <button type="button" className="text-white bg-[#3b5998] hover:scale-105 transition hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 mr-2 mb-2">
                        <AiFillLinkedin className='text-[20px]' />
                    </button>
                </div>
            </div>
        </div>
    )
}