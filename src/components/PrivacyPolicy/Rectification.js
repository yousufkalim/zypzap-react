import React, { useState } from "react";
import ShowIcon from "../../assets/ShowIcon.svg";
import CloseIcon from "../../assets/CloseIcon.svg";

const Rectification = () => {
  const [showIcons, setShowIcons] = useState(true);
  return (
    <>
      <div className="intro-container">
        <div className="intro-centerDiv">
          <div className="followwingDataHeading">
            <div className="followwingDataQuandDiv">
              <h3 className="introHeadingH4">
                6. Rectification et suppression des données
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
              <p className="TraitementP">
                Les informations personnelles que nous collectons sont destinées
                à mieux répondre à vos demandes et à traiter vos commandes.
                Conformément à la loi n° 78-17 du 6 janvier 1978, relative à
                l’Informatique, aux Fichiers et aux Libertés, vous disposez d’un
                droit d’accès, de rectification et de suppression des données à
                caractère personnel vous concernant et faisant l’objet de
                traitements sous la responsabilité de ZYPZAP.
              </p>
              <p className="TraitementP">
                Vous pouvez l’exercer en vous adressant à notre service clients
                sous réserve de la production d’un justificatif d’identité
                valide. Vous pouvez également vous désabonner à tout moment de
                puis la page « Newsletter » avec le bouton « NE PLUS RECEVOIR DE
                MAIL » ou depuis les liens « Se désabonner » présents dans
                chacun de nos envois.c).
              </p>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Rectification;
