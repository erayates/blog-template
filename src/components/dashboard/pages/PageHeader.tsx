import Breadcrumb from "@/components/layouts/Breadcrumb"


export default function PageHeader({ title, subtitle }: { title: string, subtitle: string }) {
    return (
        <section className="col-span-2">
            <Breadcrumb />
            <h1 className="text-[48px] font-primary font-semibold leading-10">{title}</h1>
            <p className="text-black/50">{subtitle}</p>
        </section>
    )

}