import styled from "styled-components"
import { Link } from "react-router-dom"

export default function Header() {
  return (
    <Head>
        <h1>Gestion Supermarche</h1>
        <ImgContainer>
            <Link to={"/work"}>
                <Image src='./work.png' alt='work' />
            </Link>
            <Link to={"/statistique"}>
                <Image src='./statistique.png' alt='statistique'/>
            </Link>
        </ImgContainer>
    </Head> 
  )
}

const Head = styled.header`
    display : flex;
    flex-direction : column;
    align-items : center;
    gap : 15px;
    padding : 15px;
    background-color : rgba(240,240,240,255);
`

const ImgContainer = styled.div`
    display : flex;
    justify-content : space-around;
    width : 80%;
`

const Image = styled.img`
    cursor : pointer;
`
