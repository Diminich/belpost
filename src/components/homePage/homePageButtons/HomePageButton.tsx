import styles from './homePageButtons.module.scss'
import Buttons from "../../buttons/Buttons";
import { homePage } from '../../consts';

const HomePageButtons = () => {
    return (
        <div className={styles.buttons}>
            {homePage.map(({ id, name, icon, url }) => {
                return (
                    <Buttons key={id} name={name} icon={icon} url={url}
                     classNameWrapper={styles.wrapperButtons}
                    classNameButton={styles.nameButtons}
                    classIconButton={styles.iconButtons} />
                )
            })}
        </div>
    );
}

export default HomePageButtons;