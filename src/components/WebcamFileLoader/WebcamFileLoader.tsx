import Webcam from "react-webcam";
import styles from "./WebcamFileLoader.module.scss";
import { videoConstraints } from "./webcamFileLoader.consts";
import { useWebcamFileLoader } from "./hooks/useWebcamFileLoader";

const WebcamFileLoader = () => {
  const { webcamRef, capture, showWebcam, setShowWebcam } =
    useWebcamFileLoader();

  return (
    <div className={styles.container}>
      <button onClick={() => setShowWebcam(!showWebcam)}>
        {showWebcam ? "Close" : "Show"} webcam
      </button>
      {showWebcam && <button onClick={capture}>Capture photo</button>}
      {showWebcam && (
        <Webcam
          audio={false}
          height={310}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          width={550}
          videoConstraints={videoConstraints}
        />
      )}
    </div>
  );
};

export default WebcamFileLoader;
