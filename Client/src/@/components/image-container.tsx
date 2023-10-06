interface Props {
  id: number
}

const ImageContainer = ({id} : Props) => {
  return (
    <div className='px-2 sm:px-0 overflow-hidden rounded-md transform hover:scale-105 sm:hover:scale-105 transition-transform sm:my-2'>
      <img src='https://images.unsplash.com/photo-1615247001958-f4bc92fa6a4a?w=300&dpr=2&q=80' alt={`${id}`}/>
    </div>
  )
}

export default ImageContainer