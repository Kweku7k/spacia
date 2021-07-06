import React,{useState, useEffect} from 'react'
import {Container, Row} from 'react-bootstrap'
import Header from '../components/Header'
import axios from 'axios'
import Interactive from '../components/Interactive'
import Workspace from '../components/ListProperties/Workspace'
import TypeOfWorkspace from '../components/ListProperties/TypeOfWorkspace'
const ListProperty = () => {

    const url = 'https://60e22fca5a5596001730f32d.mockapi.io/homes'
    const [product, setProduct] = useState([])

    useEffect(() => {
        axios.get(url)
            .then(response => {
            setProduct(response.data)
    })
    }, [url])


    const localurl = 'https://spacia.page/users/api/v1/users'
    useEffect(() => {
        axios.post(localurl,
        {

            "avatar": "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
            "companyId": 1,
            "contacts": [
              {
                "isContactable": true,
                "isPrimary": true,
                "type": "mobile",
                "value": "0545977791"
              }
            ],
            "firstName": "Nana Kweku",
            "lastName": "Adumatta",
            "role": "approverSubscriber",
            "username": "nanakweku@gmail.com",
          }
    //    {headers:{ headers: {"Access-Control-Allow-Origin": "*"}}
    // }


        )
        .then(res=>(console.log(res)))
        .catch(err=>(console.log(err))
        )
        console.log(localurl)
        
    }, [localurl])

    const card = {
        width:'100%',
        height:'70vh',
        backgroundColor:'white',
        paddingTop:'10vh'
    }

    const selectCard = {
        backgroundColor:'#F1F1F1',
        padding:20,
        borderRadius:5
        // width:''
    }


    const text = {
        marginLeft:40,
        marginBottom:0
    }
    return (
        <>
            <Header title="List a Property" />
            <Container>

                    <TypeOfWorkspace/>

            </Container>


        </>
    )
}

export default ListProperty