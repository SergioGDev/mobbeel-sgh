import { ChangeEvent, useState } from "react";
import styles from "./FileLoaderWidget.module.scss";

import InputFileLoader from "../../components/InputFileLoader/InputFileLoader";
import LoaderSpinner from "../../components/LoaderSpinner/LoaderSpinner";
import WebcamFileLoader from "../../components/WebcamFileLoader/WebcamFileLoader";
import { useDocumentContext } from "../../contexts/DocumentContext/DocumentContextProvider";
import {
  VIDEO_CAMERA,
  PHOTO_CAMERA,
  SELECT_FILE,
} from "./fileLoaderWidget.consts";

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
          <option value={VIDEO_CAMERA}>Real-time detection</option>
        </select>
      </div>
      {modeValue === "SELECT_FILE" && <InputFileLoader />}
      {modeValue === "PHOTO_CAMERA" && <WebcamFileLoader />}
    </div>
  );
};

export default FileLoaderWidget;
