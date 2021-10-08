
import { useEffect, useState } from 'react';
import { temperature } from '../../API/api';
import styles from './header.module.scss';
import {ReactComponent as SvgHeaderIcon} from './../../svg/1200px-Weather-more-clouds 1.svg';

const Header = () => {
    const [dateNow, setDateNow] = useState(new Date());
    const [temp, setTemp] = useState<number>(0);
    useEffect(() => {
        temperature().then((res: any) => {
            setTemp(res.data.main.temp)
        })
    }, [])

    useEffect(() => {
        setTimeout(() => setDateNow(new Date()), 1000)
    }, [dateNow])

    let mounth = new Date().toLocaleString('ru', {
        month: 'long'
    });

    return (
        <div className={styles.wrapperHeader}>
            <div className={styles.wrapperHoursTemperature}>
                <div>{dateNow.getHours()} : {dateNow.getMinutes() < 10 ? '0' + dateNow.getMinutes() : dateNow.getMinutes()}</div>
                <div>{Math.round(temp)}°C <SvgHeaderIcon className={styles.headerSvgIcon} /></div>
            </div>
            <div className={styles.wrapperData}>
                {dateNow.getDate() < 10 ? '0' + dateNow.getDate() : dateNow.getDate()}    {mounth}   {dateNow.getFullYear()}
            </div>
        </div>
    );
}

export default Header;