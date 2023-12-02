import {
  Control,
  FieldErrors,
  FieldValues,
  RegisterOptions,
  UseFormGetValues,
  UseFormRegisterReturn,
  UseFormSetValue
} from 'react-hook-form'
import { MouseEventHandler } from 'react'
import { NavigateFunction } from 'react-router-dom'
import { REQUEST_TYPE } from '../reducers/utils'

export interface ApiState {
  loading: boolean,
  data: object,
  error?: string | unknown
}
export type MovieState = {
  movies: MovieType[] | null
  current_page: number
  total_count: number
  field: string | null
  order: string | null 
}

export interface RequestsInterface {
  GET: string,
  PUT: string,
  POST: string,
  DELETE: string
}

type requestType = keyof typeof REQUEST_TYPE

export interface ApiParams {
  requestType: requestType,
  url?: string,
  params?: object,
}

export interface FormFieldProps {
  register: (name: string, options?: RegisterOptions) => UseFormRegisterReturn
  errorMessage?: string | undefined,
  errorMessages?: FieldErrors<FieldValues> | undefined,
}

export interface GenreI extends FormFieldProps {
  setValue: UseFormSetValue<FieldValues>
  control: Control
  getValues: UseFormGetValues<FieldValues>
}

export interface ImageI extends FormFieldProps {
  setValue: UseFormSetValue<FieldValues>
  getValues: UseFormGetValues<FieldValues>
}

export interface StyledInput {
  shouldWarn?: boolean
  screenSize?: string | null
}

export interface DataI {
  id: number,
  title: string,
  releaseDate: string,
  names: {
    firstName: string,
    lastName: string,
  },
  description: string,
  genres: object[],
  poster: File
}
export interface GenreOption {
  label: string, 
}

export interface addMovieParams extends ApiParams {
  params: {
    attachments: {
      title: string,
      poster: Blob
    },
    movie: {
      title: string,
      release_date: string,
      description: string,
      genres: Array<string>
    }
  }
}

export interface uploadImageI {
  attachments: {
    title: string,
    poster: File
  },
}

export interface navigationI {
  navigate: NavigateFunction
  screenSize: string | null
}

export interface wrapperI {
  screenSize: string | null
}

export interface paragraphI {
  isActive: boolean
  screenSize: string | null
}

export interface fetchMoviesI extends ApiParams {
  params: {
    currentPage?: number,
    page: number,
    order?: string,
    field?: string,
  }
}

export interface movieI extends React.ComponentPropsWithoutRef<'button'>{
  id: string,
  director_id: number
  title: string,
  genres: string[],
  description: string,
  first_name: string,
  last_name: string,
  profile_image: Blob,
  release_date: string,
}

export type MovieType = {
  id: string,
  director_id: number
  title: string,
  genres: string[],
  description: string,
  first_name: string,
  last_name: string,
  profile_image: Blob,
  release_date: string,
}

export interface MovieCardProps {
  movie: MovieType
  handleShowDetails: MouseEventHandler
}

export type modalPosition = {
  top?: number,
  left?: number,
  arrowPosition?: string
  screenSize?: string
}
