import React from "react";
import "./Showcourses.css";

const Showcourses = (props) => {
  // destructuring the props
  const { img, url, name, creator, uploadDate, price, description } = props.courses;
  return (
    // creacting courses item
    <div className="col-lg-12 col-md-12 course">
      <div className="course_item">
        <div className="course_img text-center">
          <img src={img} alt="course img" />
        </div>
        <div className="course_info">
          <h5 className="course_name">
            <a href={url}>{name}</a>
          </h5>
          <p className="creator">
            Creator : <span>{creator}</span>
          </p>
          <p className="course_discription">{description}</p>
          <p className="course_date"> Upload Date : {uploadDate}</p>
          <p className="price">Price : {price}</p>
        </div>
        <button className="btn btn-danger enroll_btn" onClick={() => props.enrollBtn(props.courses)}>
          Enroll
        </button>
      </div>
    </div>
  );
};

export default Showcourses;
