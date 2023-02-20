import React from 'react'
import {Flex, Text, Heading, Image} from '@chakra-ui/react'

const Home = () => {
  return (
    <Flex w="100%" h="100%" p="2em" direction={'column'} align="center">
        <Heading>Welcome!</Heading>
        <Flex justify={'space-between'} p="2em 0">
            <Text>I am Madhurima and this is my first full-stack mini web application.</Text>
            <Image w="30%" src="https://media4.giphy.com/media/l4JyOCNEfXvVYEqB2/giphy.gif?cid=ecf05e47ep9ibhfr5goht80ub3xavbrrbctfhc2qihri7rza&rid=giphy.gif&ct=g"/>
        </Flex>
    </Flex>
  )
}

export default Home