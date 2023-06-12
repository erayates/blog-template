export default function CommentHeader() {
    return (
        <div className="flex items-center">
            <p className="inline-flex  mr-3 text-sm text-gray-900 dark:text-white"><img
                className="mr-2 w-6 h-6 rounded-full"
                src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
                alt="Michael Gough" />Michael Gough</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Feb. 8, 2022</p>
        </div>
    )
}