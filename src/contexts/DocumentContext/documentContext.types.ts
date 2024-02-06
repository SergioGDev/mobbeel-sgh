export type DocumentContextType = {
  isLoading: boolean;
  errorMsg?: string;  
  decodedFile?: string;
};

export type DocumentContextProps = DocumentContextType & {
  uploadFile: (file: File) => void;
};

export type MobbResp = {
  code: "OK" | "ERROR";
  description: "DETECT_DOCUMENT_SUCCESS" | "ERROR_DOCUMENT_NOT_DETECTED";
  scanId?: string;
  imageDocumentDetected?: string;
  imageMRZCoordinates?: unknown;
  imageFaceCoordinates?: unknown;
  imageQualityScore?: number;
  imageQuality?: string;
};
