import Styles from './Timer.module.css'

const Timer = (props) => {
  return (
    <div>
        <div className={Styles.timer__box}>
            <div className={Styles.timer__circle}></div>
            <p className={Styles.timer__time}>{props.children}</p>
            <div className={Styles.timer__line}></div>
            <div className={Styles.timer__circle}></div>
        </div>
        <p className={Styles.timer__name}>{props.text}</p>
    </div>
  );
};

export default Timer;
