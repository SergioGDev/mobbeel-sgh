import { BallTriangle } from "react-loader-spinner";
import styles from "./LoaderSpinner.module.scss";

const LoaderSpinner = () => {
  return (
    <div className={styles.container}>
      <BallTriangle
        height={100}
        width={100}
        radius={5}
        color="#4fa94d"
        ariaLabel="ball-triangle-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};

export default LoaderSpinner;
