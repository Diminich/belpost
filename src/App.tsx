import styles from './app.module.scss';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Slider from './components/slider/Slider';
import Routes from './routes/Routes';

const App = () => {
  return (
    <div className={styles.wrapperApp}>
      <Header />
      <Slider />
      <Routes />
      <Footer />
    </div>
  );
}

export default App;
