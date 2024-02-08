import Webcam from "react-webcam";
import styles from "./RealTimeWebcamFileLoader.module.scss";
import { useRealTimeWebcamFileLoader } from "./hooks/useRealTimeWebcamFileLoader";
import { videoConstraints } from "./realTimeWebcamFileLoader.consts";

const RealTimeWebcamFileLoader = () => {
  const {
    decodingInRealTime,
    screenWidth,
    webcamRef,
    showWebcam,
    setShowWebcam,
  } = useRealTimeWebcamFileLoader();

  return (
    <div className={styles.container}>
      <div className={styles.buttonsContainer}>
        <button onClick={() => setShowWebcam(!showWebcam)}>
          {showWebcam ? "Close" : "Show"} webcam
        </button>
      </div>
      {showWebcam && (
        <>
          <Webcam
            audio={false}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            width={screenWidth < 550 ? screenWidth : 550}
            height={screenWidth * 0.5625}
            videoConstraints={videoConstraints}
          />
          {decodingInRealTime && <div>Recording...</div>}
        </>
      )}
    </div>
  );
};

export default RealTimeWebcamFileLoader;
