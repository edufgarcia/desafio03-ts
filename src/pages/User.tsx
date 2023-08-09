import { Center, SimpleGrid, Spinner } from "@chakra-ui/react"
import { useParams, useNavigate } from "react-router-dom"
import { useContext, useEffect, useState } from "react"
import { api } from "../api"
import CardInfo from "../components/CardInfo"
import { AppContext } from "../components/AppContext"
import React from "react"

const User = () => {
    const { id } = useParams()
    const navigate = useNavigate()

    const { isLoggedIn, userData} = useContext(AppContext)

    !isLoggedIn && navigate('/')

    if(userData && id !== userData.id) {
        navigate('/')
    }
  
    return (
      <Center>
        <SimpleGrid columns={2} spacing={8} paddingTop={16}>
          {userData === undefined || userData === null ? (
            <Center>
              <Spinner size="xl" color="white" />
            </Center>
          ) : (
            <>
              <CardInfo
                mainContent="MEUS DADOS"
                content={`Nome: ${userData.name} - Email: ${userData.email}`}
              />
            </>
          )}
        </SimpleGrid>
      </Center>
    );
}

export default User
