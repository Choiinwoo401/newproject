import React, { useState, useContext } from 'react';
import styles from './Header.module.scss';
import stylesBtn from '../UI/ButtonMain/MainButton.module.scss';
import MainButton from '../UI/ButtonMain/MainButton.jsx';
import Profileview from '../../../Profile/Profileview';


const HeaderButtons = ( ) => {
 
  const [profileValues, setProfileValues] = useState(null);


  const getProfileValues = () => {
    const profileData = Profileview.getProfileData(); // Get the profile data from the Profileview component
    setProfileValues(profileData);
  };

  return (
    <div className={styles.buttons}>

      <MainButton className={styles.button} onClick={getProfileValues}>
        펫 추가
      </MainButton>
    </div>
  );
};

export default HeaderButtons;