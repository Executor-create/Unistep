import { useState } from "react";
import { UseFormSetValue } from "react-hook-form";

type UseUploadFileProps = {
  setValue: UseFormSetValue<any>;
};

const useUploadFile = ({ setValue }: UseUploadFileProps) => {
  const [selectedFile, setSelectedFile] = useState<string | undefined>();

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      convertToBase64(file);
    }
  };

  const convertToBase64 = (file: File) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => {
      setSelectedFile(reader.result?.toString());
      setValue("avatar_url", reader.result?.toString() || "");
    };
  };

  return {
    selectedFile,
    handleFileChange,
    convertToBase64,
  };
};

export default useUploadFile;
