import { DataI, GenreOption } from '../../../../globals/interfaces'

export const transform = (data: DataI) => {
  return {
    movie: {
      title: data.title,
      release_date: data.releaseDate,
      description: data?.description,
      genres: convertToArray(data.genres as GenreOption[]),
    }, director_names: {
      first_name: data.names.firstName,
      last_name: data.names.lastName,
    },
    attachments: { 
      poster: data.poster,
      title: data.title
     }
  }
}

const convertToArray = (genres: GenreOption[]) => {
  const array: string[] = []

  genres.forEach(genre => {
    array.push(genre.label)
  })

  return array
}

export const genreOptions = () => {
  const LIST = ['Action', 'Comedy', 'Drama', 'Fantasy', 'Horror', 'Mystery', 'Romance', 'Thriller', 'Western']

  return LIST.map((genre) => ({
    label: genre,
    value: genre.toLocaleLowerCase(),
  }))
}

