    import React, { useEffect, useState } from "react";
    import s from "./style.module.scss";
    import Button from "@mui/material/Button";
    import {
    red,
    blue,
    lightGreen,
    lightBlue,
    yellow,
    blueGrey,
    } from "@mui/material/colors";
import { useDispatch } from "react-redux";
import { changeStatus } from "../../state/pedidos.tsx";


export const Card = ({ id, date, finalDate, status, elements }) => {
    const dispatch = useDispatch();
        const [cardColor, setCardColor] = useState<string>("");
        const [buttonP, setButtonP] = useState<string>("");
        const [status_,setStatus] = useState<string>(status);

    const onClickFBhandler = (e)=>{
        e.preventDefault();
        if(status_ ==="pendiente") {
            setStatus("en curso");
            dispatch(changeStatus({id:id, newStatus:"en curso"}));
        }
        else {
            setStatus("finalizado");
            dispatch(changeStatus({id:id, newStatus:"finalizado"}));
        }
    }   
    
    const onClickChandler = (e)=>{
        e.preventDefault();
        setStatus("cancelado");
        dispatch(changeStatus({id:id, newStatus:"cancelado"}));
    }



  useEffect(() => {
    console.log(status);
    if (status_ === "pendiente") {setCardColor(blueGrey[100]); setButtonP("Iniciar");}
    else if (status_ === "en curso") {setCardColor(yellow[400]); setButtonP("Finalizar");}
    else if (status_ === "finalizado") {setCardColor(lightGreen[300]);}
    else if (status_ === "cancelado") {setCardColor(red[500]);};

  }, [status_]);

    return (
        <div className={s.container}>
        <div className={s.card}>
            <div className={s.top} style={{backgroundColor:cardColor}}>
            <div className={s.title}>
                <h1>Pedido #{id}</h1>
                <h1>{date}</h1>
            </div>
            <p>({status_})</p>
            </div>
            <div className={s.cardContentP}>
                <div className={s.cardContent}>
                {elements.map((element: string, i: number) => {
                    return (
                    <>
                        <p key={i}>{element}</p>
                        {i != elements.length - 1 && <hr />}
                    </>
                    );
                })}
                </div>
            </div>
            {status_!="cancelado" && status_!="finalizado" && <div className={s.buttons}>
            <Button
            onClick={onClickFBhandler}
            variant="contained"
            style={{
                backgroundColor: blue[500],
                textTransform: "none",  
                padding: "0 !important",
            }}
            >
            {buttonP}
            </Button>
            
            <Button
            onClick={onClickChandler}
            variant="contained"
            style={{
                backgroundColor: red[500],
                color: "white",
                textTransform: "none",
            }}
            >
            Cancelar
            </Button>
        </div> }   
        </div>  
        </div>
    );
    };
