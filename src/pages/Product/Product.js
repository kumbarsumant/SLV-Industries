import styles from "./Product.module.css";
import ProductCard from "../../components/ProductCard/ProductCard";

function Product() {
    const products = [
        {
            id: "1",
            name: "bio-degradable buffet plate sheet & circles",
            url: "bio-circle.png",
        },
        {
            id: "2",
            name: "bio-degradable buffet plates",
            url: "bio.png",
        },
        {
            id: "3",
            name: "disposable buffet plate sheets & circles",
            url: "disposable-circle.png",
        },
        {
            id: "4",
            name: "disposable buffet plates",
            url: "disposable.png",
        },
        {
            id: "5",
            name: "raw material for all types of plates",
            url: "raw.png",
        },
    ];

    const productCards = products.map((prod, index) => {
        return (
            <a className={styles.cardLink} href="/">
                <ProductCard
                    key={prod.id}
                    url={prod.url}
                    title={prod.name}
                ></ProductCard>
            </a>
        );
    });

    const productRows = [];
    while (productCards.length > 0) {
        productRows.push(productCards.splice(0, 3));
    }

    return (
        <section className="section">
            <div className="section-container">
                <h2 className="heading-secondary heading-gradient margin-bottom-lg">
                    Our Products
                </h2>
                <div className={styles.container}>
                    {productRows.map((row) => {
                        return <div className={styles.row}>{row}</div>;
                    })}
                </div>
            </div>
        </section>
    );
}

export default Product;
