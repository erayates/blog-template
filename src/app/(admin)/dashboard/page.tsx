'use client';


export default function page() {
    return (
        <main className="ml-64 top-16 p-16 relative z-50 grid grid-cols-2">
            <section className="recently-users grid-span-6">
                <h2 className="text-2xl font-semibold  text-gray-800 dark:text-white font-primary">
                    
                    Recently Users
                </h2>
                <p className="text-sm text-black/50">Most recently signed up users</p>
                <hr className="mt-2"></hr>

            </section>
        </main>
    )
}