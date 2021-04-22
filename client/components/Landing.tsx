import * as React from 'react';
import { useHistory } from 'react-router-dom';

export default function Landing(props: any): null {
  const history = useHistory();
  if (!props.user.username) history.push('/login');
  return null;
}
