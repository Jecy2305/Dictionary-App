import React from "react";
import play from "../assets/images/icon-play.svg";

function Word({ response }) {
  if (!response?.meanings?.[0]) return null;

  return (
    <div className="container-result-word">
      <div className="container-result-header">
        <div className="container-result-header-texts">
          <h1>{response.word}</h1>
          <p>{response.phonetic}</p>
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
            {response.meanings.map((meaning) =>
              meaning.definitions.map((def, index) => (
                <li key={index}>{def.definition}</li>
              ))
            )}
          </ul>
        </div>

        <div className="container-result-noun-footer">
          <p>Synonyms</p>
          <div className="container-result-noun-footer-synonyms">
          {
            response.meanings[0].synonyms.map((synonym, i)=>(
              <strong key={i}>{synonym}</strong>
            ))
          }
          </div>
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
              <p className="text-example">
                "keyboarding is the part of this job i hate the most."
              </p>
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
