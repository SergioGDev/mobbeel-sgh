import styles from "./MainPage.module.scss";
import FileLoaderWidget from "src/widgets/FileLoaderWidget/FileLoaderWidget";
import DocumentCanvas from "src/components/document/DocumentCanvas/DocumentCanvas";

const MainPage = () => {
  return (
    <div className={styles.container}>
      <h1>Mobbeel SGH</h1>
      <div className={styles.description}>
        Our advanced web app utilizes image recognition to extract and display
        precisely cropped document images. Seamlessly processing documents from
        attachments, photos, or real-time videos, our user-friendly solution
        streamlines the document handling process with efficiency and precision,
        eliminating the need for manual cropping.
      </div>
      <FileLoaderWidget />
      <DocumentCanvas />
    </div>
  );
};

export default MainPage;
