import { useRef, useState } from "react"
import emailjs from '@emailjs/browser'


export default function Contact () {
    // const [inputValue, setInputValue] =  useState('')
    const form = useRef();

    const sendEmail = (event) => {
        event.preventDefault()
    }
}