import NavigationItems from "@/components/navigation/NavigationItems"

interface MenuProps {
    opened: boolean
    onClose: () => void
}

export default function Menu({ opened, onClose }: MenuProps) {

    return (
        <>
            <div className="fixed inset-0 z-1 bg-black/40"
                onClick={onClose} />

            <div className="fixed inset-0 w-64 h-full z-2 bg-[#F5EBDD] p-5 shadow-xl">
                <NavigationItems showItems={opened} />
            </div>
        </>

    )
}