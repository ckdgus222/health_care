import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import styles from "./TabletApp.module.css";

const ProductButton = ({ imageSrc, buttonText, route }) => {
    const navigate = useNavigate(); // Initialize the useNavigate hook

    // Function to handle the button click
    const handleButtonClick = () => {
        navigate(route);
    };

    return (
        <div className={styles.productButton} onClick={handleButtonClick}>
            <img
                loading="lazy"
                src={imageSrc}
                alt={`${buttonText} product`}
                className={styles.productImage}
            />
            <div className={styles.buttonText}>{buttonText}</div>
        </div>
    );
};

const TabletApp = () => {
    const products = [
        {
            imageSrc: "images/begin-img/care.png",
            buttonText: "EUM:care",
            route: "/roommain", // Add route for care
        },
        {
            imageSrc: "images/begin-img/endo.png",
            buttonText: "EUM:endo",
            route: "/eum", // Add route for endo
        },
    ];

    return (
        <main className={styles.mainContainer}>
            <img
                loading="lazy"
                src="images/begin-img/main-logo.png"
                alt="Main logo"
                className={styles.mainLogo}
            />
            <section className={styles.content}>
                <div className={styles.productContainer}>
                    {products.map((product, index) => (
                        <ProductButton
                            key={index}
                            imageSrc={product.imageSrc}
                            buttonText={product.buttonText}
                            route={product.route} // Pass the route to the ProductButton
                        />
                    ))}
                </div>
            </section>
        </main>
    );
};

export default TabletApp;
