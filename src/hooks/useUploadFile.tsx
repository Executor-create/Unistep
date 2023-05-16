import { useState } from "react";

const useUploadFile = () => {
  const [selectedFile, setSelectedFile] = useState<string>();

  const handleFileChange = (event: any) => {
    const selectedFile = event.target.files?.[0];
    setSelectedFile(URL.createObjectURL(selectedFile as File));
  };

  return {
    selectedFile,
    handleFileChange,
  };
};

export default useUploadFile;
