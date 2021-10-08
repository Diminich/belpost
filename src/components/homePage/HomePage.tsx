import styles from './homePage.module.scss'
import Button from "../buttons/Button";
import svgAdminIcon from './../../svg/png-clipart-computer-icons-shopping-list-others-angle-text 1 (Traced).svg';
import svgRucovodstvoIcon from './../../svg/Vector.svg';
import svgPriemIcon from './../../svg/receptionSchedule.svg';
import svgStructureIcon from './../../svg/Structure.svg';

const HomePage = () => {
  return (
    <div className={styles.wrapperButtons}>
      <div className={styles.topButtons}>
        <Button name={'АДМИНИСТРАТИВНЫЕ ПРОЦЕДУРЫ'} icon={svgAdminIcon} urlButton={'/AdministrativeProcedures'} />
        <Button name={'РУКОВОДСТВО'} icon={svgRucovodstvoIcon} urlButton={'/belpost'} />
        <Button name={'ГРАФИК ПРИЕМА'} icon={svgPriemIcon} urlButton={'/belpost'} />
      </div>
      <div className={styles.bottomButtons}>
      <Button name={'СТРУКТУРА'} icon={svgStructureIcon} urlButton={'/belpost'} />
      </div >
    </div>
  );
}

export default HomePage;