import Webcam from "react-webcam";
import styles from "./WebcamFileLoader.module.scss";
import { videoConstraints } from "./webcamFileLoader.consts";
import { useWebcamFileLoader } from "./hooks/useWebcamFileLoader";

const WebcamFileLoader = () => {
  const { screenWidth, webcamRef, capture, showWebcam, setShowWebcam } =
    useWebcamFileLoader();

  return (
    <div className={styles.container}>
      <div className={styles.buttonsContainer}>
        <button onClick={() => setShowWebcam(!showWebcam)}>
          {showWebcam ? "Close" : "Show"} webcam
        </button>
        {showWebcam && <button onClick={capture}>Capture photo</button>}
      </div>
      {showWebcam && (
        <Webcam
          audio={false}
          height={screenWidth * 0.5625}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          width={screenWidth < 550 ? screenWidth : 550}
          videoConstraints={videoConstraints}
        />
      )}
    </div>
  );
};

export default WebcamFileLoader;
