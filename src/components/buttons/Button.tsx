import { useHistory } from 'react-router';
import styles from './button.module.scss';

interface ButtonProps {
  name: string
  icon: string
  urlButton: string
}

const Button = ({ name, icon, urlButton }: ButtonProps) => {
  const history = useHistory();
  const entrance = (urlButton: string) => {
    history.push(urlButton)
  }
  return (
    <div className={styles.wrapperApp}>
      <div className={styles.nameButton}>{name}</div>
      <div className={styles.iconButton} onClick={() => entrance(urlButton)}><img src={icon} alt='icon' /></div>
    </div>
  );
}

export default Button;
