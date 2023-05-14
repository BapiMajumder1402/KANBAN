import React, { useState } from 'react'
import CardComponent from '../CardComponent/CardComponent'
import { Button } from '@chakra-ui/react'
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import list from './List.module.css'
import { Input } from '@chakra-ui/react'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { ListAtom } from '../Atom/Atom'
import { useRecoilState } from 'recoil'

export default function List() {
    const [listInput, setListInput] = useState()
    const [mainList , setMainList ] = useRecoilState(ListAtom)
    const [show, setshow] = useState(false)

    function toogle() {
        setshow(!show)
    }
    function handleListInput(){
        setMainList([...mainList,listInput])
        setshow(!show)
        setListInput("")
        
    }
        console.log(mainList)

    return (
        <div className={list.mainContainer}>
            <div className={list.title}>
                {mainList.map((item , index)=>{
                    return(<div className={list.box} key={index}>
                        {item}
                        <div><CardComponent/></div>
                        </div>)
                })}
            </div>
            {/* <div><CardComponent/></div> */}
            <div>
            {!show ?
                <Button
                    size='md'
                    height='45px'
                    width='200px'
                    color='#fffff'
                    backgroundColor='#f1f2f4'
                    border='2px'
                    onClick={toogle}
                    className={list.main_btn}>
                    + Add Title
                </Button> : <Card>
                    <CardBody >
                        <Input value={listInput} variant='filled' placeholder='Filled' onChange={(e)=>setListInput(e.target.value)} />
                        <div className={list.input_close}>
                            <Button colorScheme='teal' variant='outline' onClick={handleListInput} >
                                Add
                            </Button>
                            <AiOutlineCloseCircle onClick={toogle} />
                        </div>
                    </CardBody>
                </Card>}</div>
            
        </div>
    )
}
