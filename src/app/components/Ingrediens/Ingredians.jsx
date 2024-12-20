import styles from './Ingrediens.module.css'

const Ingrediens = ()=>{
    return(
        <>
        <div className={styles.container}>

            <div className={styles.item1}>
                <div className={styles.title}>INGREDIENTS</div>
                <div className={styles.heading}>Better Ingredients</div>
                <blockquote className={styles.blockquote}>Only the best when you choose products offered on our platform high-quality ingredients for high uality products!</blockquote>
            </div> 

            <div className={styles.item2}>
                <div className={styles.titleName}>Vitamin C</div>
                <div className={styles.description}>Vitamin C as ascorbic acid</div>
                <div className={styles.seeMore}>SEE MORE</div>
            </div> 

            <div className={styles.item3}>
                <div className={styles.titleName}>Vitamin B3</div>
                <div className={styles.description}>Niacin for health gut and skin </div>
                <div className={styles.seeMore}>SEE MORE</div>
            </div> 

            <div className={styles.item4}>
                <div className={styles.titleName}>Magnesium</div>
                <div className={styles.description}>Boost energy and muscle function</div>
                <div className={styles.seeMore}>SEE MORE</div>
            </div>

            <div className={styles.item5}>
                <div className={styles.titleName}>Hyaluronic Acid</div>
                <div className={styles.description}>For smooth, supple and soft skin</div>
                <div className={styles.seeMore}>SEE MORE</div>
            </div>

            <div className={styles.item6}>
                <div className={styles.titleName}>Lactobacillus</div>
                <div className={styles.description}>Invigorate you gut microbiome</div>
                <div className={styles.seeMore}>SEE MORE</div>
            </div>  

            <div className={styles.item7}>
            <img src="/asserts/item7Icon.png" alt="item7Icon" className={styles.image}/>
            </div> 


        </div>
        </>
    )
}

export default Ingrediens