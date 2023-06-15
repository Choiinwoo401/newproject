import React, { useState, useEffect } from 'react';
import { Button } from 'primereact/button';
import Modal from '../Calendar/assets/images/Modal/Modal';
import ProfileChange from './ProfileChange';
import img from './profile.png';
import './Profile.css';
import axios from 'axios';

const ProfileView = ({ username }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [profileData, setProfileData] = useState([]);
  const [currentProfileIndex, setCurrentProfileIndex] = useState(0);
  const [currentProfileImage, setCurrentProfileImage] = useState(img);
  const [animalName, setAnimalName] = useState('');
  const [sex, setSex] = useState('');
  const [birth, setBirth] = useState('');
  const [imgCrop, setImgCrop] = useState('');
  const [openImagePopup, setOpenImagePopup] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setModalOpen(true);
  };

  useEffect(() => {
    axios
      .get(`http://3.88.1.192:3000/api/diary/animal?user_id=${username}`)
      .then((response) => {
        const { name, sex, birth, imgCrop } = response.data;

        setProfileData(response.data);
        setCurrentProfileIndex(0);
        setCurrentProfileImage(response.data[0]?.images || img);
        setAnimalName(name);
        setSex(sex);
        setBirth(birth);
        setImgCrop(imgCrop);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [username]);

  useEffect(() => {
    console.log(Object.keys(profileData).length);
  }, [profileData]);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedImage(''); // 선택된 이미지 초기화
  };

  const handleProfileSave = (data) => {
    const updatedProfileData = [...profileData];
    const index = updatedProfileData.findIndex((profile) => profile.user_id === data.user_id);

    if (index !== -1) {
      updatedProfileData[index] = data;
      setProfileData(updatedProfileData);
      setCurrentProfileIndex(index);
      setCurrentProfileImage(data.images || img);
      setAnimalName(data.name || '');
      setSex(data.sex || '');
      setBirth(data.birth || '');
      closeModal();
    }
  };

  const handleProfileClick = (index) => {
    setCurrentProfileIndex(index);
    setCurrentProfileImage(profileData[index]?.images || img);
    setAnimalName(profileData[index]?.name || '');
    setSex(profileData[index]?.sex || '');
    setBirth(profileData[index]?.birth || '');
    setImgCrop(profileData[index]?.imgCrop || '');
  };

  const currentProfile =
    Object.keys(profileData).length > 0 ? profileData[currentProfileIndex] : null;

  return (
    <div className="profileCheck">
      <div className="profileContainer">
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
            <p>
              <strong>이름: </strong> {animalName}
            </p>
            <p>
              <strong>성별:</strong> {sex}
            </p>
            <p>
              <strong>입양일:</strong> {birth}
            </p>
          </div>
        </div>
      </div>

      {Object.keys(profileData).length > 1 && (
        <div className="profile-switch">
          {Object.keys(profileData).map((profileKey, index) => (
            <div
              key={index}
              className={`profile-switch-item ${
                index === currentProfileIndex ? 'active' : ''
              }`}
              onClick={() => handleProfileClick(index)}
            >
              <img
                style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                }}
                src={profileData[profileKey]?.images || img}
                alt=""
                onClick={() => handleProfileClick(index)}
              />
              <p>{profileData[profileKey]?.name}</p>
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
          <ProfileChange
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