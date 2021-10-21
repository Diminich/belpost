import { useHistory, useLocation } from 'react-router';
import styles from './page.module.scss';
import { page } from '../consts';

interface LocationState {
    from: {
        pathName: string;
    }
}

const Page = () => {
    const history = useHistory();
    const location = useLocation<LocationState>();
    const clickBackSvg = () => {
        history.goBack()
    }

    const clickHomePage = () => {
        history.push('/belpost')
    }
    return (
        <div className={styles.wrapperPage}>
            {page.map(({ id, currentUrl, pageName, pagetext, svgHomePage, svgIconBack }) => {
                if (location.pathname === currentUrl) {
                    return (
                        <>
                            <div key={id} className={styles.headerPage}>
                                <img className={styles.headerSvgIconHome} onClick={() => clickHomePage()} src={svgHomePage} alt="headerSvg" />
                                {pageName}
                                <img className={styles.headerSvgIconBack} onClick={() => clickBackSvg()} src={svgIconBack} alt="headerSvg" />
                            </div>
                            <div className={styles.text}>
                                {pagetext}
                            </div>
                        </>
                    )
                }

            })}
        </div>
    )
}

export default Page;