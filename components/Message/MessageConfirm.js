import { Toast } from '@shopify/polaris';
import React, { useCallback, useState } from 'react'

const MessageConfirm = ({mesagge, actionTitle, actionChange, changeStateDelete}) => {

  const [active, setActive] = useState(true);

  const toggleActive = useCallback(() => {
    changeStateDelete(false)
    setActive((active) => !active), []
  });

  return (
    active &&
    <Toast 
      content={mesagge}  
      duration={12000} 
      onDismiss={toggleActive} 
      action={{
        content: `${actionTitle}`,
        onAction: () => actionChange()
      }}
      />
  );
}

export default MessageConfirm