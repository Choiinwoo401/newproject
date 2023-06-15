import React, { useState, useEffect } from 'react';
import { Button } from 'primereact/button';
import Modal from '../Calendar/assets/images/Modal/Modal';
import ProfileChange from './ProfileChange';
import profileImg from './profile.png';
import './Profile.css';
import axios from 'axios';
import ProfileAdd from './ProfileAdd';
const ProfileView = ({ username }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [profileData, setProfileData] = useState(null);
  const [currentProfileIndex, setCurrentProfileIndex] = useState(0);
  const [currentProfileImage, setCurrentProfileImage] = useState(profileImg);
  const [animalName, setAnimalName] = useState('');
  const [sex, setSex] = useState('');
  const [birth, setBirth] = useState('');
  const [imgCrop, setImgCrop] = useState('');
  const [openImagePopup, setOpenImagePopup] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setOpenImagePopup(true);
  };

  useEffect(() => {
    if (imgCrop) {
      const blob = new Blob([imgCrop], { type: 'image/png' });
      const imageUrl = URL.createObjectURL(blob);
      setCurrentProfileImage(imageUrl);
    } else {
      setCurrentProfileImage(profileImg);
    }
  }, [imgCrop]);

  useEffect(() => {
    axios
      .get(`http://3.88.1.192:3000/api/diary/animal?user_id=${username}`)
      .then((response) => {
        const animalData = response.data;
        console.log();
          setProfileData(animalData);
          setCurrentProfileIndex(0);
          setAnimalName(animalData.name || '');
          setSex(animalData.sex || '');
          setBirth(animalData.birth || '');
          setImgCrop(animalData.imgCrop || '');

      })
      .catch((error) => {
        console.error(error);
      });
  }, [username]);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleProfileSave = (data) => {
    const updatedProfileData = [...profileData];
    const index = updatedProfileData.findIndex((profile) => profile.user_id === data.user_id);

    if (index !== -1) {
      updatedProfileData[index] = data;
      setProfileData(updatedProfileData);
      setCurrentProfileIndex(index);
      setAnimalName(data.animal_name || '');
      setSex(data.sex || '');
      setBirth(data.birth || '');
      setImgCrop(data.imgCrop || '');
      closeModal();
    }
  };

  const handleProfileClick = (index) => {
    setCurrentProfileIndex(index);
    setAnimalName(profileData[index]?.name || '');
    setSex(profileData[index]?.sex || '');
    setBirth(profileData[index]?.birth || '');
    setImgCrop(profileData[index]?.imgCrop || '');
  };

  return (
    <div className="profile-container">
      <h2>프로필</h2>

      {profileData !== null ? (
        <>
          {Object.keys(profileData).length === 0 ? (
            <p>프로필 데이터가 없습니다.</p>
          ) : (
            <div className="profile-view">
            <div
              className="profile_img text-center p-4"
              style={{ display: 'flex', margin: '0 auto' }}
            >
              <div className="image_check">
                <img
                  style={{
                    width: '150px',
                    height: '150px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                  }}
                  src={currentProfileImage}
                  alt=""
                  onClick={() => handleImageClick(currentProfileImage)}
                />
              </div>
              <div className="profile-data">
                {currentProfileIndex !== null && profileData && profileData.length > currentProfileIndex ? (
                  <>
                    <p>
                      <strong>이름:</strong> {animalName}
                    </p>
                    <p>
                      <strong>성별:</strong> {sex}
                    </p>
                    <p>
                      <strong>입양일:</strong> {birth}
                    </p>
                  </>
                ) : (
                  <p>프로필 정보를 불러오는 중입니다...</p>
                )}
              </div>
            </div>
          </div>
          )}
        </>
      ) : (
        <p>프로필 데이터를 불러오는 중입니다...</p>
      )}

      {profileData && Object.keys(profileData).length > 1 && (
        <div className="profile-switch">
          {Object.values(profileData).map((profile, index) => (
            <div
              key={index}
              className={`profile-switch-item ${index === currentProfileIndex ? 'active' : ''}`}
              onClick={() => handleProfileClick(index)}
            >
              <img
                style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                }}
                src={profile.imgCrop || profileImg}
                alt=""
                onClick={() => handleProfileClick(index)}
              />
              <p>{profile.name}</p>
            </div>
          ))}
        </div>
      )}

      <Button onClick={openModal} label="추가" className="add-button" />

      {modalOpen && (
        <Modal
          open={modalOpen}
          close={closeModal}
          header={<p className="text-2xl font-semibold textColor">프로필 추가</p>}
        >
          <ProfileAdd
            onProfileSave={handleProfileSave}
            onClose={closeModal}
            user_id={username}
            animal_name={animalName}
            sex={sex}
            birth={birth}
            imgCrop={imgCrop}
          />
        </Modal>
      )}
    </div>
  );
};

export default ProfileView;