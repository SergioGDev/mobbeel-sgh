import { useCallback, useEffect, useRef, useState } from "react";
import { base64toFile } from "../webcamFileLoader.helpers";
import { useDocumentContext } from "../../../contexts/DocumentContext/DocumentContextProvider";

export const useWebcamFileLoader = () => {
  const webcamRef = useRef(null);
  const { uploadFile } = useDocumentContext();
  const [showWebcam, setShowWebcam] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

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
