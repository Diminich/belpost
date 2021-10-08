import styles from './slider.module.scss';

interface ButtonSlider {
    decoration: string;
    moviSlide: () => void;
    icon: string;
}

const ButtonSlider = ({ decoration, moviSlide, icon }: ButtonSlider) => {
    return (
        <button className={decoration === 'next' ? styles.buttonNext : styles.buttonPrev} onClick={moviSlide}>{icon}</button>
    )
}

export default ButtonSlider;