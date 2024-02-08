import styles from "./MainPage.module.scss";
import FileLoaderWidget from "src/widgets/FileLoaderWidget/FileLoaderWidget";
import DocumentCanvas from "src/components/document/DocumentCanvas/DocumentCanvas";

const MainPage = () => {

  return (
    <div className={styles.container}>
      <h1>Mobbeel SGH</h1>

      <FileLoaderWidget />
      <DocumentCanvas />
    </div>
  );
};

export default MainPage;
