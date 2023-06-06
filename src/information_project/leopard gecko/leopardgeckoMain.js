import React from 'react'
import Card from 'react-bootstrap/Card';

const leopardgeckoMain = () => {
  return (    <div style={{
    width: "100%",
    height: "70vh",
    margin: "0 auto",
}}>
    <div style={{
        position: "absolute",
        top: "50vh",
        left: "50%",
        transform: "translate(-50%, -50%)",
    }}>

    <div style={{
        display: "flex",
    }}>
    <Card style={{
        width: "100%",
        height: "30vh",
        margin: "20px",
    }}className="bg-dark text-white">
        <Card.Link href="/Information">
        <Card.Img style={{
            width: "100%",
            height: "30vh",
        }}src="https://www.insectharmony.net/shopimages/ljungo56/mobile/4/3551124_represent?04271835" />
        레오파드게코 입양하기
        </Card.Link>
    </Card>

    <Card style={{
        width: "100%",
        height: "30vh",
        margin: "20px",
    }}className="bg-dark text-white">
        <Card.Link href="/Transaction">
        <Card.Img style={{
            width: "100%",
            height: "30vh",
        }}src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6ZjGm2HacX-NOAcVdmgJIDpy83d9gyKLGcw&usqp=CAU" />
        레오파드게코 입양 이후
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
            height: "30vh",
        }}src="https://scontent-ssn1-1.xx.fbcdn.net/v/t1.6435-9/103570093_2970897376326197_6056743209621351454_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=9267fe&_nc_ohc=bJRJRx01IJkAX96iQf3&_nc_ht=scontent-ssn1-1.xx&oh=00_AfBfP1Xeg9wbFgGzH8_I5KqKlRikX8BXziRXq5ULxlPKRA&oe=6491A0FE" />
        필요 도구
        </Card.Link>
    </Card>

   </div>
   </div>
</div>
  )
}

export default leopardgeckoMain