import React from "react";
import style from './Botao.module.scss'

interface Props {
    texto?: String, 
    type?: "button" | "submit" | "reset" | undefined,
    onClick?: () => void } {
}

export default function Botao( {texto, type, onClick} : Props) {
    return (
        <button onClick={onClick} type={type} className={style.botao}>{ texto }</button>

    )
}