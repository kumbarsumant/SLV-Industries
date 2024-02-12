import NavLink from "../NavLink/NavLink";
import styles from "./Navigation.module.css";
import { useState } from "react";

function Navigation() {
    const [activeNavItem, setActiveNavItem] = useState("home");
    const navItemList = [
        "home",
        "about",
        "products",
        "gallery",
        "blog",
        "contact",
    ];

    const handleNavItemClick = (navItem) => {
        setActiveNavItem(navItem);
    };

    const navItems = navItemList.map((item) => {
        return (
            <NavLink
                key={item}
                active={activeNavItem === item}
                onClick={handleNavItemClick}
            >
                {item}
            </NavLink>
        );
    });
    return (
        <nav className={styles.nav}>
            <div className={styles.logoContainer}>
                <a href="/" className={styles.logoLink}>
                    <h1 className={styles.logo}>
                        <span className={styles.logoPrimary}>SLV</span>
                        <span className={styles.logoSecondary}>Industries</span>
                    </h1>
                </a>
            </div>
            <ul className={styles.navContainer}>{navItems}</ul>
        </nav>
    );
}

export default Navigation;
