import { Toast } from '@shopify/polaris';
import { useCallback, useState } from 'react';

const Message = ({mesagge, error = false, timer=4000}) => {

  const [active, setActive] = useState(true);

  const toggleActive = useCallback(() =>setActive((active) => !active), []);

  return (
    active &&
    <Toast 
      content={mesagge}  
      duration={timer} 
      error={error} 
      onDismiss={toggleActive} 
      />
  );
}

export default Message