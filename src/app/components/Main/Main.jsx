import styles from './Main.module.css'

const Main = ()=>{
    return(
        <>
        <main className={styles.mainContainer}>
            <div className={styles.titleCard}>
            <h1>Essential Vitamins</h1>
            </div>
            <div className={styles.flexContainer}>
                <div className={styles.infoLeftContainer}>
                    <div className={styles.line1}>Online Medical Supplies</div>
                    <div className={styles.line2}>Get Your Vitamins<br/> & Minerals</div>
                    <div><button className={styles.exploreBtn}>EXPLORE</button></div>
                </div>

                <div className={styles.logoContainer}>
                    <img src="/asserts/centerBackgroundImg.png" alt="backgroundImage" className={styles.backgroundImg} />
                    <img src="/asserts/centerLogoImg.png" alt="LogoImg" className={styles.centerLogoImg} />
                </div>

                <div className={styles.infoRightContainer}>
                    <div className={styles.vitaminsContainer}>
                        <div className={styles.infoLogo}>
                            <img src="/asserts/vitaminIcon.svg" alt="vitaminIcon" />
                        </div>
                        <div className={styles.infoTextCard}>
                            <h3>Vitamins</h3>
                            <blockquote>Increased vitamins & minerals in your diet</blockquote>
                        </div>
                    </div>
                    <div className={styles.weightLossContainer}>
                        <div className={styles.infoLogo}>
                            <img src="/asserts/weightLossIcon.png" alt="weightLossIcon" />
                        </div>
                        <div className={styles.infoTextCard}>
                            <h3>Weight Loss</h3>
                            <blockquote>Weight Loss Find Scientifically proven solutions</blockquote>
                        </div>
                    </div>
                    <div className={styles.functionalFoodsContainer}>
                        <div className={styles.infoLogo}>
                            <img src="/asserts/functionalFoodIcon.png" alt="functionalFoodIcon" />
                        </div>
                        <div className={styles.infoTextCard}>
                            <h3>Functional Foods</h3>
                            <blockquote>Functional Foods From protein powers to baby formula</blockquote>
                        </div>
                    </div>
                </div>
            </div>

        </main>
        <div className={styles.subMainContainer}>
            <div className={styles.item1Container}>
                <img src="/asserts/clinicallyStudiedIcon.png" alt="clinicallyStudiedIcon" />
                <div className={styles.textArea}>
                    <div className={styles.iconTitle}>
                        Clinically Studied
                    </div>
                    <div className={styles.para}>
                        All products that we offer have undergone lab and safety tests
                    </div>
                </div>
            </div>
            <div className={styles.item2Container}>
            <img src="/asserts/vegetarianFriendlyIcon.png" alt="vegetarianFriendlyIcon" />
                <div className={styles.textArea}>
                      <div className={styles.iconTitle}>
                        Vegetarian Friendly
                      </div>  
                      <div className={styles.para}>
                        We have a wide selection of vegetarian products to meet your needs 
                    </div>
                </div>
            </div>
            <div className={styles.item3Container}>
            <img src="/asserts/madeInIndiaIcon.png" alt="madeInIndiaIcon" />
                <div className={styles.textArea}>
                     <div className={styles.iconTitle}>
                        Made In India
                      </div>   
                      <div className={styles.para}>
                        Shop local and explore health products made right here in India
                    </div>
                </div>
            </div>
            <div className={styles.item4Container}>
            <img src="/asserts/freeShippingIcon.png" alt="freeShippingIcon" />
                <div className={styles.textArea}>
                      <div className={styles.iconTitle}>
                        Free Shipping
                      </div>  
                      <div className={styles.para}>
                        We deliver to your door with no shipping costs on your orders
                    </div>
                </div>
            </div>
            <div className={styles.item5Container}>
            <img src="/asserts/noRiskIcon.png" alt="noRiskIcon" />
                <div className={styles.textArea}>
                    <div className={styles.iconTitle}>
                        No Risk
                      </div>
                      <div className={styles.para}>
                        We ensure that all products are safe and within their use-by date 
                    </div>
                </div>
            </div>
            <div className={styles.item6Container}>
            <img src="/asserts/gmoFreeIcon.png" alt="gmoFreeIcon" />
                <div className={styles.textArea}>
                    <div className={styles.iconTitle}>
                        GMO Free
                      </div>
                      <div className={styles.para}>
                        Natural,no modified products and derivatives for those who need it 
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Main