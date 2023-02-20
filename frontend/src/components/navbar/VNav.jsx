import React from 'react'
import {Flex, Button, Text} from '@chakra-ui/react'
import { useNavigate } from 'react-router'

const VNav = () => {
  const navigate = useNavigate()
  return (
    <Flex direction={'column'} h="100%" w="15%" align={'center'} border='1px solid black' p="2em" gap="10px">
        <Button onClick={()=>navigate("/")} w="80%">Home</Button>
        <Button onClick={()=>navigate("/about")} w="80%">About</Button>
        <Button onClick={()=>navigate("/profile")} w="80%">Profile</Button>
        <Button onClick={()=>navigate("/")} w="80%">Logout</Button>
    </Flex>
  )
}

export default VNav