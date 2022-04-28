import { Card } from '@shopify/polaris'
import React from 'react'
import { contextResult } from '../../states/result/ResultProvider';
import Action from '../ActionText/Action';
import { AddSvg } from '../Svgs/SvgFiles';

const ResultList = () => {

  const {changeStateCreate_Fn} = contextResult();

  const actionChangeCreateList = () => {
    changeStateCreate_Fn(true);
  }

  return (
    <Card >
      <Card.Section title="List results">
        <div>Result List</div>
      </Card.Section>
      <Card.Section >
          <div onClick={actionChangeCreateList}>
            <Action
              textDescription='Add a section' 
              eventAction={actionChangeCreateList}
              btnSvg={<AddSvg/>}
            />
          </div>
        </Card.Section>
    </Card>
  )
}

export default ResultList