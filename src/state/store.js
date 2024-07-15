import create from "zustand";
import { devtools } from "zustand/middleware";

export const useData = create((set) => ({
  img: null,
  date: "",
  candidateId: "DS- ",
  fullName: "",
  dob: "",
  sex: "Male",
  con: "Azerbaijani",
  firstLanguange: "Azerbaijani",
  setDate: (iDate) => set({ date: iDate }),
  setCandidateId: (iCandidateId) => set({ candidateId: iCandidateId }),
  setFullName: (iFullName) => set({ fullName: iFullName }),
  setDob: (iDob) => set({ dob: iDob }),
  setSex: (iSex) => set({ sex: iSex }),
  setCon: (iCon) => set({ con: iCon }),
  setFirstLanguange: (iFirstLanguange) =>
    set({ firstLanguange: iFirstLanguange }),
  setImg: (iImg) =>
    set({
      img: iImg,
    }),
}));

export const useResults = create((set) => ({
  technical: 0,
  experience: 0,
  overall: 0,
  interpersonal: 0,
  setTechnical: (iTechnical) => set({ technical: iTechnical }),
  setExperience: (iExperience) => set({ experience: iExperience }),
  setOverall: (iOverall) => set({ overall: iOverall }),
  setInterpersonal: (iInterpersonal) => set({ interpersonal: iInterpersonal }),
}));

export const useTranscript = create((set) => ({
  sql: 0,
  tableau: 0,
  r: 0,
  python: 0,
  bigData: 0,
  spss: 0,
  setSql: (iSql) => set({ sql: iSql }),
  setTableau: (iTableau) => set({ tableau: iTableau }),
  setR: (iR) => set({ r: iR }),
  setPython: (iPython) => set({ python: iPython }),
  setBigData: (iBigData) => set({ bigData: iBigData }),
  setSpss: (iSpss) => set({ spss: iSpss }),
}));

export const useExperience = create((set) => ({
  dataCleaning: 0,
  dataVisualization: 0,
  modelling: 0,
  programming: 0,
  setDataCleaning: (iDataCleaning) => set({ dataCleaning: iDataCleaning }),
  setDataVisualization: (iDataVisualization) =>
    set({ dataVisualization: iDataVisualization }),
  setModelling: (iModelling) => set({ modelling: iModelling }),
  setProgramming: (iProgramming) => set({ programming: iProgramming }),
}));

export const useInterpersonal = create((set) => ({
  communication: 0,
  problemSolving: 0,
  criticalThinking: 0,
  leadership: 0,
  setCommunication: (iCommunication) => set({ communication: iCommunication }),
  setProblemSolving: (iProblemSolving) =>
    set({ problemSolving: iProblemSolving }),
  setCriticalThinking: (iCriticalThinking) =>
    set({ criticalThinking: iCriticalThinking }),
  setLeadership: (iLeadership) => set({ leadership: iLeadership }),
}));

export const useOption = create((set) => ({
  isExtension: false,
  setExtension: () => set((state) => ({ isExtension: !state.isExtension })),
}));

export const useParagraphs = create(
  devtools((set) => ({
    fontSize: 10,
    firstParagraph: "",
    secondParagraph: "",
    thirdParagraph: "",
    setFirstParagraph: (text) => set({ firstParagraph: text }),
    setSecondParagraph: (text) => set({ secondParagraph: text }),
    setThirdParagraph: (text) => set({ thirdParagraph: text }),
    setFontSize: (fontSize) => set({ fontSize: fontSize }),
  }))
);
