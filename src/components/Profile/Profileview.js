import React, { useState, useEffect } from 'react';
import { Button } from 'primereact/button';
import Modal from '../Calendar/assets/images/Modal/Modal';
import ProfileChange from './ProfileChange';
import img from './profile.png';
import './Profile.css';
import axios from 'axios';

const Profileview = (props) => {
  const { username } = props;
  const [modalOpen, setModalOpen] = useState(false);
  const [profileData, setProfileData] = useState(null);
  const [storeImage, setStoreImage] = useState([]);
  const [id, setId] = useState('');
  const [animal_name, setAnimalName] = useState('');
  const [sex, setSex] = useState('');
  const [birth, setBirth] = useState('');

  useEffect(() => {
    axios
      .get(`http://3.88.1.192:3000/api/diary/animal?user_id=${username}`)
      .then((response) => {
        const { id, animal_name, sex, birth } = response.data;
        setProfileData(response.data);
        setId(id);
        setAnimalName(animal_name);
        setSex(sex);
        setBirth(birth);
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
                <strong>이름:</strong> {profileData.name}
              </p>
              <p>
                <strong>성별:</strong> {profileData.user_id}
              </p>
              <p>
                <strong>입양일:</strong> {profileData.birth}
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
          header={
            <p className="text-2xl font-semibold textColor">
              Update Profile
            </p>
          }
        >
        <ProfileChange
          onProfileSave={handleProfileSave}
          onClose={closeModal}
          id={username}
          animal_name={profileData.animal_name}
          sex={profileData.sex}
          birth={profileData.birth}
        />
        </Modal>
      )}
    </div>
  );
};

export default Profileview;