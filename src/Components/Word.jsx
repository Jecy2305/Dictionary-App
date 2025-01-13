import React from "react";
import play from "../assets/images/icon-play.svg";

function Word({data}) {
  return (
    <div className="container-result-word">
      <div className="container-result-header">
        <div className="container-result-header-texts">
          <h1>keyboard</h1>
          <p>/'ki:bc:d/</p>
        </div>

        <div className="container-result-header-audio">
          <button>
            <img src={play} alt="play" />
          </button>
        </div>
      </div>

      <div className="container-result-noun">
        <div className="container-result-noun-header">
          <h2>
            <strong>noun</strong>
          </h2>
          <div className="container-result-noun-line"></div>
        </div>

        <div className="container-result-noun-body">
          <p>Mearning</p>

          <ul>
            <li>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci
              possimus ducimus architecto nemo doloremque. Cumque non ad
              voluptates iusto similique!
            </li>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis
              quaerat cum sit quis dolore quae dicta vitae voluptate labore eum?
            </li>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis
              quaerat cum sit quis dolore quae dicta vitae voluptate labore eum?
            </li>
          </ul>
        </div>

        <div className="container-result-noun-footer">
          <p>Synonyms</p>
          <strong>electronic keyboards</strong>
        </div>
      </div>

      <div className="container-result-verb">
        <div className="container-result-noun-header">
          <h2>
            <strong>verb</strong>
          </h2>
          <div className="container-result-noun-line"></div>
        </div>

        <div className="container-result-noun-body">
          <p>Mearning</p>

          <ul>
            <li>
              To type on a computer keyboard.
              <p className="text-example">"keyboarding is the part of this job i hate the most."</p>
            </li>
          </ul>
        </div>

        <div className="container-result-verb-footer">
          <div className="container-result-verb-footer-line"></div>

          <div className="container-result-verb-footer-source">
            <p>Source</p>
            <a href="#">hhtps://en.wikitionary.otg/wiki</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Word;
