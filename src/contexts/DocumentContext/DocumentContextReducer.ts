import { DocumentContextType } from "./documentContext.types";

type DocumentAction =
  | { type: "startUploadingFile" }
  | { type: "okUploadFile"; payload: string }
  | { type: "errorUploadFile"; payload: string };

export const DocumentContextReducer = (
  state: DocumentContextType,
  action: DocumentAction
): DocumentContextType => {
  switch (action.type) {
    case "startUploadingFile":
      return { errorMsg: undefined, isLoading: true, decodedFile: undefined };

    case "okUploadFile":
      return {
        errorMsg: undefined,
        isLoading: false,
        decodedFile: action.payload,
      };

    case "errorUploadFile":
      return {
        isLoading: false,
        errorMsg: action.payload,
        decodedFile: undefined,
      };

    default:
      return state;
  }
};
