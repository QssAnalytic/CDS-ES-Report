import React from "react";
import ReactImageUploading from "react-images-uploading";
import { useData } from "../state/store";

const UploadImage = () => {
  const { img, setImg } = useData();
  const onChange = (imageList) => {
    setImg(imageList[imageList.length - 1]);
  };

  return (
    <ReactImageUploading
      multiple
      value={img}
      onChange={onChange}
      dataURLKey="data_url"
    >
      {({ onImageUpload, onImageRemoveAll, isDragging, dragProps }) => (
        // write your building UI

        <div className="flex flex-col w-fit gap-2">
          <button
            className="btn btn-accent"
            style={isDragging ? { color: "red" } : null}
            onClick={() => {
              onImageUpload();
              onImageRemoveAll();
            }}
            {...dragProps}
          >
            Upload Image
          </button>
          {img && (
            <div className="relative w-fit">
              <button
                className="btn btn-circle btn-sm absolute right-1 rounded-full top-1"
                onClick={onImageRemoveAll}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="white"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </button>
              <img
                src={img?.data_url}
                className="rounded-xl w-40 bg-cover"
                alt=""
              />
            </div>
          )}
        </div>
      )}
    </ReactImageUploading>
  );
};

export default UploadImage;
