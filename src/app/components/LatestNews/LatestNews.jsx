import Item from '../Item/Item'
import styles from './LatestNews.module.css'

const LatestNews = ()=>{
    return(
        <div className={styles.container}>
            <div>
                <div className={styles.heading1}>OUR BLOG</div>
                <div className={styles.heading2}>Latest News</div>
            </div>
          <div className={styles.parentFlex}>
            <div className={styles.flexContainer}>
                <div className={styles.flexItem1}>
                    <Item batchText='20 APR' line1='The Covid-19 Epidemic In 2022' backgroundImage='/asserts/item1Icon.png' />
                </div>
                <div className={styles.flexItem2}>
                    <Item batchText='20 APR' line1='The Covid-19 Epidemic In 2023' backgroundImage='/asserts/item2Icon.png' height='226px' />
                </div>
            </div>
            <div className={styles.flexContainer}>
                <div className={styles.flexItem1}>
                    <Item batchText='20 APR' line1='The Covid-19 Epidemic In 2022' backgroundImage='/asserts/item1Icon.png' height='207px'/>
                </div>
                <div className={styles.flexItem2}>
                    <Item batchText='20 APR' line1='The Covid-19 Epidemic In 2023' backgroundImage='/asserts/item2Icon.png' />
                </div>
            </div>
            <div className={styles.flexContainer}>
                <div className={styles.flexItem1}>
                    <Item batchText='20 APR' line1='The Covid-19 Epidemic In 2022' backgroundImage='/asserts/item1Icon.png' />
                </div>
                <div className={styles.flexItem2}>
                    <Item batchText='20 APR' line1='The Covid-19 Epidemic In 2023' backgroundImage='/asserts/item2Icon.png' height='226px' />
                </div>
            </div>
            <div className={styles.flexContainer}>
                <div className={styles.flexItem1}>
                    <Item batchText='20 APR' line1='The Covid-19 Epidemic In 2022' backgroundImage='/asserts/item1Icon.png' height='207px'/>
                </div>
                <div className={styles.flexItem2}>
                    <Item batchText='17 APR' line1='The Covid-19 Epidemic In 2023' backgroundImage='/asserts/item2Icon.png' />
                </div>
            </div>  
          </div>
        </div>
    )
}

export default LatestNews