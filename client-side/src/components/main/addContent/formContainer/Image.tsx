import { ImageI, StyledInput as ParagraphI } from '../../../../globals/interfaces'
import { useEffect, useState } from 'react'
import { StyledLabel } from '../layoutContainers'
import styled from 'styled-components'
import useScreenSize from '../../../../hooks/useScreenSize'

const Image = (props: ImageI) => {
  const [isUploaded, setIsUploaded] = useState(false)
  const { register, errorMessage, setValue, getValues } = props
  const screenSize = useScreenSize() 

  useEffect(() => {
    if (getValues('poster')?.length >= 0) {
      setIsUploaded(false)
    }
  }, [getValues('poster')])
  
  
  return (
    <Wrapper>
      <StyledLabel>Image:</StyledLabel>
      {(getValues('poster') === undefined || !isUploaded) ?
        <ImageLabel htmlFor='poster'>
          Upload file
          <input
            {...register('poster', { required: 'Movie image is required.' })}
            id='poster'
            name='poster'
            type='file'
            accept="image/png, image/gif, image/jpeg"
            multiple={false}
            hidden
            onChange={(e) => {
              if (e.currentTarget.files) {
                setValue('poster', e.currentTarget.files[0])
                setIsUploaded(true)
              }
            }}
          />
        </ImageLabel>
        :
        <StyledParagraph>Uploaded successfully!</StyledParagraph>
      }
      {errorMessage && !isUploaded &&
        <StyledParagraph shouldWarn={true} screenSize={screenSize}>{errorMessage}</StyledParagraph>
      }
      
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin: 30px 20px 50px 20px;
`

const ImageLabel = styled(StyledLabel)`
  cursor: pointer;
  padding: 5px 20px;
  margin-left: 5px;
  background-color: #C3CAD8;
  border-radius: 5px;
  font-size: 16px;

  &:hover {
    color: #4e798e;
    background-color: #2c3345;
  }
`

const StyledParagraph = styled.p<ParagraphI>`
  color: #18BD5B;
  display: inline;
  margin-left: 10px;

  ${({ shouldWarn }) => shouldWarn && `
    color: #D61355;
  `}

  ${({ screenSize, shouldWarn }) => screenSize === 'mobile' && shouldWarn && `
    display: block;
    margin: 5px 0px 0px 0px;    
  `}
`

export default Image
