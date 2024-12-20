import styles from './Item.module.css'

const Item =  ({line1,line2 ='Is Back',batchText,backgroundImage,height = '502px'})=>{
    const containerStyle = {
        backgroundImage:`url(${backgroundImage})`,
        height: height
    }
    return(
        <div className={styles.item} style={containerStyle}>
            <div className={styles.batch}>{batchText}</div>
            <div className={styles.line1}>{line1}</div>
            <div className={styles.line2}>{line2}</div>
        </div>
    )
}

export default Item