import styles from "./Footer.module.css";
import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { HiMail } from "react-icons/hi";

function Footer() {
    return (
        <footer className="footer">
            <div className={styles.footerContainer}>
                <div className={styles.logoContainer}>
                    <a href="/" className={styles.logoLink}>
                        <h1 className={styles.logo}>
                            <span className={styles.logoPrimary}>SLV</span>
                            <span className={styles.logoSecondary}>
                                Industries
                            </span>
                        </h1>
                    </a>
                </div>
                <div className={styles.content}>
                    <div className={styles.column}>
                        <h3 className={styles.headingFooter}>About Us</h3>
                        <div className={styles.details}>
                            Crafting eco-friendly paper plates for easy
                            disposal, promoting sustainability and a greener
                            lifestyle choice.
                        </div>
                    </div>
                    <div className={styles.column}>
                        <h3 className={styles.headingFooter}>Quick Links</h3>
                        <ul className={styles.linkContainer}>
                            <li className={styles.linkItem}>
                                <a href="/">Home</a>
                            </li>
                            <li className={styles.linkItem}>
                                <a href="/">About</a>
                            </li>
                            <li className={styles.linkItem}>
                                <a href="/">Product</a>
                            </li>
                            <li className={styles.linkItem}>
                                <a href="/">Gallery</a>
                            </li>
                            <li className={styles.linkItem}>
                                <a href="/">Contact</a>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.column}>
                        <h3 className={styles.headingFooter}>Contact Us</h3>
                        <div className={styles.contacContainerSub}>
                            <div className={styles.iconContainer}>
                                <FaLocationDot className={styles.icon} />
                            </div>
                            <div className={styles.details}>
                                Plot No spl 16, KSSIDC Industrial Area, Sedam,
                                Karnataka - 585222
                            </div>
                        </div>
                        <div className={styles.contacContainerSub}>
                            <div className={styles.iconContainer}>
                                <FaPhone />
                            </div>
                            <div className={styles.details}>+91-9901535328</div>
                        </div>
                        <div className={styles.contacContainerSub}>
                            <div className={styles.iconContainer}>
                                <HiMail />
                            </div>
                            <div className={styles.details}>abc@gmail.com</div>
                        </div>
                    </div>
                    <div className={styles.column}>
                        <h3 className={styles.headingFooter}>Follow Us</h3>
                        <div className={styles.container}>
                            <a href="\">
                                <BsFacebook className={styles.icon} />
                            </a>
                            <a href="\">
                                <BsTwitter className={styles.icon} />
                            </a>
                            <a href="\">
                                <BsInstagram className={styles.icon} />
                            </a>
                            <a href="\">
                                <BsYoutube className={styles.icon} />
                            </a>
                        </div>
                    </div>
                </div>
                <div className={styles.copy}>
                    Copyright &copy; Built By SUMANT KUMBAR
                </div>
            </div>
        </footer>
    );
}

export default Footer;
