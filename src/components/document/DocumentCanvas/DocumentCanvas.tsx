import { useDocumentContext } from "../../../contexts/DocumentContext/DocumentContextProvider";
import styles from "./DocumentCanvas.module.scss";

const DocumentCanvas = () => {
  const { isLoading, decodedFile, errorMsg } = useDocumentContext();

  if ((isLoading === true || !decodedFile) && !errorMsg) return <></>;

  if (errorMsg)
    return (
      <div className={styles.errorContainer}>
        <h4>ERROR: {errorMsg}</h4>
      </div>
    );

  return (
    <div className={styles.container}>
      <h3>Image document detected:</h3>
      <img src={`data:image/png;base64,${decodedFile}`} />
    </div>
  );
};

export default DocumentCanvas;
