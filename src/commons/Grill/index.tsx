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

export const Grill = ({ type }) => {
  const [data, setData] = useState<any[]>([]);
  const pedidos = useSelector((state: RootState) => state.pedidos);
  useEffect(() => {
    setData(pedidos);
  }, [pedidos, type]);

  if (data.length == 0) return <></>;
  else
    return (
      <div className={s.parent}>
        <div className={s.buttons}>

        <Button
            variant="contained"
            style={{
                backgroundColor: blue[900],
                textTransform: "none",  
                padding: "0 !important",
            }}
            >
            Pendientes
            </Button>
            &nbsp;&nbsp;
            <Button
            variant="contained"
            style={{
                backgroundColor: blue[900],
                color: "white",
                textTransform: "none",
            }}
            >
            En curso
            </Button>
            &nbsp;&nbsp;
            <Button
            variant="contained"
            style={{
                backgroundColor: blue[900],
                color: "white",
                textTransform: "none",
            }}
            >
            Completados
            </Button>
        </div>
        <div className={s.container}>
          {type === "pedidos" &&
            data.map((pedido, i) => {
              return (
                <Card
                  key={i}
                  id={pedido.id}
                  date={pedido.initialTime}
                  finalDate={pedido.finalTime}
                  status={pedido.status}
                  elements={pedido.elements}
                />
              );
            })}
        </div>
      </div>
    );
};
