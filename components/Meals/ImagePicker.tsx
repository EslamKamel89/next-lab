"use client";

import Image from "next/image";
import { ChangeEvent, useRef, useState } from "react";

const ImagePicker: React.FC<{ label: string; name: string }> = ({
  label,
  name,
}) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [pickedImage, setPickedImage] = useState<string | null>(null);

  const handleClick = () => {
    inputRef?.current?.click();
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const file = e.target.files[0];
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPickedImage(fileReader.result as string);
    };
    fileReader.readAsDataURL(file);
  };

  return (
    <div className="relative flex flex-col items-center gap-5 rounded-xl border border-white/10 bg-black/20 p-6 text-center shadow-md hover:border-accent transition">
      {/* Label */}
      <label
        htmlFor={name}
        className="text-sm font-medium text-accent uppercase tracking-wide"
      >
        {label}
      </label>

      {/* Image Preview */}
      <div className="w-full h-52 rounded-lg bg-surface border border-white/10 flex items-center justify-center overflow-hidden relative">
        {!pickedImage && (
          <span className="text-white/40 text-sm animate-pulse">
            No image selected
          </span>
        )}

        {pickedImage && (
          <Image
            src={pickedImage}
            alt="Selected"
            className="object-contain  h-full"
            fill
          />
        )}
      </div>

      {/* Hidden Input */}
      <input
        ref={inputRef}
        onChange={handleImageChange}
        type="file"
        accept="image/png, image/jpeg"
        name={name}
        id={name}
        className="hidden"
      />

      {/* Action Button */}
      <button
        onClick={handleClick}
        type="button"
        className="rounded-full border border-accent text-accent font-semibold px-6 py-2 text-sm cursor-pointer hover:bg-accent hover:text-white transition"
      >
        Choose Image
      </button>
    </div>
  );
};

export default ImagePicker;
