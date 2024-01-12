import React, { useEffect, useState } from 'react'
import fakedata from '../../utils/fakedata.ts'
import { useDispatch } from 'react-redux'
import { add } from '../../state/pedidos.tsx'
import { Grill } from '../../commons/Grill/index.tsx'


export const Home = () => {
    console.log(fakedata.getSomeFood(5));
    const [loaded, setLoaded] = useState<boolean>(false);
    const dispatch = useDispatch();
    useEffect(()=>{
        let fecha:Date = new Date();
        for(let x:number = 0; x<10; x++) {
            let y:number = Math.floor(Math.random() * 6) + 4;
            let pedido = {
                id: x+1,
                status:"pendiente",
                initialTime : `${fecha.getHours()}:${fecha.getMinutes()}`,
                finalTime :"",
                elements : fakedata.getSomeFood(y) 
            } 
            dispatch(add(pedido))
        }
        
    },[])
  return (
    <div>
        {
            <Grill type={"pedidos"}/>
        }
    </div>
  )
}
