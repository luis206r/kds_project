import React, { useEffect, useState } from "react";
import { Card } from "../Card/index.tsx";
import s from "./style.module.scss";
import { useSelector } from "react-redux";
import { RootState } from "../../state/store.tsx";
import Button from "@mui/material/Button";
import {
  red,
  blue,
  lightGreen,
  lightBlue,
  yellow,
  blueGrey,
} from "@mui/material/colors";

export const Grill = () => {
  const [filtro, setFiltro] = useState<string>("all");
  const [data, setData] = useState<any[]>([]);
  const [filtroColorButtons, setFiltroColorButtons] = useState<object>({
    "pendiente":blue[500],
    "en curso":blue[500],
    "finalizado":blue[500],
    "cancelado":blue[500]
  });

  const onClickFilter = (e) => {
    e.preventDefault();
    const nuevoFiltro = e.target.value;

    if (nuevoFiltro === filtro) {
      setFiltro("all");
      setData(pedidos);
    } else {
      setFiltro(nuevoFiltro);
      const filtered = pedidos.filter((pedido) => pedido.status === nuevoFiltro);
      setData(filtered);
      console.log(data)
    }
    changeColorButtons(nuevoFiltro);
  };

  const changeColorButtons = (filtro_)=>{
    const obj = {
      "pendiente":blue[500],
      "en curso":blue[500],
      "finalizado":blue[500],
      "cancelado":blue[500]
    }
    setFiltroColorButtons(obj);
    if(filtro_!=filtro)
      obj[filtro_] = blue[900];
  }
  
  const pedidos = useSelector((state: RootState) => state.pedidos);
  useEffect(() => {
    if(filtro=="all")
    setData(pedidos);
  }, [pedidos]);

    return (
      <div className={s.parent}>
        <div className={s.buttons}>
          <Button
            onClick={onClickFilter}
            value="pendiente"
            variant="contained"
            style={{
              backgroundColor: filtroColorButtons["pendiente"],
              textTransform: "none",
              padding: "0 !important",
            }}
          >
            Pendientes
          </Button>
          &nbsp;&nbsp;
          <Button
            onClick={onClickFilter}
            value="en curso"
            variant="contained"
            style={{
              backgroundColor: filtroColorButtons["en curso"],
              color: "white",
              textTransform: "none",
            }}
          >
            En curso
          </Button>
          &nbsp;&nbsp;
          <Button
            onClick={onClickFilter}
            value="finalizado"
            variant="contained"
            style={{
              backgroundColor: filtroColorButtons["finalizado"],
              color: "white",
              textTransform: "none",
            }}
          >
            Finalizados
          </Button>
          &nbsp;&nbsp;
          <Button
            onClick={onClickFilter}
            value="cancelado"
            variant="contained"
            style={{
              backgroundColor: filtroColorButtons["cancelado"],
              color: "white",
              textTransform: "none",
            }}
          >
            Cancelados
          </Button>
        </div>
        {data.length>0 &&<div className={s.container}>
          {
            data.map((pedido) => {
              return (
                <Card
                  key={pedido.id}
                  id={pedido.id}
                  date={pedido.initialTime}
                  finalDate={pedido.finalTime}
                  status={pedido.status}
                  elements={pedido.elements}
                />
              );
            })}
        </div>}
        {
          data.length==0 && <div style={{textAlign:"center"}}>No hay pedidos en estado <b>({filtro})</b></div>
        }
      </div>
    );
};
