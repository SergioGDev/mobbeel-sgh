import styles from "./MainPage.module.scss";

import DocumentCanvas from "../../components/DocumentCanvas/DocumentCanvas";
import FileLoaderWidget from "../../widgets/FileLoaderWidget/FileLoaderWidget";

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
