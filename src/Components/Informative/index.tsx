import { InformationItem } from './InformationItem'
import * as Styles from './styles'

import { ReactComponent as MapSvg }  from '../../assets/map-pin.svg'
import { ReactComponent as BagSvg } from '../../assets/briefcase.svg'
import { ReactComponent as GithubSvg } from '../../assets/github.svg'
import { ReactComponent as LinkedinSvg } from '../../assets/linkedin.svg'
import { ReactComponent as TwitterSvg } from '../../assets/twitter.svg'
import { ReactComponent as GlobeSvg } from '../../assets/globe.svg'
import { ReactComponent as MailSvg } from '../../assets/mail.svg'
import { TecnologyItem } from './TecnologyItem'
import { DotedListItem } from './DotedListItem'
import { ComponentProps } from 'react'
import { stringify } from 'querystring'


type InformationItemProps = ComponentProps<typeof InformationItem>
type DotedListItemProps = ComponentProps<typeof DotedListItem>


export function Informative() {

  const informations: InformationItemProps[] = [
    {
      icon: 'map',
      link: 'www.google.com',
      label:'Porto Alegre'
    },
    {
      icon: 'bag',
      link: '',
      label: '-'
    },
    {
      icon: 'github',
      link: 'https://github.com/souzabrenda',
      label: 'Github'
    },
    {
      icon: 'linkedin',
      link: 'https://www.linkedin.com/in/brenda-souza-231792210/',
      label: 'Linkedin'
    },
    {
      icon: 'twitter',
      link: '',
      label: '-'
    },
    {
      icon: 'globe',
      link: '',
      label: '-'
    }, 
    {
      icon: 'mail',
      link: 'souzabrenda.cello@gmail.com',
      label: 'souzabrenda.cello@gmail.com'
    }
  ]

  const renderInformations = informations.map((value, index) => {
    return (
      <InformationItem 
        icon={value.icon}
        link={value.link}
        label={value.label}
        key={index}
      />
    )
  })

  const techs = [
    'html',
    'css',
    'javascript',
    'reactjs',
    'typescript',
    'styled-component',
    'git'
  ]
  
  const renderTechs = techs.map((value, index) => {
    return (
      <TecnologyItem 
        name={value}
        key={index}
      />
    )
  })


  const dotedListItemExperiences: DotedListItemProps[] = [
    {
      title: 'Rocketseat',
      date: '2021 - atualmente',
      nameOf: 'Community Experience'
    }
  ]

  const renderExperiencies = dotedListItemExperiences.map((value, index) => {
    return (
      <DotedListItem 
        title={value.title}
        date={value.date}
        nameOf={value.nameOf}
        key={index}
      />  
    )
  })

  const dotedListItemEducation: DotedListItemProps[] = [
    {
      title: 'Curso em Video',
      date: '2021',
      nameOf: 'Curso de Javascript Moderno'
    },
    {
      title: 'Rocketseat',
      date: '2021 - atualmente',
      nameOf: 'Discover'
    },
    {
      title: 'Rocketseat',
      date: '2021 - atualmente',
      nameOf: 'Ignite Pro'
    }     
  ]

  const renderEducation = dotedListItemEducation.map((value, index) => {
    return (
      <DotedListItem
        title={value.title}
        date={value.date}
        nameOf={value.nameOf}
        key={index}
      />
    )
  })


 
  return (
    <Styles.Informative>

      <Styles.Profile>
        <div>
          <img src="https://avatars.githubusercontent.com/u/83673701?v=4" alt="" />
        </div>
        <strong>Brenda Souza</strong>
        <span>Frontend Developer</span>
      </Styles.Profile>

      <Styles.Informations>
        <ul>
          {renderInformations}
        </ul>
      </Styles.Informations>

      <Styles.Tecnologies>
        <strong>Tecnologias</strong>
        <ul>
          {renderTechs}
        </ul>        
      </Styles.Tecnologies>

      <Styles.DotedList>
        <strong>Experiências</strong>
        {renderExperiencies}
      </Styles.DotedList>

      <Styles.DotedList>
        <strong>Educação</strong>
        {renderEducation}
      </Styles.DotedList>

    </Styles.Informative>
  )
    
  
}