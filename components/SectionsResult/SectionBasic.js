import React from 'react'
import Img from '../Img/Img';
import { EmptyStyle, SectionStyles } from './styles'

const SectionBasic = ({data}) => {

  const {type} = data;
  const {title, subtitle, parragrah, images} = data.content;

  console.log(type);
  return (
          <SectionStyles>

            <h2>{title}</h2>

            <h3>{subtitle}</h3>

            <p>{parragrah}</p>

            {type === 'sectionImage' &&
              <span>
                {images.map(img => 
                  (
                    <Img urlImg={img.image} wImg="130px" hImg="130px"/>
                  )
                )}
              </span>
            }

            {type === 'score' &&
              <EmptyStyle>
                Score
              </EmptyStyle>
            }

            {type === 'recommendation' &&
              <EmptyStyle>
                Recommendation
              </EmptyStyle>
            }

          </SectionStyles>
  )
}

export default SectionBasic