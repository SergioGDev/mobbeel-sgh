import { useCallback, useEffect, useRef, useState } from "react";
import { useDocumentContext } from "src/contexts/DocumentContext/DocumentContextProvider";
import { base64toFile } from "src/helpers/base64toFile";

export const useRealTimeWebcamFileLoader = () => {
  const webcamRef = useRef<any>(null);
  const intervalId = useRef<number>();
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
      if (intervalId.current) {
        setShowWebcam(false);
        clearInterval(intervalId.current);
        intervalId.current = -1;
        endLifeRecording();
      }
      window.removeEventListener("resize", updateScreenWidth);
    };
  }, []);

  useEffect(() => {
    if (decodedFile) {
      setShowWebcam(false);
      clearInterval(intervalId.current);
      intervalId.current = -1;
      endLifeRecording();
    }
  }, [decodedFile]);

  const updateScreenWidth = () =>
    setScreenWidth(window.innerWidth < 550 ? window.innerWidth : 550);

  const toggleInterval = useCallback(() => {
    setShowWebcam((actual) => {
      if (actual) {
        clearInterval(intervalId.current);
        intervalId.current = -1;
        endLifeRecording();
      } else {
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

        intervalId.current = id;
      }

      return !actual;
    });
  }, []);

  return {
    decodingInRealTime,
    toggleInterval,
    screenWidth,
    webcamRef,
    showWebcam,
    setShowWebcam,
  };
};
