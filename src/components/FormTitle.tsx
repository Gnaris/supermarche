import styled from 'styled-components';

export default function FormTitle({text} : {text : string}) {
  return (
    <Container>
        <Text>{text}</Text>
    </Container>
  )
}

const Container = styled.div`

`

const Text = styled.p`

`
