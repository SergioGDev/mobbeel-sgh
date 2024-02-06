import FileLoaderInput from "../../components/InputFileLoader/InputFileLoader";
import LoaderSpinner from "../../components/LoaderSpinner/LoaderSpinner";
import WebcamFileLoader from "../../components/WebcamFileLoader/WebcamFileLoader";
import { useDocumentContext } from "../../contexts/DocumentContext/DocumentContextProvider";
import styles from "./FileLoaderWidget.module.scss";

const FileLoaderWidget = () => {
  const { isLoading } = useDocumentContext();

  if (isLoading) return <LoaderSpinner />;
  return (
    <div className={styles.container}>
      <FileLoaderInput />
      <WebcamFileLoader />
    </div>
  );
};

export default FileLoaderWidget;
