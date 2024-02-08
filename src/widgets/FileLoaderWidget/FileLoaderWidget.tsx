import { ChangeEvent, useState } from "react";
import styles from "./FileLoaderWidget.module.scss";

import { useDocumentContext } from "src/contexts/DocumentContext/DocumentContextProvider";
import LoaderSpinner from "src/components/ui/LoaderSpinner/LoaderSpinner";
import InputFileLoader from "src/components/document/InputFileLoader/InputFileLoader";
import WebcamFileLoader from "src/components/document/WebcamFileLoader/WebcamFileLoader";
import {
  VIDEO_CAMERA as REAL_TIME_DETECTION,
  PHOTO_CAMERA,
  SELECT_FILE,
} from "./fileLoaderWidget.consts";
import RealTimeWebcamFileLoader from "src/components/document/RealTimeWebcamFileLoader/RealTimeWebcamFileLoader";

const FileLoaderWidget = () => {
  const { isLoading } = useDocumentContext();
  const [modeValue, setModeValue] = useState(SELECT_FILE);

  const handleOnChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setModeValue(event.target.value);
  }

  if (isLoading) return <LoaderSpinner />;

  return (
    <div>
      <div className={styles.selectContainer}>
        <label htmlFor="mode">Select a mode to read the document:</label>
        <select name="mode" onChange={(event) => handleOnChange(event)}>
          <option value={SELECT_FILE}>Select photo</option>
          <option value={PHOTO_CAMERA}>Take a photo</option>
          <option value={REAL_TIME_DETECTION}>Real-time detection</option>
        </select>
      </div>
      {modeValue === SELECT_FILE && <InputFileLoader />}
      {modeValue === PHOTO_CAMERA && <WebcamFileLoader />}
      {modeValue === REAL_TIME_DETECTION && <RealTimeWebcamFileLoader />}
    </div>
  );
};

export default FileLoaderWidget;
