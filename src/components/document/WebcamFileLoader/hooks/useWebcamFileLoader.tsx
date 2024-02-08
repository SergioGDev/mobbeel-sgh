import { useCallback, useEffect, useRef, useState } from "react";
import { useDocumentContext } from "src/contexts/DocumentContext/DocumentContextProvider";
import { base64toFile } from "src/helpers/base64toFile";

export const useWebcamFileLoader = () => {
  const webcamRef = useRef<any>(null);
  const { uploadFile } = useDocumentContext();
  const [showWebcam, setShowWebcam] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth < 550 ? window.innerWidth : 550);

  useEffect(() => {
    window.addEventListener("resize", updateScreenWidth);

    return () => {
      window.removeEventListener("resize", updateScreenWidth);
    };
  }, []);

  const updateScreenWidth = () =>
    setScreenWidth(window.innerWidth < 550 ? window.innerWidth : 550);

  const capture = useCallback(() => {
    const screenshot = webcamRef.current.getScreenshot();
    uploadFile(base64toFile(screenshot, "document_capture.jpeg"));
  }, [webcamRef]);

  return { screenWidth, webcamRef, capture, showWebcam, setShowWebcam };
};
