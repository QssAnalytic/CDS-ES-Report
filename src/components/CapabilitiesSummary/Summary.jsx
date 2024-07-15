import React from "react";
import { useOption, useParagraphs } from "../../state/store";

const Summary = () => {
  const { isExtension } = useOption();

  const { firstParagraph, secondParagraph, thirdParagraph, fontSize } =
    useParagraphs();

  return (
    <div
      className={`space-y-1 relative ${
        isExtension
          ? "pt-1 leading-[10px]"
          : "flex flex-col justify-center leading-3 min-h-[276px]"
      }  left-[200px] w-[304px]`}
      style={{ fontSize: `${fontSize}px` }}
    >
      {isExtension ? (
        <div className="flex flex-col gap-1 justify-between h-full">
          <div>{firstParagraph}</div>
          <div>{secondParagraph}</div>
          <div>{thirdParagraph}</div>
        </div>
      ) : (
        <div className="flex flex-col gap-2">
          <div>{firstParagraph}</div>
          <div>{secondParagraph}</div>
        </div>
      )}
    </div>
  );
};

export default Summary;
