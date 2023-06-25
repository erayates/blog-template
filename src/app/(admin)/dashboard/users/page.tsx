import PageContent from "@/components/dashboard/pages/PageContent";
import PageHeader from "@/components/dashboard/pages/PageHeader";

export default function Posts() {
    return (
        <main className="ml-64 top-4 p-16 relative z-50 ">
            <PageHeader title="Users" subtitle="Manage your users" />
            <section className="all-users mt-10">
                <div className="flex flex-col">
                    <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                            <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
                                <PageContent tableCols={['Avatar', 'Username', 'E-mail']} tableName="users" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}