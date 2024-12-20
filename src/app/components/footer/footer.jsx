import styles from './footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.flexContainer}>

        <div className={styles.item1}>
            <img src="/asserts/phoneIcon.svg" alt="phoneIcon" className={styles.img} />
            <div className={styles.textArea}>
                Phone Number <br />
                <b>+974 3118 1843</b>
            </div>
        </div>
        <div className={styles.item2}>
            <img src="/asserts/emailIcon.svg" alt="emailIcon" className={styles.img} />
            <div className={styles.textArea}>
                Email Address <br />
               <b> Elbrithcqhr@gmail.com</b>
            </div>
        </div>
        <div className={styles.item3}>
            <img src="/asserts/locationIcon.svg" alt="locationIcon" className={styles.img}/>
            <div className={styles.textArea}>
                Office location <br />
                <b>Ambassador Street, Zone 61,</b>
            </div>
        </div>
        <div className={styles.item4}>
            <img src="/asserts/headerLogo.png" alt="headerLogo" className={styles.imgLogo} />
        </div>
        <div className={styles.item5}>
        Your health, physical and emotional well-being is important to us. We are always by your side and have made it even easier for you to find the necessary vitamins.
        </div>
        
      </div>
      <div className={styles.location}>
        <img src="/asserts/pointIcon.svg" alt="pointIcon"  className={styles.locIcon}/>
        <p>Elbrit Life Sciences Private Limited. C20, BKC, G Block, Mumbai 400051</p>
      </div>
    </footer>
  );
}

export default Footer;