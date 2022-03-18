import React, { useState } from "react";
import ShowIcon from "../../assets/ShowIcon.svg";
import CloseIcon from "../../assets/CloseIcon.svg";

const Introduction = () => {
  const [showIcons, setShowIcons] = useState(true);
  return (
    <>
      <div className="intro-container">
        <div className="intro-centerDiv">
          {/* -------------------------------- heading1 -------------------------------- */}
          <div className="introHeading">
            <h2 className="introH2">Introduction</h2>
            <p className="introP">
              Cette politique de confidentialité décrit comment ZYPZAP (société
              éditrice des « sites web » ZYPZAP protège les données personnelles
              qui sont collectées lorsqu’un visiteur se rend sur l’un de ses
              sites. Elle décrit quelles données sont collectées, comment elles
              sont protégées, avec qui et dans quelles conditions elles sont
              partagées le cas échéant.
            </p>
            <p className="introP">
              Sa priorité est de n’utiliser ces données que pour optimiser les
              expériences de navigation et d’achat de ses visiteurs.
            </p>
          </div>
          {/* -------------------------------- heading2 -------------------------------- */}
          <div className="introHeading2">
            <ol>
              <div className="introHeadingH3">1. Collecte des données</div>
            </ol>
            <div className="introQuandDiv">
              <h3 className="introHeadingH4">Quand :</h3>
              {showIcons ? (
                <img
                  src={ShowIcon}
                  alt=""
                  className="introShowIcon"
                  onClick={() => setShowIcons(!showIcons)}
                />
              ) : (
                <img
                  src={CloseIcon}
                  alt=""
                  className="introShowIcon"
                  onClick={() => setShowIcons(!showIcons)}
                />
              )}
            </div>
            <ul className={showIcons ? "quandUl" : "quandUlActive"}>
              <li className="introLi">• vous naviguez l’un des sites web,</li>
              <li className="introLi">• vous créez un compte,</li>
              <li className="introLi">
                • vous créez un compte à partir d’un module lié aux réseaux
                sociaux,
              </li>
              <li className="introLi">
                • vous vous inscrivez à la newsletter,
              </li>
              <li className="introLi">
                • vous recevez des mails promotionnels/newsletters
              </li>
              <li className="introLi">
                • vous remplissez vos « préférences newsletters »,
              </li>
              <li className="introLi">
                • vous placez un produit dans vos favoris ou dans vos alertes
              </li>
              <li className="introLi">• vous achetez un produit,</li>
              <li className="introLi">
                • participez à un jeu concours sur l’un des sites web ou sur les
                réseaux sociaux,
              </li>
              <li className="introLi">
                • lorsque vous contactez notre service client.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Introduction;
