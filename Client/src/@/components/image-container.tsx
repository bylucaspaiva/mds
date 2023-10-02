interface Props {
  id: number
}

const ImageContainer = ({id} : Props) => {
  console.log(id)
  return (
    <div className='overflow-hidden rounded-md col-span-1 transform hover:scale-110 transition-transform'>
      <img src='https://images.unsplash.com/photo-1615247001958-f4bc92fa6a4a?w=300&dpr=2&q=80' alt='id'/>
    </div>
  )
}

export default ImageContainer