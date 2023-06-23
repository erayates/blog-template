export default function SectionHeader({title, subtitle}: {title: string, subtitle: string}) {
    return (
        <>
            <h2 className="text-2xl font-semibold  text-gray-800 dark:text-white font-primary">{title}</h2>
            <p className="text-sm text-black/50">{subtitle}</p>
            <hr className="mt-2"></hr>
        </>
    )
}