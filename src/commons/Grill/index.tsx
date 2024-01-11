import React from 'react'
import { Card } from '../Card/index.tsx'
import s from "./style.module.scss"

export const Grill = () => {
  return (
    <div className={s.container}>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
    </div>
  )
}
