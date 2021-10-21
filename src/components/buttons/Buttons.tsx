import { useHistory } from 'react-router';

interface ButtonProps {
  name: string;
  icon: string;
  url: string;
  classNameWrapper: string;
  classNameButton: string;
  classIconButton: string;
}

const Buttons = ({ name, icon, url, classNameWrapper, classNameButton, classIconButton }: ButtonProps) => {
  const history = useHistory();
  const entrance = (url: string) => {
    history.push(url)
  }
  return (
    <div className={classNameWrapper}>
      <div className={classNameButton}>{name}</div>
      <div className={classIconButton} onClick={() => entrance(url)}><img src={icon} alt='icon' /></div>
    </div>
  );
}

export default Buttons;
