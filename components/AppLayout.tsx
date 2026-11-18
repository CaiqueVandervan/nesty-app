import Header from "./header/Header"
import SideBar from "./sidebar/SideBar"

interface AppLayoutProps {
    children: React.ReactNode
}

export default function AppLayout({ children }: AppLayoutProps) {

    return (
        <div className="flex flex-1">
            <div className="hidden md:block">
                <SideBar />
            </div>

            <div className="flex flex-col flex-1">
                <Header />
                <main className="flex flex-1">
                    {children}
                </main>
            </div>
        </div >

    )
}