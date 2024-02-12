import styles from "./ButtonLink.module.css";

function ButtonLink({ children, varient, link, ...rest }) {
    const handleClick = (event) => {
        event.preventDefault();
    };
    return (
        <a
            className={`${styles.btnLink} ${styles[varient]}`}
            href={link}
            onClick={handleClick}
            {...rest}
        >
            {children}
        </a>
    );
}

export default ButtonLink;
