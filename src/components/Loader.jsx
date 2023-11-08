import React, { useState, useEffect } from 'react';
import style from "../css-modules/Loader.module.css";
const Loader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  
    window.addEventListener('load', () => {
      console.log('useEffect se ejecutó');
      setLoading(false);
    });
  
    return () => {
      window.removeEventListener('load', () => {
        setLoading(false);
      });
    };
  }, []);

  return (
    <div className={`${style["container--loader"]} ${loading ? style.visible : style.hidden}`}>
      <div className={style.loader}></div>
    </div>
  );
};


export default Loader;
