import styles from './slider.module.scss';
import { Carousel } from 'antd';
import { sliderSvgIcon } from '../consts';

const Slider = () => {

    return (
        <div className={styles.wrapperSlider}>
            <Carousel className={styles.slider} autoplay={true}>
                {sliderSvgIcon.map((icon, index) => {
                    return (
                        <div>
                            <img key={index} className={styles.sliderItem} src={icon} alt='icons' />
                        </div>
                    )
                })}
            </Carousel>
        </div>
    )
}

export default Slider;