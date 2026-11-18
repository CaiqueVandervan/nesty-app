"use client"

import { useState } from "react";
import MenuIcon from "../icons/MenuIcon";
import Menu from "./menu/Menu";

interface MenuButtonProps {

}

export default function MenuButton({ }: MenuButtonProps) {

    const [openMenu, setOpenMenu] = useState(false)

    return (
        <>
            <button onClick={() => setOpenMenu(!openMenu)}>
                <MenuIcon className="size-6" />
            </button>

            {openMenu && (
                <Menu opened={openMenu} onClose={() => setOpenMenu(false)} />
            )}
        </>
    )
}