import React from "react";

const UserData = ({
  date,
  candidateId,
  fullName,
  dob,
  sex,
  con,
  firstLanguange,
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
        <div className="pd-main-container">
          <span>Name, Surname</span>
          <div className="pd-main-box uppercase">
            <p>{fullName}</p>
          </div>
        </div>
        <div className="pd-main-container-two-col">
          <div className="pd-main-container">
            <span>Date of birth</span>
            <div className="pd-main-box">
              <p>{dob}</p>
            </div>
          </div>
          <div className="pd-main-container">
            <span>Sex</span>
            <div className="pd-main-box">
              <p>{sex}</p>
            </div>
          </div>
        </div>
        <div className="pd-main-container">
          <span>Country of Nationality</span>
          <div className="pd-main-box">
            <p>{con}</p>
          </div>
        </div>
        <div className="pd-main-container">
          <span>First Language</span>
          <div className="pd-main-box">
            <p>{firstLanguange}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserData;
