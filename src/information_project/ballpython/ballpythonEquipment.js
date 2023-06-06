import React from 'react'
import Card from 'react-bootstrap/Card';

const ballpythonEquipment = () => {
  return ( 
    <div style={{
        width: "100%",
        height: "70vh",
        margin: "0 auto",
    }}>
    <div style={{
        position: "fixed",
        top: "50vh",
        left: "50%",
        transform: "translate(-50%, -50%)",
    }}>

    <div style={{
        display: "flex",
    }}>
    <Card style={{
        width: "100%",
        height: "40vh",
        margin: "20px",
    }}className="bg-dark text-white">
        <Card.Link href="/Information">
        <Card.Img style={{
          width: "100%",
          height: "40vh",
        }}src="https://mblogthumb-phinf.pstatic.net/MjAyMTAxMDNfMTEy/MDAxNjA5NjA0OTYwOTM0.YJY8FQj4VFxxRRbu715YcJkUa2z6TM3KTGfcxt1ttkgg.YV3gSztv8PAh8jo1dY_skviKMx5UccPJc07poJrA134g.PNG.fabulous_python/KakaoTalk_20210103_012856144.png?type=w800" />
        바닥재
        </Card.Link>
    </Card>

    <Card style={{
        width: "100%",
        height: "40vh",
        margin: "20px",
    }}className="bg-dark text-white">
        <Card.Link href="/Transaction">
        <Card.Img style={{
          width: "100%",
          height: "40vh",
        }}src="https://mblogthumb-phinf.pstatic.net/MjAyMTAxMTFfNzEg/MDAxNjEwMjk4ODgxMjM3.sOfKi48dgfnrYCe1_Jv3IhsHe-UXo1_xjsgjxj7pEUYg.Ng0S2tq6sF2ORV6gx-nHdBoagfUlsBpfYMSskLkpwscg.PNG.fabulous_python/SE-e7fb847a-1931-4eaa-bd77-e1041cc08cf1.png?type=w800" />
        모프계산기
        </Card.Link>
    </Card>

    <Card style={{
        width: "100%",
        height: "30vh",
        margin: "20px",
    }}className="bg-dark text-white">
        <Card.Link href="/Community">
        <Card.Img style={{
          width: "100%",
          height: "40vh",
        }}src="https://mblogthumb-phinf.pstatic.net/MjAyMTAxMTFfMTQz/MDAxNjEwMjk4OTk0ODk3.-s2Lb7k-FZOdNgSyCJV7TI5B5CI4Fha7yATCu7xEgiog.Md2j5CJQloZBoV8JwiLkkoCuEaV9pBvm7sDQ1r2kzuYg.PNG.fabulous_python/SE-a394ad7b-7ac7-443c-a2a2-0e51c781184a.png?type=w800" />
        
        </Card.Link>
    </Card>

   </div>
   </div>   
    </div>
  )
}

export default ballpythonEquipment