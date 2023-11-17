import React, { useState, useEffect } from 'react';
import style from "../css-modules/Loader.module.css";

const Loader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.addEventListener('load', () => {
      setLoading(false);
    });

    return () => {
      window.removeEventListener('load', () => {
        setLoading(false);
      });
    };
  }, []);

  if (loading) {
    return (
      <div className={style["container--loader"]}>
        <div className={style.loader}></div>
      </div>
    );
  }

  return null;
};

export default Loader;
