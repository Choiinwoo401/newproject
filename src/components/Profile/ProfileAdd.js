import React, { useState } from 'react';
import { Button } from 'primereact/button';
import axios from 'axios';

const ProfileAdd = ({ onProfileSave, onClose, user_id, animal_name, sex, birth }) => {
  const [petName, setPetName] = useState(animal_name || ''); // Initialize with an empty string
  const [petSex, setPetSex] = useState(sex || ''); // Initialize with an empty string
  const [petBirth, setPetBirth] = useState(birth || ''); // Initialize with an empty string
  const [selectedImage, setSelectedImage] = useState(null);

  const handleUpdateButtonClick = () => {
    const profileData = {
      user_id,
      animal_name: petName,
      sex: petSex,
      birth: petBirth,
    };
  
    // Create a new FormData instance
    const formData = new FormData();
    formData.append('user_id', user_id);
    formData.append('animal_name', petName);
    formData.append('sex', petSex);
    formData.append('birth', petBirth);
    formData.append('imgCrop', selectedImage);
  
    // Send the profile data and selected image to the server
    axios
      .post('http://3.88.1.192:3000/api/diary/animal', formData)
      .then((response) => {
        console.log(response.data);
        onProfileSave(profileData);
        onClose();
      })
      .catch((error) => {
        // Handle errors
        console.error(error);
      });
  };

  const onCloseModal = () => {
    setPetName('');
    setPetSex('');
    setPetBirth('');
    setSelectedImage(null);
    onClose();
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);
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
      <div className="form-group">
        <label>사진:</label>
        <input type="file" accept="image/*" onChange={handleImageChange} />
      </div>
      <Button onClick={handleUpdateButtonClick} label="추가" />
      <Button onClick={onCloseModal} label="닫기" className="p-button-secondary" />
    </div>
  );
};


export default ProfileAdd;