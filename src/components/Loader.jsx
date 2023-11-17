import React, { useState, useEffect } from 'react';
import style from "../css-modules/Loader.module.css";

const Loader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simula una breve demora para propósitos de demostración
    setTimeout(() => {
      setLoading(false);
    }, 1000); // Puedes ajustar la duración de la simulación según tus necesidades
  }, []);

  return (
    <div className={`${style["container--loader"]} ${loading ? style.visible : style.hidden}`}>
      {loading ? (
        <div className={style.loader}></div>
      ) : (
        <div className={style.loadedContent}>
          Carga completa, contenido listo...
        </div>
      )}
    </div>
  );
};

export default Loader;
