import React from 'react'
import Card from 'react-bootstrap/Card';
const Information = () => {
  return (
    <div style={{
        width: "80%",
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
            width: "50%",
            height: "30vh",
            margin: "20px",
        }}className="bg-dark text-white">
            <Card.Link href="/Information/BallPythonMain">
            <Card.Img style={{
                width: "100%",
                height: "30vh",
          }}src="https://m.petinzooshop.com/web/product/big/202112/b35fe805e93e8fcadba1dc221eaf3c06.jpg" />
          <Card.ImgOverlay>
              <Card.Title >볼파이톤</Card.Title>
          </Card.ImgOverlay>
          </Card.Link>
      </Card>

      <Card style={{
            width: "50%",
            height: "30vh",
            margin: "20px",
        }}className="bg-dark text-white">
            <Card.Link href="/Information/CornSnakeMain">
            <Card.Img style={{
                width: "100%",
                height: "30vh",
          }}src="https://www.zooseyo.com/dog_sale/photo_free/202012/1607961122_79909800.jpg" />
          <Card.ImgOverlay>
              <Card.Title>콘스네이크</Card.Title>
          </Card.ImgOverlay>
          </Card.Link>
      </Card>

      </div>
      <div style={{
          display: "flex",
      }}>
      <Card style={{
            width: "50%",
            height: "30vh",
            margin: "20px",
        }}className="bg-dark text-white">
            <Card.Link href="/Information/CrestedGeckoMain">
            <Card.Img style={{
                width: "100%",
                height: "30vh",
          }}src="https://d2u3dcdbebyaiu.cloudfront.net/uploads/atch_img/559/f61e0064dbe3a06dbe17bde87c794698_res.jpeg" />
          <Card.ImgOverlay>
              <Card.Title>크레스티드 게코</Card.Title>
          </Card.ImgOverlay>
          </Card.Link>
      </Card>

      <Card style={{
            width: "50%",
            height: "30vh",
            margin: "20px",
        }}className="bg-dark text-white">
            <Card.Link href="/Information/LeopardGeckoMain">
            <Card.Img style={{
                width: "100%",
                height: "30vh",
          }}src="https://p.turbosquid.com/ts-thumb/95/yAGzS6/fQuAdaVB/leopardgeckoobj3dmodel01/jpg/1460284399/2048x2048/fit_q99/fd94f5b49d8bc37e755a20ec2c3b15e011b8a718/leopardgeckoobj3dmodel01.jpg" />
          <Card.ImgOverlay>
              <Card.Title>레오파드 게코</Card.Title>
          </Card.ImgOverlay>
          </Card.Link>
      </Card>
      
      </div>
      </div>
      
      
  </div>
  )
}

export default Information