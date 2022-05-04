import { EmptyState } from '@shopify/polaris'
import React from 'react'
import { contextDiagnostic } from '../../states/diagnostic/DiagnosticProvider'

const StateEmpty = () => {

  const {actionCreateQuestion_Fn, createQuestion} = contextDiagnostic();
  return (
   
        <EmptyState
          heading="Here view your questions preview at quiz"
          action={{ 
            content: 'Add Question', 
            onAction: () => actionCreateQuestion_Fn(!createQuestion)}}
          image="https://cdn.shopify.com/s/files/1/0262/4071/2726/files/emptystate-files.png"
        >
          <p>Add a question or select a question at list</p>
        </EmptyState>
    
  )
}

export default StateEmpty