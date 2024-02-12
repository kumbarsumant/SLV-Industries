import styles from "./Card.module.css";
import { FaGlobe } from "react-icons/fa6";
import { BsFillPersonPlusFill } from "react-icons/bs";
import { BsBoxFill } from "react-icons/bs";
import { BsFillPeopleFill } from "react-icons/bs";

function Card({ title, icon, content, count }) {
    return (
        <div className={styles.card}>
            {icon === "globe" && <FaGlobe className={styles.icon} />}
            {icon === "customer" && (
                <BsFillPersonPlusFill className={styles.icon} />
            )}
            {icon === "product" && <BsBoxFill className={styles.icon} />}
            {icon === "employee" && (
                <BsFillPeopleFill className={styles.icon} />
            )}
            <h4 className={`${styles.cardCount}`}>{count}</h4>
            <h4 className={`${styles.cardTitle}`}>{title}</h4>
            {/* <p className={styles.cardContent}>{content}</p> */}
        </div>
    );
}

export default Card;
