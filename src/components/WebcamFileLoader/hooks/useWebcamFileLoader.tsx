import { useCallback, useRef, useState } from "react";
import { base64toFile } from "../webcamFileLoader.helpers";
import { useDocumentContext } from "../../../contexts/DocumentContext/DocumentContextProvider";

export const useWebcamFileLoader = () => {
  const webcamRef = useRef(null);
  const { uploadFile } = useDocumentContext();
  const [showWebcam, setShowWebcam] = useState(false)

  const capture = useCallback(() => {
    const screenshot = webcamRef.current.getScreenshot();
    uploadFile(base64toFile(screenshot, "document_capture.jpeg"));
  }, [webcamRef]);

  return { webcamRef, capture, showWebcam, setShowWebcam };
};
