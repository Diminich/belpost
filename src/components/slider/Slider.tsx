import styles from './slider.module.scss';
import sliderSvg2 from './../../svg/images 2.jpg';
import sliderSvg1 from './../../svg/images 1.jpg';
import { useState } from 'react';
import ButtonSlider from './buttonSlider';

const Slider = () => {
    const [indexItem, setIndexItem] = useState(0);
    const images = [sliderSvg1, sliderSvg2];

    const moviSlide = () => {
        if (indexItem === 0) {
            setIndexItem(1)
        } else {
            setIndexItem(0)
        }
    }



    return (
        <div className={styles.slider}>
            <ButtonSlider decoration={'prev'} moviSlide={() => moviSlide()} icon={'<'} />
                {images.map((el, index) => {
                    if (indexItem === index) {
                        return (
                            <img key={index} className={styles.sliderItem} src={el} alt='icons' />
                        )
                    }

                })}
            <ButtonSlider decoration={'next'} moviSlide={() => moviSlide()} icon={'>'} />
        </div>
    )
}

export default Slider;