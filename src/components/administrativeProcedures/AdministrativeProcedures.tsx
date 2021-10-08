import styles from './administrativeProcedures.module.scss';
import Button from '../buttons/Button';
import svgIcon from './../../svg/secondaryPageIcon.svg';
import svgIconBack from './../../svg/down.svg';
import { useHistory } from 'react-router';

const SecondaryPage = () => {
    const history = useHistory()
    const clickBackSvg = () => {
        history.goBack()
    }

    return (
        <div className={styles.wrapperSecondaryPage}>
            <div className={styles.headerSecondaryPage}>
                Административные процедуры   <img className={styles.headerSvgIcon} onClick={() => clickBackSvg()} src={svgIconBack} alt="headerSvg" />
            </div>
            <div className={styles.wrapperButton}>
                <div className={styles.topButtons}>
                    <Button name={'СТРАНИЦА 1'} icon={svgIcon} urlButton={'/page'} />
                    <Button name={'ПРОЦЕДУРА 2'} icon={svgIcon} urlButton={'/'} />
                    <Button name={'ПРОЦЕДУРА 3'} icon={svgIcon} urlButton={'/'} />
                </div>
                <div className={styles.bottomButtons}>
                    <Button name={'ПРОЦЕДУРА 4'} icon={svgIcon} urlButton={'/'} />
                </div>
            </div>
        </div>
    )
}

export default SecondaryPage;