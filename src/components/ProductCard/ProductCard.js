import styles from "./ProductCard.module.css";

function ProductCard({ title, url }) {
    const imageUrl = process.env.PUBLIC_URL + "/images/" + url;
    return (
        <div className={styles.card}>
            <div className={styles.cardImage}>
                <img className={styles.img} src={imageUrl} alt={title} />
            </div>
            <div className={styles.cardContent}>
                <h3 className="heading-tertiary">{title}</h3>
            </div>
        </div>
    );
}

export default ProductCard;
