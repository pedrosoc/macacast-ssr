import React from "react";
import dynamic from "next/dynamic";

const MenuCSR = dynamic(() => import("./HeaderMenu"), { ssr: false });
const HeaderMenu = props => <MenuCSR {...props} />;

export default HeaderMenu;
