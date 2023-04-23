import { Play } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import style from './messa.module.css'
import {
  FormContainer,
  HomeContainer,
  InputAverage,
  SchoolAverage,
  StartButton,
} from './styles'
import { useState } from 'react'

const formValidationSchema = zod.object({
  avaliativa: zod.number().min(1, 'Informe um Número').max(10),
  presencial: zod.number().min(1, 'Informe um Número').max(10),
})

const messageAluno = {
  aprovado: `Parabéns, Esta APROVADO`,
  exame: `Que pena, a sua nota ficou abaixo da média, mas não se preocupe, haverá uma nova oportunidade`,
}
export function Home() {
  const [mediaFinal, setMediaFinal] = useState(0)
  const [message, setMessage] = useState('')
  const [color, setColor] = useState('')
  const { register, handleSubmit, formState } = useForm({
    resolver: zodResolver(formValidationSchema),
  })
  function handleCreateAverage(data: any) {
    const mediaAvaliativa = data.avaliativa * 0.4
    const mediaPresencial = data.presencial * 0.6
    const mediaFinal = mediaAvaliativa + mediaPresencial
    setMediaFinal(mediaFinal)
    if (mediaFinal < 5) {
      setMessage(messageAluno.exame)
      setColor(style.colorMessageExam)
    } else {
      setMessage(messageAluno.aprovado)
      setColor(style.colorMessageApproved)
    }
  }

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateAverage)} action="">
        <FormContainer>
          <label htmlFor="avaliativa">Nota Atividade Avaliativa</label>
          <InputAverage
            type="text"
            id="avaliativa"
            placeholder="ponto no lugar de virgula,Ex: 7.5"
            max={10}
            min={1}
            {...register('avaliativa', { valueAsNumber: true })}
          />

          <label htmlFor="presencial">Nota prova Presencial</label>
          <InputAverage
            type="text"
            id="presencial"
            placeholder="ponto no lugar de virgula,Ex: 7.5"
            max={10}
            min={1}
            {...register('presencial', { valueAsNumber: true })}
          />
        </FormContainer>
        <SchoolAverage>
          <p className={color}>Média geral: {mediaFinal.toFixed(2)} </p>
          <p className={color}> {message} </p>
        </SchoolAverage>
        <StartButton type="submit">
          <Play size={30} />
          Enviar
        </StartButton>
      </form>
    </HomeContainer>
  )
}
