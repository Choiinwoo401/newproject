import React, { useState, useRef } from 'react'
import Avatar from "react-avatar-edit";
import { Button } from "primereact/button";
import img from './profile.png';
import Modal from '../Calendar/assets/images/Modal/Modal';
import ProfilceChange from './ProfilceChange';

const Profileview = () => {
  
  const [dialogs, setdialogs]= useState(false);
  const [imgCrop, setimgCrop] = useState(false);
  const [storeImage, setstoreImage]= useState([]);
  const [modalOpen, setmodalOpen] = useState(false);

  const onClose = () =>{
    setimgCrop(null);
  };

  const onCrop = (view) => {
    setimgCrop(view);
  };

  const saveCropImage = () => {
    setstoreImage([...storeImage,{imgCrop}])
    setdialogs(false)
  };

  const openModal = () => {
    setmodalOpen(true);
  };
  const closeModal = () => {
    setmodalOpen(false);
  };

  const profileiamgeShow =  storeImage.map(item=>item.imgCrop);

  return (
    <div className="profileCheck" >
      <div className='profile_img text-center p-4' style={{display:'flex', margin:'0 auto'}}>
        <div className="image_check"  >
          <img
            style={{
              width: "150px",
              height: "150px",
              borderRadius:"50%",
              objectFit : "cover",
            }}
            src = {profileiamgeShow.length? profileiamgeShow:img}
            alt =""
            onClick={openModal} 
          />

      <React.Fragment>
          <Modal
            open={modalOpen}
            close={closeModal}
            header = {() => (
              <p htmlFor="" className="text-2xl font-semibold textColor">
                update Profile
              </p>
            )}
          >
            <div className="confirmation-content flex flex-column align-items-center">
              <div className=" flex felx-column align-items-center mt-5 w-12">
                <div className="flex flex-column justify-content-around w-12 mt-4">
                  <Avatar
                    width={400}
                    height={300}
                    onClose={onClose}
                    onCrop={onCrop}
                  />
                  <Button
                    onClick={saveCropImage}
                    label="Save"
                    icon="pi pi-check"
                  />
                  
                </div>  
              </div>
            </div>
          </Modal>
          </React.Fragment>
        </div>
        
      <ProfilceChange/>
      </div>
      
    </div>
  )
}

export default Profileview