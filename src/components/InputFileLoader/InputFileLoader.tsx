import { useInputFileLoader } from './hooks/useInputFileLoader';
import styles from './InputFileLoader.module.scss';

const InputFileLoader = () => {
  const { handleInputChange } = useInputFileLoader();

  return (
    <div className={styles.inputContainer}>
        <div>
          <label htmlFor="document">Choose an image of a document:</label>
        </div>
        <div>
          <input
            type="file"
            id="document"
            name="document"
            accept="image/png, image/jpeg, image/jpg"
            onChange={handleInputChange}
          />
        </div>
      </div>
  );
};

export default InputFileLoader;