import React, { useState } from 'react';
import { Button } from 'primereact/button';
import Modal from '../Calendar/assets/images/Modal/Modal';
import ProfileChange from './ProfileChange';
import img from './profile.png';
import './Profile.css';

const Profileview = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [profileData, setProfileData] = useState(null);
  const [storeImage, setStoreImage] = useState([]);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleProfileSave = (data) => {
    setProfileData(data);
    if (data.imgCrop) {
      setStoreImage([{ imgCrop: data.imgCrop }]);
    }
    closeModal();
  };

  const profileImageShow = storeImage.length ? storeImage[0].imgCrop : null;

  return (
    <div className="profileCheck">
      <div className="profile_img text-center p-4" style={{ display: 'flex', margin: '0 auto' }}>
        <div className="image_check">
          {profileImageShow ? (
            <div>
              <img
                style={{
                  width: '150px',
                  height: '150px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                }}
                src={profileImageShow}
                alt=""
                onClick={openModal}
              />
            </div>
          ) : (
            <div>
              <img
                style={{
                  width: '150px',
                  height: '150px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                }}
                src={img}
                alt=""
                onClick={openModal}
              />
            </div>
          )}
        </div>
        <div className="profile-data">
          {profileData ? (
            <React.Fragment>
              <p>
                <strong>이름:</strong> {profileData.petName}
              </p>
              <p>
                <strong>성별:</strong> {profileData.petSex}
              </p>
              <p>
                <strong>입양일:</strong> {profileData.petBirth}
              </p>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <p>
                <strong>이름:</strong> petname
              </p>
              <p>
                <strong>성별:</strong> pet성별
              </p>
              <p>
                <strong>입양일:</strong> 입양일
              </p>
            </React.Fragment>
          )}
        </div>
      </div>

      <Button onClick={openModal} label="추가" className="add-button" />

      {modalOpen && (
        <Modal
          open={modalOpen}
          close={closeModal}
          header={() => (
            <p htmlFor="" className="text-2xl font-semibold textColor">
              Update Profile
            </p>
          )}
        >
          <ProfileChange onProfileSave={handleProfileSave} onClose={closeModal} />
        </Modal>
      )}
    </div>
  );
};

export default Profileview;