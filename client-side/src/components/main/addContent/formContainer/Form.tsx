import { FieldErrors, FieldValues, useForm } from 'react-hook-form'
import { StyledForm, SubmitButton } from '../layoutContainers'
import { DataI } from '../../../../globals/interfaces'
import DescriptionWrapper from './Description'
import DirectorNames from './DirectorNames'
import Genre from './Genre'
import Image from './Image'
import ReleaseDateWrapper from './Date'
import TitleWrapper from './Title'
import { toast } from 'react-toastify'
import { transform } from './utils'
import useMovie from '../../../../hooks/useMovie'
import useScreenSize from '../../../../hooks/useScreenSize'

const ContentForm = () => {
  const { register, control, formState: { errors }, setValue, getValues, handleSubmit, reset } 
    = useForm({ mode: 'onSubmit' })
  const { add, uploadImage } = useMovie()
  const screenSize = useScreenSize()

  const submit = handleSubmit(async (data) => {
    const preparedData = transform(data as DataI)
    await add({ requestType: 'POST', params: preparedData }).then(async (res) => {
      if (res.error) {
        toast.error(res.error)
      } else {
        await uploadImage(preparedData)
        toast.success('Movie was created successfully!')
        reset()
      }
    })
  })

  return (
    <StyledForm screenSize={screenSize} onSubmit={submit}>
      <div className="titleAndDate" >
        <TitleWrapper register={register} errorMessage={errors.title?.message as string} />
        <ReleaseDateWrapper register={register} errorMessage={errors.releaseDate?.message as string} />
      </div>
      <div className="directorNames">
        <DirectorNames register={register} errorMessages={errors.names as FieldErrors<FieldValues>}/>
      </div>
      <div className="description">
        <DescriptionWrapper register={register} />
      </div>
      <Genre register={register} setValue={setValue} control={control} getValues={getValues} />
      <Image
        register={register}
        setValue={setValue}
        errorMessage={errors.poster?.message as string}
        getValues={getValues}
      />
      <SubmitButton>Add Content</SubmitButton>
    </StyledForm>
  )
}

export default ContentForm
