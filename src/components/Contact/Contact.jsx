import { IoMdContact } from "react-icons/io";
import { BsFillTelephoneFill } from "react-icons/bs";
import css from './Contact.module.css'

export default function Contact({ data: { name, number, id }, onDelete }) {
    return (
        <div className={css.container}>
            <div>
                <p>
                    <IoMdContact className={css.icon}/>
                    {name}</p>
                <p>
                    <BsFillTelephoneFill className={css.icon}/>
                    {number}</p>
            </div>
            <button onClick={() => onDelete(id)}>Delete!</button>
        </div>
    )
};