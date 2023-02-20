import React from 'react'
import {Flex, Text, Button, ButtonGroup} from '@chakra-ui/react'
import { useNavigate } from 'react-router'

const HNav = ({...rest}) => {
  const navigate = useNavigate()
  return (
    <Flex align='center' justify={'space-between'} p='0 2em' border={'1px solid black'} {...rest}>
        <Text>Instagram</Text>
        <ButtonGroup>
            <Button onClick={()=>navigate("/login")}>Login</Button>
            <Button onClick={()=>navigate("/register")}>Register</Button>
        </ButtonGroup>
    </Flex>
  )
}

export default HNav