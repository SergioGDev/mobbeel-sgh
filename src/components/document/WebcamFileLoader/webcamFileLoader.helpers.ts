export const  base64toFile = (base64String: string, fileName: string): File => {
  // Get the base64 data
  const base64Data = base64String.split(',')[1];

  // Decode the base64 data
  const byteCharacters = atob(base64Data);

  // Convert the byte array
  const byteArray = new Uint8Array(byteCharacters.length);
  for (let i = 0; i < byteCharacters.length; i++) {
    byteArray[i] = byteCharacters.charCodeAt(i);
  }

  const blob = new Blob([byteArray], { type: 'image/jpeg' });
  const file = new File([blob], fileName, { type: blob.type });

  return file;
}
