import { Dispatch } from 'react';
import { useLocation } from 'react-router';
import Buttons from '../../buttons/Buttons';
import { secondaryPage } from '../../consts';
import styles from './secondaryPageButtons.module.scss'

interface secondaryPageButtonsProps {
    setNamePage: Dispatch<string>;
}

interface LocationState {
    from: {
        pathName: string;
    }
}

const SecondaryPageButtons = ({ setNamePage }: secondaryPageButtonsProps) => {
    const location = useLocation<LocationState>();
    return (
        <div className={styles.buttons}>
            {secondaryPage.map(({ id, currentNamePage, currentUrl, secondaryPageNameButton, secondaryPageUrlButton, secondaryPageIconButton }) => {
                if (location.pathname === currentUrl) {
                    setNamePage(currentNamePage)
                    return (
                        <Buttons
                            key={id}
                            name={secondaryPageNameButton}
                            icon={secondaryPageIconButton}
                            url={secondaryPageUrlButton}
                            classNameWrapper={styles.wrapperButtons}
                            classNameButton={styles.nameButtons}
                            classIconButton={styles.iconButtons} />
                    )
                }
            })}
        </div>
    )
}

export default SecondaryPageButtons;