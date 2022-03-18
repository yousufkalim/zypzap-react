import React, { useState } from "react";
import ShowIcon from "../../assets/ShowIcon.svg";
import CloseIcon from "../../assets/CloseIcon.svg";

const liData = [
  {
    liContent:
      "•	Vos coordonnées comprenant : civilité, nom, prénom, date de naissance, email, adresse postale de livraison et de facturation,",
  },
  {
    liContent:
      "•	Vos données de création de compte incluant votre mot de passe et identifiant unique d’utilisateur,",
  },
  {
    liContent:
      "•	Vos données de navigations : horaires des connexions, historique de navigation, matériel et navigateur utilisés, informations démographiques,",
  },
  {
    liContent: " •	Vos ouvertures d’emails et clics sur les offres",
  },
  {
    liContent:
      "•	Vos préférences et habitudes de consommations si vous remplissez le questionnaire de qualification intitulé « Mes préférences »,",
  },
  {
    liContent:
      "•	Historique commercial et infos relatives aux commandes : Dates, produits et quantités commandées,",
  },
  {
    liContent:
      "•	Autres données fournies par vos soins au Service Après Ventes,",
  },
  {
    liContent:
      " Dans la plupart des cas nous demandons votre consentement pour exécuter ces collectes.",
  },
];

const FollowingData = () => {
  const [showIcons, setShowIcons] = useState(false);
  return (
    <>
      <div className="followwingData-container">
        <div className="followwingData-centerDiv">
          <div className="followwingDataHeading">
            <div className="followwingDataQuandDiv">
              <h3 className="introHeadingH4">
                La société ZYPZAP collecte les données suivantes :
              </h3>
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
              {liData.map((crnVal) => {
                return (
                  <>
                    <p className="followwingDataP">{crnVal.liContent}</p>
                  </>
                );
              })}
            </ul>
            <p className="followwingDataP">
              Vous pouvez également utiliser les outils de gestion de
              l’historique et des cookies de votre navigateur web. ZYPZAP
            </p>
            <p className="followwingDataP2">
              collecte également des données de partenaires tels que les
              informations actualisées de nos transporteurs sur les livraisons.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default FollowingData;
