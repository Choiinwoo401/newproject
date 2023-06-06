import React from 'react'
import Card from 'react-bootstrap/Card';

const Home = () => {
  return (

    <div style={{
      width: "70%",
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
          <Card.Link href="/Information">
          <Card.Img style={{
              width: "100%",
              height: "30vh",
          }}src="data:image/jpeg;base64,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" />
          <Card.ImgOverlay>
              <Card.Title>정보</Card.Title>
          </Card.ImgOverlay>
          </Card.Link>
      </Card>

      <Card style={{
            width: "50%",
            height: "30vh",
          margin: "20px",
      }}className="bg-dark text-white">
          <Card.Link href="/Trade">
          <Card.Img style={{
            width: "100%",
            height: "30vh",
          }}src="https://m.더쥬.com/web/product/big/202212/b87b5ae42d28668752daa32d3f96774d.jpg" />
          <Card.ImgOverlay>
              <Card.Title>거래</Card.Title>
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
          <Card.Link href="/Community">
          <Card.Img style={{
              width: "100%",
              height: "30vh",
          }}src="https://www.popco.net/zboard/data/dica_forum_panasonic/2018/05/17/17606681335afc480f23961.jpg" />
          <Card.ImgOverlay>
              <Card.Title>커뮤니티</Card.Title>
          </Card.ImgOverlay>
          </Card.Link>
      </Card>

      <Card style={{
        width: "50%",
        height: "30vh",
          margin: "20px",
      }}className="bg-dark text-white">
          <Card.Link href="/QnA">
          <Card.Img style={{
              width: "100%",
              height: "30vh",
          }}src="https://cdn-pro-web-216-165.cdn-nhncommerce.com/cocktailteam_godomall_com/data/goods/19/01/03/1000001557/1000001557_detail_044.jpg" />
          <Card.ImgOverlay>
              <Card.Title>QnA</Card.Title>
          </Card.ImgOverlay>
          </Card.Link>
      </Card>

      </div>
      </div>
      
      
  </div>
  )
}

export default Home