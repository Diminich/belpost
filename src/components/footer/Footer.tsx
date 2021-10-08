import styles from './footer.module.scss';
import {ReactComponent as SvgLogoBelpost} from './../../svg/_logo.svg';
import logoCompani from './../../svg/Logo TehnoSky_w 2.svg'

const Footer = () => {
    return (
        <div className={styles.wrapperFooter}>
            <div className={styles.wrapperFooterTopText}>
                <span className={styles.footerLeftText}>Национальный оператор почтовой связи Республики Беларусь</span>
                <span>
                    <SvgLogoBelpost className={styles.svgLogoBelpost} /></span>
                <span className={styles.footerRightText}>Покупайте белорусские товары на shop.belpost.by</span>
            </div>
            <div className={styles.wrapperFooterBottomText}>
                <span className={styles.footerBottomText}>Разработано компанией <img src={logoCompani} alt='logoCompani' /> High-tech.by</span>
            </div>
        </div>
    )
}

export default Footer;