import logo from "../../assets/logo.svg";
import singnature from "../../assets/newsignature.svg";
import num50 from "../../assets/num50.svg";
import num70 from "../../assets/num70.svg";
import num80 from "../../assets/num80.svg";
import num100 from "../../assets/num100.svg";
import organizations from "../../assets/organizations.svg";
import {
  useData,
  useExperience,
  useInterpersonal,
  useResults,
  useTranscript,
} from "../../state/store";
import UserDataWithImage from "../UserData/UserDataWithImage";
import UserData from "../UserData/UserData";
import Summary from "../CapabilitiesSummary/Summary";

const VerTwo = ({ setRef }) => {
  const userData = useData();

  const { technical, experience, overall, interpersonal } = useResults();

  const { sql, tableau, r, python, bigData, spss } = useTranscript();

  const { dataCleaning, dataVisualization, modelling, programming } =
    useExperience();

  const { communication, problemSolving, criticalThinking, leadership } =
    useInterpersonal();

  const transcript = [
    { name: "SQL", value: sql },
    { name: "Tableau", value: tableau },
    { name: "R", value: r },
    { name: "Python", value: python },
    { name: "Big Data", value: bigData },
    { name: "SPSS", value: spss },
  ];

  const experienceSkills = [
    { name: "Data Cleaning", value: dataCleaning },
    { name: "Data Visualization", value: dataVisualization },
    { name: "Modelling", value: modelling },
    { name: "Programming", value: programming },
  ];

  const interPersonal = [
    { name: "Communication", value: communication },
    { name: "Problem Solving", value: problemSolving },
    { name: "Critical Thinking", value: criticalThinking },
    { name: "Leadership", value: leadership },
  ];

  const progressBar = (value) => {
    return (
      <div className="progress">
        <div
          style={{
            width: `${value}%`,
            height: "4px",
            overflow: "hidden",
            position: "relative",
            borderRadius: 2,
          }}
        >
          <div style={{ position: "absolute", display: "flex", gap: 1 }}>
            {Array(10)
              .fill(1)
              .map((i, idx) => {
                switch (idx) {
                  case 0:
                    return (
                      <p
                        key={idx}
                        style={{
                          background: `linear-gradient(90deg,rgba(38,34,98,100%, rgba(46,55,123,1) 100%)`,
                        }}
                      ></p>
                    );
                  case 1:
                    return (
                      <p
                        key={idx}
                        style={{
                          background: `linear-gradient(90deg,rgba(46,55,123,1)00%, rgba(54,76,148,1) 100%)`,
                        }}
                      ></p>
                    );
                  case 2:
                    return (
                      <p
                        key={idx}
                        style={{
                          background: `linear-gradient(90deg,rgba(54,76,148,1)00%, rgba(63,97,172,1) 100%)`,
                        }}
                      ></p>
                    );
                  case 3:
                    return (
                      <p
                        key={idx}
                        style={{
                          background: `linear-gradient(90deg,rgba(63,97,172,1) 0%, rgba(67,113,183,1) 100%)`,
                        }}
                      ></p>
                    );
                  case 4:
                    return (
                      <p
                        key={idx}
                        style={{
                          background: `linear-gradient(90deg,rgba(67,113,183,1) 0%, rgba(70,130,194,1) 100%)`,
                        }}
                      ></p>
                    );
                  case 5:
                    return (
                      <p
                        key={idx}
                        style={{
                          background: `linear-gradient(90deg,rgba(70,130,194,1) 0%, rgba(73,146,206,1) 100%)`,
                        }}
                      ></p>
                    );
                  case 6:
                    return (
                      <p
                        key={idx}
                        style={{
                          background: `linear-gradient(90deg,rgba(73,146,206,1) 0%, rgba(63,156,198,1) 100%)`,
                        }}
                      ></p>
                    );
                  case 7:
                    return (
                      <p
                        key={idx}
                        style={{
                          background: `linear-gradient(90deg,rgba(63,156,198,1) 0%, rgba(53,166,190,1) 100%)`,
                        }}
                      ></p>
                    );
                  case 8:
                    return (
                      <p
                        key={idx}
                        style={{
                          background: `linear-gradient(90deg,rgba(53,166,190,1) 0%, rgba(43,176,181,1) 100%`,
                        }}
                      ></p>
                    );
                  case 9:
                    return (
                      <p
                        key={idx}
                        style={{
                          background: `linear-gradient(90deg,rgba(43,176,181,1) 0%, rgba(34,187,173,1) 100%)`,
                        }}
                      ></p>
                    );

                  default:
                    return (
                      <p
                        key={idx}
                        style={{
                          background: `linear-gradient(90deg,rgba(38, 34, 98, 1) 0%,rgba(63, 97, 172, 1) 30%,rgba(73, 146, 206, 1) 60%,rgba(34, 187, 173, 1) 100%)`,
                        }}
                      ></p>
                    );
                }
              })}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div
      ref={(e) => setRef(e)}
      style={{ display: "flex", justifyContent: "center", paddingTop: "140px" }}
    >
      <div id="A4">
        <div
          className="page-1"
          style={{ height: " 841px", position: "relative", width: "595px" }}
        >
          <img className="logo" src={logo} alt="" />
          {userData.img ? (
            <UserDataWithImage {...userData} />
          ) : (
            <UserData {...userData} />
          )}
          <div className="test-result">
            <p className="tr-title">Test Result</p>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div className="tr-container">
                <span>Technical</span>
                <div className="tr-box">{technical}</div>
              </div>
              <div className="tr-container">
                <span>Experience</span>
                <div className="tr-box">{experience}</div>
              </div>
              <div className="tr-container">
                <span>Interpersonal skills</span>
                <div className="tr-box">{interpersonal}</div>
              </div>
              <div className="tr-container">
                <span>Overall</span>
                <div className="tr-box">{overall}</div>
              </div>
            </div>
          </div>

          <div className="line"></div>

          <div className="note">
            Note: It is recommended that the candidate’s data science skills as
            indicated in this Test report form be reassessed after two years
            from the written date above.
          </div>

          <div className="singnature-container">
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                flexDirection: "column",
              }}
            >
              <p style={{ fontWeight: 700 }}>Signature:</p>
              <p> Data Talent Testing Center</p>
            </div>
            <div
              style={{
                position: "relative",
                display: "flex",
                alignItems: "flex-end",
                paddingBottom: "2px",
              }}
            >
              <img className="singnature text-center" src={singnature} alt="" style={{width : '70px', height : '50px' , marginLeft : '20px'}}/>
              <div className="singnature-line"></div> 
            </div>
          </div>

          <div className="rating">
            <div className="rating-box" style={{ height: "44px" }}>
              <img className="num50" src={num50} alt="" />

              <div className="rating-box-text">
                <h3>Fundamental awareness</h3>
                <p>
                  Able to cleansing of small-unstructured data and enabling
                  analytical capability in order to query the data and address
                  various business needs. Interacts with and may influence
                  immediate colleagues
                </p>
              </div>
            </div>

            <div className="rating-box" style={{ height: "74px" }}>
              <div className="num-div">
                <img className="num50" src={num50} alt="" />
                <img className="num70" src={num70} alt="" />
              </div>
              <div className="rating-box-text">
                <h3>Intermediate</h3>
                <p>
                  Familiar with the wide range of mainstream commercial and open
                  source data science tools, their constraints, advantages and
                  areas of application. Has fundamental awareness of data
                  cleaning, visualization, predictive analytics and machine
                  learning algorithms. May contribute fully to the work of
                  teams.
                </p>
              </div>
            </div>

            <div className="rating-box">
              <div className="num-div">
                <img className="num70" src={num70} alt="" />
                <img className="num80" src={num80} alt="" />
              </div>
              <div className="rating-box-text">
                <h3>Senior</h3>
                <p>
                  Has fully operational command of R or Python programming
                  languages and several other commercial data science tools. Has
                  problem-solving approaches in order to blend data science
                  expertise, business intuition and programming capabilities
                  with his/her work to apply these for data acquisition,
                  preprocessing, modelling, machine learning, model evaluation
                  and deployment. Communicates effectively at all levels to both
                  technical and non-technical audiences.
                </p>
              </div>
            </div>

            <div className="rating-box">
              <div className="num-div">
                <img className="num80" src={num80} alt="" />
                <img className="num100" src={num100} alt="" />
              </div>
              <div className="rating-box-text">
                <h3>Expert</h3>
                <p>
                  Has substantial data science knowledge and experience working
                  on full-life cycle data science practices and has outstanding
                  optimized problem-solving approaches in order to blend data
                  science expertise, business intuition and programming
                  capabilities. Demonstrates leadership and engages or works
                  with data specialists as necessary. Able to use R and Python
                  programming languages and multiple commercial tools and able
                  to create data driven management solutions to separate
                  business problems.
                </p>
              </div>
            </div>
          </div>

          <img className="organizations" src={organizations} alt="" />
          <div className="line-2"></div>
          <p className="footer-text">
            The validity of this CDS-ES test report form can be verified online
            by recognising organisation at:
            <a href="https://www.dsa.az/verification">
              www.dsa.az/verification
            </a>
          </p>
        </div>

        <div
          className="page-2"
          style={{
            height: " 841px",
            position: "relative",
            width: "595px",
            background: "white",
          }}
        >
          <div className="summary">
            <div className="summary-header">
              <h1 className="summary-header-title">Capabilities summary</h1>
            </div>
            <div className="summary-main">
              <Summary />
              <div className="svg-div">
                <div>
                  <span>{overall}</span>
                </div>
                <svg className="svg-indicator">
                  <linearGradient
                    id="gradient"
                    x1="0"
                    y1="0"
                    x2={0}
                    y2={`${overall}%`}
                  >
                    <stop offset="0%" stopColor="rgba(0, 213, 255, 1)" />
                    <stop
                      offset={`${overall + 100}%`}
                      stopColor="rgba(0, 85, 255, 1)"
                    />
                  </linearGradient>
                  <circle className="svg-indicator-track" />
                  <circle
                    width="10px"
                    stroke="url(#gradient)"
                    className="svg-indicator-indication"
                    style={{ strokeDashoffset: 300 - overall * 3 }}
                  />
                </svg>
              </div>
              <div className="summary-main-box">
                <span>Overall</span>
              </div>
            </div>
          </div>

          <div className="experience">
            <h3>Experience</h3>
            <div style={{ height: "80px" }}>
              <div className="skills">
                {experienceSkills.map(({ name, value }) => (
                  <div key={name} className="skill">
                    <p>{name}</p>

                    {progressBar(value)}

                    <span>{Number(value).toFixed(2)}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div
            style={{
              position: "relative",
              background: "#22BBAD",
              left: 28,
              marginTop: 10,
              width: 538,
              height: 1,
            }}
          ></div>

          <div className="interpersonal">
            <h3>Interpersonal skills</h3>
            <div>
              <div className="skills">
                {interPersonal.map(({ name, value }) => (
                  <div key={name} className="skill">
                    <p>{name}</p>

                    {progressBar(value)}

                    <span>{Number(value).toFixed(2)}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div
            style={{
              position: "relative",
              background: "#22BBAD",
              left: 28,
              marginTop: 20,
              width: 538,
              height: 1,
            }}
          ></div>

          <div className="transcript">
            <h3>Transcript</h3>
            <div>
              <div className="skills">
                {transcript.map(({ name, value }) => (
                  <div key={name} className="skill">
                    <p>{name}</p>

                    {progressBar(value)}

                    <span>{Number(value).toFixed(2)}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <p className="footer-text">
            The validity of this CDS-ES test report form can be verified online
            by recognising organisation at:
            <a href="https://www.dsa.az/verification">
              www.dsa.az/verification
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default VerTwo;
