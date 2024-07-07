export const convertBlobToBase64 = async (blob: Blob) => {
  return new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(blob);
    reader.onloadend = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });
};

export const convertBase64ToBlob = async (base64: string) => {
  return fetch(base64).then((r) => r.blob());
};
