import React from "react";
import {
  useData,
  useExperience,
  useInterpersonal,
  useOption,
  useParagraphs,
  useResults,
  useTranscript,
} from "../state/store";
import UploadImage from "../components/UploadImage";
import {
  getCommunicationText,
  getCriticalThinkingText,
  getLeadership,
  getOverallText,
  getOverallTextSecond,
  getProblemSolvingText,
  getTechnicalText,
  getTechnicalTextSecond,
} from "../utils/getTexts";
import { useEffect } from "react";
import InputGroup from "./InputGroup";
import TextAreaGroup from "./TextAreaGroup";
const Form = () => {
  const {
    setDate,
    setCandidateId,
    setFullName,
    setDob,
    setSex,
    setCon,
    setFirstLanguange,
    candidateId,
    con,
    firstLanguange,
    sex,
    fullName,
  } = useData();

  const {
    setTechnical,
    setExperience,
    setOverall,
    setInterpersonal,
    technical,
    experience,
    overall,
    interpersonal,
  } = useResults();

  const {
    sql,
    tableau,
    r,
    python,
    bigData,
    spss,
    setSql,
    setTableau,
    setR,
    setPython,
    setBigData,
    setSpss,
  } = useTranscript();

  const {
    dataCleaning,
    dataVisualization,
    modelling,
    programming,
    setDataCleaning,
    setDataVisualization,
    setModelling,
    setProgramming,
  } = useExperience();

  const {
    communication,
    problemSolving,
    criticalThinking,
    leadership,
    setCommunication,
    setProblemSolving,
    setCriticalThinking,
    setLeadership,
  } = useInterpersonal();

  const {
    fontSize,
    firstParagraph,
    secondParagraph,
    thirdParagraph,
    setFontSize,
    setFirstParagraph,
    setSecondParagraph,
    setThirdParagraph,
  } = useParagraphs();

  const { isExtension } = useOption();

  const pronoun = sex === "Male" ? "He" : "She";

  const name =
    fullName.toLowerCase().split(" ")[0].charAt(0).toUpperCase() +
    fullName.toLowerCase().split(" ")[0].slice(1);

  const personalData = [
    {
      label: "Candidate Id",
      placeholder: "Candidate Id",
      name: "candidateId",
      setValue: setCandidateId,
      value: candidateId,
    },
    {
      label: "Name, Surname",
      placeholder: "Full Name",
      name: "fullName",
      setValue: setFullName,
      value: fullName,
    },
    {
      label: "Country of Nationality",
      placeholder: "Country of Nationality",
      name: "con",
      setValue: setCon,
      value: con,
    },
    {
      label: "First Language",
      placeholder: "First Language",
      name: "firstLanguange",
      setValue: setFirstLanguange,
      value: firstLanguange,
    },
  ];

  const testResult = [
    {
      label: "Technical",
      name: "technical",
      type: "number",
      setValue: setTechnical,
      value: technical,
    },

    {
      label: "Experience",
      name: "experience",
      type: "number",
      setValue: setExperience,
      value: experience,
    },

    {
      label: "Interpersonal",
      name: "interpersonal",
      type: "number",
      setValue: setInterpersonal,
      value: interpersonal,
    },

    {
      label: "Overall",
      name: "overall",
      type: "number",
      setValue: setOverall,
      value: overall,
    },
  ];

  const interpersonalSkills = [
    {
      label: "Communication",
      name: "communication",
      type: "number",
      setValue: setCommunication,
      value: communication,
    },
    {
      label: "Problem Solving",
      name: "problemSolving",
      type: "number",
      setValue: setProblemSolving,
      value: problemSolving,
    },
    {
      label: "Critical Thinking",
      name: "criticalThinking",
      type: "number",
      setValue: setCriticalThinking,
      value: criticalThinking,
    },
    {
      label: "Leadership",
      name: "leadership",
      type: "number",
      setValue: setLeadership,
      value: leadership,
    },
  ];

  const experienceSkills = [
    {
      label: "Data Cleaning",
      name: "dataCleaning",
      type: "number",
      setValue: setDataCleaning,
      value: dataCleaning,
    },
    {
      label: "Data Visualization",
      name: "dataVisualization",
      type: "number",
      setValue: setDataVisualization,
      value: dataVisualization,
    },
    {
      label: "Modelling",
      name: "modelling",
      type: "number",
      setValue: setModelling,
      value: modelling,
    },
    {
      label: "Programming",
      name: "programming",
      type: "number",
      setValue: setProgramming,
      value: programming,
    },
  ];

  const transcriptSkills = [
    {
      label: "Tableau",
      name: "technical",
      type: "number",
      setValue: setTableau,
      value: tableau,
    },
    {
      label: "Sql",
      name: "sql",
      type: "number",
      setValue: setSql,
      value: sql,
    },
    {
      label: "R",
      name: "r",
      type: "number",
      setValue: setR,
      value: r,
    },
    {
      label: "Python",
      name: "python",
      type: "number",
      setValue: setPython,
      value: python,
    },
    {
      label: "Big Data",
      name: "bigData",
      type: "number",
      setValue: setBigData,
      value: bigData,
    },
    {
      label: "Spss",
      name: "spss",
      type: "number",
      setValue: setSpss,
      value: spss,
    },
  ];

  const textAreaGroups = [
    {
      label: "First Paragraphs:",
      name: "firstParagraph",
      setValue: setFirstParagraph,
      value: firstParagraph,
    },
    {
      label: "Second Paragraphs:",
      name: "secondParagraph",
      setValue: setSecondParagraph,
      value: secondParagraph,
    },
    {
      label: "Third Paragraphs:",
      name: "thirdParagraph",
      setValue: setThirdParagraph,
      value: thirdParagraph,
    },
  ];

  const handleDate = (e) => {
    const value = e.target.value;
    const newVal = value.split("-").reverse().join("/");
    setDate(newVal);
  };

  const handleDob = (e) => {
    const value = e.target.value;
    const newVal = value.split("-").reverse().join(".");
    setDob(newVal);
  };

  const handleSex = (e) => {
    const value = e.target.value;
    setSex(value);
  };

  useEffect(() => {
    if (isExtension) {
      setFirstParagraph(
        `${getTechnicalText(technical, name)} ${getOverallText(
          interpersonal,
          pronoun
        )}`
      );

      setThirdParagraph(
        `${getOverallTextSecond(
          interpersonal,
          name,
          pronoun
        )} ${getProblemSolvingText(problemSolving)} ${getCriticalThinkingText(
          criticalThinking
        )} ${getCommunicationText(communication)} ${getLeadership(leadership)}`
      );
      setFontSize(8);
    } else {
      setFirstParagraph(`${getTechnicalText(technical, name)}`);
      setFontSize(10);
    }
    setSecondParagraph(`${getTechnicalTextSecond(experience, name, pronoun)}`);
  }, [
    technical,
    experience,
    interpersonal,
    communication,
    problemSolving,
    criticalThinking,
    leadership,
    name,
    sex,
    isExtension,
  ]);

  return (
    <div className="space-y-4">
      <div className="grid gap-4">
        <h2 className="text-xl font-bold text-teal-500">Personal Data</h2>

        <UploadImage />

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <div className="form-control max-w-xs">
            <label className="input-group input-group-vertical">
              <span className="font-base font-semibold">Date</span>
              <input
                className="input input-bordered uppercase"
                onChange={handleDate}
                type="date"
                name="date"
              />
            </label>
          </div>

          {personalData.map((inputGroup, id) => (
            <InputGroup key={id} {...inputGroup} />
          ))}

          <div className="form-control max-w-xs">
            <label className="input-group input-group-vertical">
              <span className="font-base font-semibold">Date of Birth</span>
              <input
                className="input input-bordered uppercase"
                onChange={handleDob}
                type="date"
                name="dob"
              />
            </label>
          </div>
          <div className="form-control max-w-xs">
            <label className="input-group input-group-vertical">
              <span className="font-base font-semibold">Gender</span>
              <select
                className="select select-bordered"
                onChange={handleSex}
                name="sex"
                defaultValue="Male"
                id="sex"
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </label>
          </div>
        </div>
      </div>

      <div className="space-y-1">
        <div>
          <h2 className="text-xl font-bold text-cyan-500 py-4">Test Result</h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {testResult.slice(0, 2).map((inputGroup, id) => (
              <InputGroup key={id} {...inputGroup} />
            ))}
            {isExtension &&
              testResult
                .slice(2, 3)
                .map((inputGroup, id) => (
                  <InputGroup key={id} {...inputGroup} />
                ))}

            {testResult.slice(3).map((inputGroup, id) => (
              <InputGroup key={id} {...inputGroup} />
            ))}
          </div>
        </div>

        <div className="grid gap-1">
          <div>
            <h2 className="text-xl font-bold text-sky-500 py-4">Transcript</h2>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {transcriptSkills.map((inputGroup, id) => (
                <InputGroup key={id} {...inputGroup} />
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-xl font-bold text-blue-500 py-4">Experience</h2>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {experienceSkills.map((inputGroup, id) => (
                <InputGroup key={id} {...inputGroup} />
              ))}
            </div>
          </div>
          {isExtension && (
            <div>
              <h2 className="text-xl font-bold text-indigo-500 py-4">
                Interpersonal
              </h2>

              <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {interpersonalSkills.map((inputGroup, id) => (
                  <InputGroup key={id} {...inputGroup} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      <div>
        <h2 className="text-xl font-bold text-purple-500 py-4">Summary</h2>
        <InputGroup
          type="number"
          label="Font Size"
          value={fontSize}
          setValue={setFontSize}
          name="fontSize"
        />
        <div className="grid gap-8 py-4">
          {textAreaGroups.map((textAreaGroup, id) => (
            <TextAreaGroup key={id} {...textAreaGroup} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Form;
