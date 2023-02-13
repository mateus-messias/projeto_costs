import { useState } from 'react'
import Input from '../form/Input'
import SubmitButton from '../form/SubmitButton'
import styles from '../../project/ProjectForm.module.css'

function ServiceForm({ handleSubmit, btnText, projectData }) {

    const [service, setService] = useState({})

    function submit(e) {
        e.preventDefault()
        projectData.services.push(service)
        handleSubmit(projectData)
    }

    function handleChange(e) {
        setService({...service, [e.target.name]: e.target.value})
    }

    return ( 
        <form onSubmit={submit} className={styles.form}>
            <Input
                type='text'
                text='Nome do servico'
                name='name'
                placeholder='insira o nome do servico'
                handleOnChange={handleChange}
            />
            <Input
                type='number'
                text='Custo do servico'
                name='cost'
                placeholder='insira o valor total'
                handleOnChange={handleChange}
            />
            <Input
                type='text'
                text='descricao do servico'
                name='description'
                placeholder='descreva o servico'
                handleOnChange={handleChange}
            />
            <SubmitButton text={btnText}/>
        </form>
    )
}

export default ServiceForm