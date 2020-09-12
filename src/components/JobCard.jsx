import React from "react";

import RoleTag from "./RoleTag";
import LevelTag from "./LevelTag";
import LanguagesTag from "./LanguagesTag";
import ToolsTag from "./ToolsTag";
import account from "../assets/images/account.svg";
import eyecam from "../assets/images/eyecam-co.svg";
import faceit from "../assets/images/faceit.svg";
import insure from "../assets/images/insure.svg";
import loopStudios from "../assets/images/loop-studios.svg";
import manage from "../assets/images/manage.svg";
import myHome from "../assets/images/myhome.svg";
import photosnap from "../assets/images/photosnap.svg";
import shortly from "../assets/images/shortly.svg";
import airFilter from "../assets/images/the-air-filter-company.svg";
import "../assets/styles/components/JobCard.scss";
import "../assets/styles/components/Tags.scss";

function JobCard(props) {
  const { logo, company, new: boolean, featured, position, role, level, postedAt, contract, location, languages, tools } = props;

  const logos = [photosnap, manage, account, myHome, loopStudios, faceit, shortly, insure, eyecam, airFilter];

  let roleTag;
  let levelTag;
  let languagesTag;
  let toolsTag;

  if (role) {
    roleTag = <RoleTag role={role} />;
  }

  if (level) {
    levelTag = <LevelTag level={level} />;
  }

  if (level) {
    levelTag = <LevelTag level={level} />;
  }

  if (languages) {
    languagesTag = languages.map((item) => <LanguagesTag language={item} />);
  }

  if (tools) {
    toolsTag = tools.map((item) => <ToolsTag tools={item} />);
  }

  function featureState() {
    if (featured) {
      return (
        <React.Fragment>
          <p className="card__jobInformation-featured">{"Feautured"}</p>
        </React.Fragment>
      );
    }
  }

  function newState() {
    if (props.new) {
      return (
        <React.Fragment>
          <p className="card__jobInformation-new">{"New"}</p>
        </React.Fragment>
      );
    }
  }
  return (
    <article className="card__container">
      <div className="card__container__jobInformation">
        <figure>
          <img src={logos[props.id - 1]} alt="" />
        </figure>
        <div className="card__jobInformation">
          <div className="card__jobInformation-top">
            <p className="card__jobInformation-company">{company}</p>
            {newState()}
            {featureState()}
          </div>

          <h2>{position}</h2>
          <div className="card__jobInformation-bottom">
            <p>{postedAt}</p>
            <span>.</span>
            <p>{contract}</p>
            <span>.</span>
            <p>{location}</p>
            <span></span>
          </div>
        </div>
      </div>
      <div className="card__tags">
        {roleTag} {levelTag} {languagesTag} {toolsTag}
      </div>
    </article>
  );
}

export default JobCard;
