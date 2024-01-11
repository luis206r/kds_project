import React from 'react'
import s from "./style.module.scss"

export const Card = () => {
  return (
    <div className={s.container}>
        <div className={s.card}>
            <div className={s.cardContent}>
                <h1>Esta es una orden</h1>
                <p>esta orden contiene varios elementos</p>
                <ul>
                    <li>papa</li>
                    <li>camote</li>
                    <li>pera</li>
                    <li>manzana</li>
                    <li>platano</li>
                    <li>papa</li>
                    <li>camote</li>
                    <li>pera</li>
                    <li>manzana</li>
                    <li>platano</li>
                    <li>papa</li>
                    <li>camote</li>
                    <li>pera</li>
                    <li>manzana</li>
                    <li>platano</li>
                    <li>papa</li>
                    <li>camote</li>
                    <li>pera</li>
                    <li>manzana</li>
                    <li>platano</li>
                </ul>
            </div>
        </div>
    </div>
  )
}
