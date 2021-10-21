import styles from './secondaryPage.module.scss';
import { useHistory } from "react-router";
import svgIconBack from './../../svg/down.svg'
import SecondaryPageButtons from './secondaryPageButtons/SecondaryPageButtons';
import { useState } from 'react';

const SecondaryPage = () => {
    const [namePage, setNamePage] = useState<string>('');
    const history = useHistory()
    const clickBackSvg = () => {
        history.goBack()
    }

    return (
        <div className={styles.wrapperSecondaryPage}>
            <div className={styles.headerSecondaryNamePage}>{namePage}</div>
                <img className={styles.headerSvgIcon} onClick={() => clickBackSvg()} src={svgIconBack} alt="headerSvg" />
            
                <SecondaryPageButtons setNamePage={setNamePage} />
        </div>
    )
}

export default SecondaryPage;