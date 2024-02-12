import styles from "./Feature.module.css";
import Card from "../../components/Card/Card";

function Feature() {
    const features = {
        globe: {
            icon: "globe",
            title: "No of Products",
            count: "10+",
            content: "This is the number of profucts content",
        },
        customer: {
            icon: "customer",
            title: "Customers",
            count: "1000+",
            content: "This is the number of Customer content",
        },
        product: {
            icon: "product",
            title: "Products Sold",
            count: "3000+",
            content: "This is the number of products sold content",
        },
        employee: {
            icon: "employee",
            title: "No of employees",
            count: "40+",
            content: "This is the number of employee content",
        },
    };

    const cardList = Object.keys(features).map((feature) => {
        return (
            <Card
                key={features[feature].icon}
                title={features[feature].title}
                content={features[feature].content}
                icon={features[feature].icon}
                count={features[feature].count}
            ></Card>
        );
    });
    return (
        <section className={`section ${styles.sectionFeature}`}>
            <div className="section-container">
                <div className={styles.container}>{cardList}</div>
            </div>
        </section>
    );
}

export default Feature;
