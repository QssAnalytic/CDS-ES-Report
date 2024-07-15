import React from "react";

const UserDataWithImage = ({
  date,
  img,
  fullName,
  dob,
  sex,
  con,
  firstLanguange,
  candidateId,
}) => {
  return (
    <div className="person-data">
      <div className="pd-header">
        <div className="pd-header-container">
          <span>Date</span>
          <div className="pd-header-box">
            <p>{date}</p>
          </div>
        </div>
        <div className="pd-header-container">
          <span>Candidate ID</span>
          <div className="pd-header-box uppercase">
            <p>{candidateId}</p>
          </div>
        </div>
        <span>Issued by Data Talent</span>
      </div>

      <div className="pd-main">
        <img className="img" src={img.data_url} alt={fullName} />

        <div className="pd-main-container" style={{ width: 385 }}>
          <span>Name, Surname</span>
          <div className="pd-main-box uppercase" style={{ width: 251 }}>
            <p>{fullName}</p>
          </div>
        </div>
        <div className="pd-main-container-two-col " style={{ width: 385 }}>
          <div className="pd-main-container" style={{ gap: 67.5 }}>
            <span>Date of birth</span>
            <div className="pd-main-box" style={{ width: 118 }}>
              <p>{dob}</p>
            </div>
          </div>
          <div className="pd-main-container">
            <span>Sex</span>
            <div
              className="pd-main-box"
              style={{
                width: 63,
                display: "flex",
                justifyContent: "center",
                paddingLeft: 0,
              }}
            >
              <p>{sex}</p>
            </div>
          </div>
        </div>
        <div className="pd-main-container" style={{ width: 385 }}>
          <span>Country of Nationality</span>
          <div className="pd-main-box" style={{ width: 251 }}>
            <p>{con}</p>
          </div>
        </div>
        <div className="pd-main-container " style={{ width: 385 }}>
          <span>First Language</span>
          <div className="pd-main-box" style={{ width: 251 }}>
            <p>{firstLanguange}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDataWithImage;
