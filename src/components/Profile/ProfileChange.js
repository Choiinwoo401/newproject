import React, { useState } from 'react';
import { Button } from 'primereact/button';
import Avatar from 'react-avatar-edit';

const ProfileChange = ({ onProfileSave, onClose }) => {
  const [petName, setPetName] = useState('');
  const [petSex, setPetSex] = useState('');
  const [petBirth, setPetBirth] = useState('');
  const [imgCrop, setImgCrop] = useState(null);

  const handleAddButtonClick = () => {
    const profileData = {
      petName,
      petSex,
      petBirth,
      imgCrop,
    };
    onProfileSave(profileData);
    onClose();
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

  return (
    <div className="profile-change">
      <div className="form-group">
        <label>이름:</label>
        <input
          type="text"
          value={petName}
          onChange={(e) => setPetName(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>성별:</label>
        <input
          type="text"
          value={petSex}
          onChange={(e) => setPetSex(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>입양일:</label>
        <input
          type="text"
          value={petBirth}
          onChange={(e) => setPetBirth(e.target.value)}
        />
      </div>
      <div className="avatar-container">
        <Avatar
          width={200}
          height={200}
          onCrop={onCrop}
          onClose={() => setImgCrop(null)}
        />
      </div>
      <Button onClick={handleAddButtonClick} label="추가" />
      <Button onClick={onCloseModal} label="닫기" className="p-button-secondary" />
    </div>
  );
};

export default ProfileChange;