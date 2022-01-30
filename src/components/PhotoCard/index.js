import React from 'react'
import { ImgWrapper, Img, Button, ContentWrapper } from './styles'
import { MdFavoriteBorder } from 'react-icons/md'
import { useNearScreen } from '../../hooks/useNearScreen'

const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1452857297128-d9c29adba80b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
  const { elementRef, visible } = useNearScreen({ persistent: false })

  return (
    <div>
      <ContentWrapper ref={elementRef}>
        {visible && <a href={`/detail/${id}`}>
          <ImgWrapper>
            <Img src={src} />
          </ImgWrapper>
                    </a>}
        <Button>
          <MdFavoriteBorder size='24px' />
          {likes} likes
        </Button>
      </ContentWrapper>
    </div>
  )
}