import styles from './homePage.module.scss'
import HomePageButtons from './homePageButtons/HomePageButton';

const HomePage = () => {
  return (
    <div className={styles.wrapperButtons}>
      <HomePageButtons />
    </div>
  );
}

export default HomePage;