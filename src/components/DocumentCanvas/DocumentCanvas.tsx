import { useDocumentContext } from '../../contexts/DocumentContext/DocumentContextProvider';
import styles from './DocumentCanvas.module.scss';

const DocumentCanvas = () => {
  const {isLoading, decodedFile} = useDocumentContext();

  if (isLoading === true || !decodedFile) return <></>;

  return (
    <div className={styles.container}>
      <h3>Image document detected:</h3>
      <img src={`data:image/png;base64,${decodedFile}`} />
    </div>
  );
};

export default DocumentCanvas;