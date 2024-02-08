import { DocumentContextType } from "./documentContext.types";

type DocumentAction =
  | { type: "startUploadingFile" }
  | { type: "startLifeRecording" }
  | { type: "endLifeRecording" }
  | { type: "okUploadFile"; payload: string }
  | { type: "errorUploadFile"; payload: string };

export const DocumentContextReducer = (
  state: DocumentContextType,
  action: DocumentAction
): DocumentContextType => {
  switch (action.type) {
    case "startUploadingFile":
      return {
        errorMsg: undefined,
        isLoading: true,
        decodedFile: undefined,
        decodingInRealTime: false,
      };

    case "startLifeRecording":
      return {
        errorMsg: undefined,
        isLoading: false,
        decodedFile: undefined,
        decodingInRealTime: true,
      };

    case "endLifeRecording":
      return {
        ...state,
        errorMsg: undefined,
        isLoading: false,
        decodingInRealTime: false,
      };

    case "okUploadFile":
      return {
        errorMsg: undefined,
        isLoading: false,
        decodedFile: action.payload,
        decodingInRealTime: false,
      };

    case "errorUploadFile":
      return {
        isLoading: false,
        errorMsg: action.payload,
        decodedFile: undefined,
        decodingInRealTime: false,
      };

    default:
      return state;
  }
};
