import styles from "./NavLink.module.css";

function NavLink({ children, active, onClick, ...rest }) {
    const handleClick = (event) => {
        event.preventDefault();
        onClick(children);
    };

    return (
        <li className={styles.navItem}>
            <a
                href="/"
                className={`${styles.navLink} ${active ? styles.active : ""}`}
                onClick={handleClick}
            >
                {children}
            </a>
        </li>
    );
}

export default NavLink;
