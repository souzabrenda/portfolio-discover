import * as Styles from './styles'

interface TecnologyItemProps {
  name: string
}

export function TecnologyItem(props: TecnologyItemProps) {
  
  return(
    <Styles.TecnologyItem>
      <span>{props.name}</span>
    </Styles.TecnologyItem>
  )
}