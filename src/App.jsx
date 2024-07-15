import React, { useEffect, useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";
import { useOption } from "./state/store";
import ComponentToPrint from "./components/ComponentToPrint";
import Form from "./components/Form";
import Loading from "./components/Loading";
import Header from "./Layout/Header";

const App = () => {
  let componentRef = useRef(null);

  const handlePrint = useReactToPrint({
    onPrintError: (error) => console.log(error),
    content: () => componentRef.current,
    // removeAfterPrint: true,
    // print: async (printIframe) => {
    //   const document = printIframe.contentDocument;
    //   if (document) {
    //     const html = document.getElementsByTagName("body")[0];
    //     console.log(html);
    //     const exporter = new html2pdf(html);
    //     await exporter.getPdf(true);
    //   }
    // },
  });

  const setRef = (e) => {
    componentRef = { current: e };
  };

  const [isLoading, setLoading] = useState(false);

  const { setExtension, isExtension } = useOption();

  const [isPreview, setPreview] = useState(false);

  const handleExtension = () => setExtension();

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="overflow-hidden w-full min-h-screen relative container p-4">
      <Header
        isPreview={isPreview}
        setPreview={setPreview}
        handlePrint={handlePrint}
      />
      <div className="form-control max-w-[200px]">
        <label className="label cursor-pointer">
          <span className="label-text text-lg font-semibold">
            With Soft Skills
          </span>
          <input
            checked={isExtension}
            onChange={handleExtension}
            type="checkbox"
            className="checkbox checkbox-accent"
          />
        </label>
      </div>
      <Form />
      <div className={isPreview ? "flex" : "hidden"}>
        <div
          className="inset-0 py-10 fixed bg-black/50 h-full overflow-y-hidden z-10"
          onClick={() => setPreview(!isPreview)}
        >
          <div className="absolute top-1/2 left-1/2 z-30 scale-50 sm:scale-75 h-full lg:scale-95 overflow-x-hidden overflow-y-auto -translate-x-1/2 -translate-y-1/2">
            <div className="h-screen w-[805px] ">
              <ComponentToPrint setRef={setRef} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
