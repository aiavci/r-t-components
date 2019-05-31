import * as React from 'react'
import { Card } from '@material-ui/core';

type Props = {
  onClickEvent: any,
  title: string,
  imageUrl?: string
}

const ClickableCard = ({title, imageUrl, onClickEvent}: Props) => {
  return (
    <Card style={{
      display: 'flex', flexDirection: 'column', alignItems: 'center', paddingBottom: '2em', cursor: 'pointer'
    }}
      onClick={() => onClickEvent()}
    >
      <h4>{title}</h4>
      <img style={{ maxHeight: '150px' }} src={imageUrl} />
    </Card>
  )
}

export default ClickableCard;
