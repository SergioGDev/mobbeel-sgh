import { useEffect, useRef, useState } from "react";
import { useDocumentContext } from "src/contexts/DocumentContext/DocumentContextProvider";
import { base64toFile } from "src/helpers/base64toFile";

export const useRealTimeWebcamFileLoader = () => {
  const webcamRef = useRef<any>(null);
  const [intervalId, setIntervalId] = useState(-1)
  const {
    startLifeRecording,
    endLifeRecording,
    decodingInRealTime,
    decodedFile,
  } = useDocumentContext();
  const [showWebcam, setShowWebcam] = useState(false);
  const [screenWidth, setScreenWidth] = useState(
    window.innerWidth < 550 ? window.innerWidth : 550
  );

  useEffect(() => {
    window.addEventListener("resize", updateScreenWidth);

    return () => {
      window.removeEventListener("resize", updateScreenWidth);
    };
  }, []);

  useEffect(() => {
    if (showWebcam) {
      const id = setInterval(() => {
        if (webcamRef.current.getScreenshot()) {
          startLifeRecording(
            base64toFile(
              webcamRef.current?.getScreenshot(),
              "document_capture.jpeg"
            )
          );
        }
      }, 500);
      setIntervalId(id);
    } else {
      unsubscribeInterval();
    }
  }, [showWebcam])

  useEffect(() => {
    if (decodedFile) unsubscribeInterval();
  }, [decodedFile]);

  const unsubscribeInterval = () => {
    setShowWebcam(false);
    clearInterval(intervalId);
    setIntervalId(-1);
    endLifeRecording();
  };

  const updateScreenWidth = () =>
    setScreenWidth(window.innerWidth < 550 ? window.innerWidth : 550);

  return {
    decodingInRealTime,
    screenWidth,
    webcamRef,
    showWebcam,
    setShowWebcam,
  };
};
