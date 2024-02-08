import { PropsWithChildren, useContext, useReducer } from "react";

import { DocumentContextReducer } from "./DocumentContextReducer";
import { DocumentContext } from "./DocumentContext";
import {
  initialDocumentContextState,
  mobbscanUrl,
} from "./documentContext.consts";
import { DocumentContextProps, MobbResp } from "./documentContext.types";
import axios from "axios";

export const DocumentContextProvider = ({ children }: PropsWithChildren) => {
  const [documentData, dispatch] = useReducer(
    DocumentContextReducer,
    initialDocumentContextState
  );

  const startLifeRecording = async (file: File) => {
    dispatch({ type: "startLifeRecording" });

    try {
      const resp = await axios.postForm(mobbscanUrl, {
        licenseId: "mobbscan-challenge",
        documentType: "TD1",
        documentSide: "front",
        returnCroppedImage: true,
        image: file,
      });

      if (!resp) throw Error("Backend Error");
      const data = resp.data as MobbResp;
      console.log(data);

      if (data.code === "OK" && data.imageDocumentDetected) {
        dispatch({ type: "okUploadFile", payload: data.imageDocumentDetected });
      }
    } catch (error) {
      dispatch({ type: "errorUploadFile", payload: error as string });
    }
  };

  const endLifeRecording = () => {
    dispatch({ type: "endLifeRecording" });
  };

  const uploadFile = async (file: File) => {
    dispatch({ type: "startUploadingFile" });

    try {
      const resp = await axios.postForm(mobbscanUrl, {
        licenseId: "mobbscan-challenge",
        documentType: "TD1",
        documentSide: "front",
        returnCroppedImage: true,
        image: file,
      });

      if (!resp) throw Error("Backend Error");
      const data = resp.data as MobbResp;
      console.log(data);

      if (data.code === "OK" && data.imageDocumentDetected) {
        dispatch({ type: "okUploadFile", payload: data.imageDocumentDetected });
      } else if (data.code === "ERROR") {
        dispatch({ type: "errorUploadFile", payload: data.description });
      }
    } catch (error) {
      dispatch({ type: "errorUploadFile", payload: error as string });
    }
  };

  const providerObject: DocumentContextProps = {
    ...documentData,

    // Add here the methods of the provider
    uploadFile,
    startLifeRecording,
    endLifeRecording,
  };

  return (
    <DocumentContext.Provider value={providerObject}>
      {children}
    </DocumentContext.Provider>
  );
};

export const useDocumentContext = () => useContext(DocumentContext);
