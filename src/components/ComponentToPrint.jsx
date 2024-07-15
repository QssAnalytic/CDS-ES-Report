import React from "react";
import VerOne from "./Certificates/VerOne";
import VerTwo from "./Certificates/VerTwo";
import { useOption } from "../state/store";

const ComponentToPrint = ({ setRef }) => {
  const { isExtension } = useOption();
  return (
    <div>
      {isExtension ? <VerTwo setRef={setRef} /> : <VerOne setRef={setRef} />}
    </div>
  );
};

export default ComponentToPrint;
