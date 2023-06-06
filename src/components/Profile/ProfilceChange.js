import React,{useState} from 'react'
import  "./Profile.css"

const ProfilceChange = () => {
  const [petName,setpetName] = useState(['볼파이톤','']);
  const [petSex,setpetSex] = useState(['남',]);
  const [petBirth,setpetBirth] = useState(['200609',]);

  return (
      <div className="ddd">
        <label className="dddlx">
          <span> 이  름 : {petName}</span> </label>
        <label className="dddlx"> 
          <span> 성  별 : {petSex}</span> </label>
        <label className="dddlx">
          <span > 입양일 : {petBirth} </span> </label>
      </div>

  )
}

export default ProfilceChange