import React, { useState } from "react";
import ShowIcon from "../../assets/ShowIcon.svg";
import CloseIcon from "../../assets/CloseIcon.svg";

const Partage = () => {
  const [showIcons, setShowIcons] = useState(false);
  return (
    <>
      <div className="intro-container">
        <div className="intro-centerDiv">
          <div className="followwingDataHeading">
            <div className="followwingDataQuandDiv">
              <h3 className="introHeadingH4">5. Partage des données</h3>
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
              <p className="TraitementP">
                ZYPZAP s’engage à ne jamais vendre ou louer vos données ni d’en
                céder des accès sans votre consentement préalable à moins d’y
                être contraints (obligation légale, lutte contre la fraude,
                exercice des droits de la défense…etc).
              </p>
              <p className="TraitementP">
                L’accès à notre base de données est limité aux employés de
                ZYPZAP, habilités en raison de leur mission et engagés à
                respecter notre politique de confidentialité. confidentialité :
              </p>
              <p className="TraitementP">
                Nous partageons ces données (principalement anonymisées sauf
                dans le cas des transports pour le bon acheminement de vos
                commandes) avec des partenaires soumis au règlement général
                européen sur la protection des données personnelles ainsi que la
                loi informatique et liberté. Ces partenaires se sont, de plus,
                engagés contractuellement au respect de la confidentialité de
                vos données.
              </p>
              <p className="TraitementP">
                Nous ne partageons ces informations qu’avec les partenaires
                indispensables pour la prestation de services tiers et pour les
                finalités décrites dans cette politique de confidentialité :
              </p>
              {/* /* --------------------------------- avacNos -------------------------------- */}
              <div className="avecNos">
                <h5 className="avacNosH5">
                  • Avec nos partenaires d’affiliation :
                </h5>
                <p className="avacNosP">
                  1. Google Adwords (Voir leur Charte de protection des données
                  personnelles ici)
                </p>
                <p className="avacNosP">
                  2. Bing (Voir leur Charte de protection des données
                  personnelles ici)
                </p>
              </div>
              {/* /* --------------------------------- avacNos -------------------------------- */}
              <div className="avecNos">
                <h5 className="avacNosH5">• Réseaux sociaux :</h5>
                <p className="avacNosP">
                  1. Facebook (Voir leur Charte de protection des données
                  personnelles ici)
                </p>
                <p className="avacNosP">
                  2. Instagram : (Voir leur Charte de protection des données
                  personnelles ici)
                </p>
                <p className="avacNosP">
                  3. Twitter : (Voir leur Charte de protection des données
                  personnelles ici)
                </p>
              </div>
              {/* /* --------------------------------- avacNos -------------------------------- */}
              <div className="avecNos">
                <h5 className="avacNosH5">
                  • Outils d’analyse du trafic et de la navigation :
                </h5>
                <p className="avacNosP">
                  1. Google analytics (Voir leur Charte de protection des
                  données personnelles ici)
                </p>
              </div>
              {/* /* --------------------------------- avacNos -------------------------------- */}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Partage;
