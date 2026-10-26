"use client"

import { useState } from "react"
import MenuLeftButton from "./OpenSideBarButton"
import NavigationItems from "../navigation/NavigationItems"

export default function SideBar() {

    const [openSideBar, setOpenSideBar] = useState(false)

    return (
        <aside className={`bg-[#F5EBDD] h-screen transition-[width] duration-300 border-r ${openSideBar ? "w-54" : "w-17"}`}>
            <div className="h-26.5 flex items-center">
                <MenuLeftButton onClick={() => setOpenSideBar(!openSideBar)} />
            </div>

            <NavigationItems showItems={openSideBar} />

        </aside>
    )
}