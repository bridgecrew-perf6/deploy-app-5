import { Toast } from '@shopify/polaris';
import { useCallback, useState } from 'react';

const Message = ({mesagge, error = false}) => {

  const [active, setActive] = useState(true);

  const toggleActive = useCallback(() => setActive((active) => !active), []);

  return (
    active &&
    <Toast 
      content={mesagge}  
      duration={4000} 
      error={error} 
      onDismiss={toggleActive} 
      />
  );
}

export default Message