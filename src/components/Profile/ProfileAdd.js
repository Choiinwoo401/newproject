import React, { useState } from 'react';
import { Button } from 'primereact/button';
import Avatar from 'react-avatar-edit';
import axios from 'axios';

const ProfileAdd = ({ onProfileSave, onClose, user_id }) => {
  const [petName, setPetName] = useState('');
  const [petSex, setPetSex] = useState('');
  const [petBirth, setPetBirth] = useState('');
  const [imgCrop, setImgCrop] = useState(null);

  const handleUpdateButtonClick = () => {
    const profileData = {
      user_id,
      animal_name: petName,
      sex: petSex,
      birth: petBirth,
      images: imgCrop,
    };

    axios
      .post(`http://3.88.1.192:3000/api/diary/animal?user_id=${user_id}`, profileData)
      .then((response) => {
        console.log(response.data);
        onProfileSave(profileData);
        onClose();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const onCloseModal = () => {
    setPetName('');
    setPetSex('');
    setPetBirth('');
    setImgCrop(null);
    onClose();
  };

  const onCrop = (view) => {
    setImgCrop(view);
  };

  const canvasProps = {
    canvas: {
      width: 200,
      height: 200,
      style: {
        willReadFrequently: true,
      },
    },
  };

  return (
    <div className="profile-change">
      <div className="form-group">
        <label>이름:</label>
        <input type="text" value={petName} onChange={(e) => setPetName(e.target.value)} />
      </div>
      <div className="form-group">
        <label>성별:</label>
        <input type="text" value={petSex} onChange={(e) => setPetSex(e.target.value)} />
      </div>
      <div className="form-group">
        <label>입양일:</label>
        <input type="text" value={petBirth} onChange={(e) => setPetBirth(e.target.value)} />
      </div>
      <div className="avatar-container">
        <Avatar
          {...canvasProps}
          width={200}
          height={200}
          onCrop={onCrop}
          onClose={() => setImgCrop(null)}
        />
      </div>
      <Button onClick={handleUpdateButtonClick} label="추가" />
      <Button onClick={onCloseModal} label="닫기" className="p-button-secondary" />
    </div>
  );
};

export default ProfileAdd;