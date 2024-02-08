import { ChangeEvent, useState } from "react";
import { useDocumentContext } from "../../../../contexts/DocumentContext/DocumentContextProvider";

export const useInputFileLoader = () => {
  const [fileContent, setFileContent] = useState<File>();
  const { uploadFile } = useDocumentContext();

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setFileContent(event.target.files[0]);
      uploadFile(event.target.files[0]);
    }
  };

  return { fileContent, handleInputChange };
};
