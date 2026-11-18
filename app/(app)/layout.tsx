import AppLayout from "@/components/AppLayout"

export default function AppGroupLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex flex-1 md:p-4">
            <div className="flex flex-1 md:rounded-lg overflow-hidden bg-[#FBF8F2]">
                <AppLayout>
                    {children}
                </AppLayout>
            </div>
        </div>
    )
}
