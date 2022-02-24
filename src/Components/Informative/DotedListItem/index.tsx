import * as Styles from './styles'

interface DotedListItemProps {
  title: string,
  date: string,
  nameOf: string
}

export function DotedListItem(props: DotedListItemProps) {

  return(
    <Styles.DotedListItem>
      <li><strong className="title-li">{props.title}</strong></li>
      <span>{props.date}</span>
      <span>{props.nameOf}</span>
    </Styles.DotedListItem>

  )
}