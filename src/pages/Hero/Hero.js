import styles from "./Hero.module.css";
import ButtonLink from "../../components/Button/ButtonLink";

function HeaderPage() {
    return (
        <header className={styles.header}>
            <div className={styles.headerContainer}>
                <h1 className={styles.headingPrimary}>
                    <span className={styles.headingPrimarySub}>
                        Welcome to SLV Industries
                    </span>
                    {/* <span className={styles.headingPrimarySub}>
                        SLV Industries
                    </span> */}
                    <span className={styles.headingPrimaryMain}>
                        Biodegradable paper plates
                    </span>
                    <span className={styles.headingPrimarySmall}>
                        Crafting Sustainable Solutions for Tomorrow.
                    </span>
                </h1>
                <div className={styles.btnContainer}>
                    <ButtonLink link="/" varient="outline">
                        Explore More
                    </ButtonLink>
                    <ButtonLink link="/" varient="outline">
                        Contact Us
                    </ButtonLink>
                </div>
            </div>
        </header>
    );
}

export default HeaderPage;
