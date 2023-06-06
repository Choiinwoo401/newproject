import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const ballpythonMain = () => {
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
            <Card.Link href="/Information/BallPythonMain/BallpythonAdoption">
            <Card.Img style={{
              width: "100%",
              height: "40vh",
            }}src="http://kimsreptile.com/web/product/big/202109/56107829cea9e658cc36a0820bc4c115.jpg" />
            볼파이톤 입양하기
            </Card.Link>
        </Card>
  
        <Card style={{
            width: "100%",
            height: "40vh",
            margin: "20px",
        }}className="bg-dark text-white">
            <Card.Link href="/Information/BallPythonMain/BallpythonAfter">
            <Card.Img style={{
              width: "100%",
              height: "40vh",
            }}src="https://www.popco.net/zboard/data/dica_forum_panasonic/2018/05/17/17606681335afc480f23961.jpg" />
            볼파이톤 입양 이후
            </Card.Link>
        </Card>
  
        <Card style={{
            width: "100%",
            height: "30vh",
            margin: "20px",
        }}className="bg-dark text-white">
            <Card.Link href="/Information/BallPythonMain/BallpythonEquipment">
            <Card.Img style={{
              width: "100%",
              height: "40vh",
            }}src="https://scontent-ssn1-1.xx.fbcdn.net/v/t1.6435-9/103570093_2970897376326197_6056743209621351454_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=9267fe&_nc_ohc=bJRJRx01IJkAX96iQf3&_nc_ht=scontent-ssn1-1.xx&oh=00_AfBfP1Xeg9wbFgGzH8_I5KqKlRikX8BXziRXq5ULxlPKRA&oe=6491A0FE" />
            필요 도구
            </Card.Link>
        </Card>
  
       </div>
       </div>
    </div>
  )
}

export default ballpythonMain