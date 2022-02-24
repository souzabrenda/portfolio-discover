import { InformationItem } from './InformationItem'
import * as Styles from './styles'

import  { ReactComponent as MapSvg }  from '../../assets/map-pin.svg'
import { ReactComponent as BagSvg } from '../../assets/briefcase.svg'
import { ReactComponent as GithubSvg } from '../../assets/github.svg'
import { ReactComponent as LinkedinSvg } from '../../assets/linkedin.svg'
import { ReactComponent as TwitterSvg } from '../../assets/twitter.svg'
import { ReactComponent as GlobeSvg } from '../../assets/globe.svg'
import { ReactComponent as MailSvg } from '../../assets/mail.svg'
import { TecnologyItem } from './TecnologyItem'
import { DotedListItem } from './DotedListItem'



export function Informative() {

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
          <InformationItem 
            icon={MapSvg}
            link="www.google.com"
            label="Porto Alegre"
          />
          <InformationItem 
            icon={BagSvg}
            link="/"
            label="-"
          />
          <InformationItem 
            icon={GithubSvg}
            link="https://github.com/souzabrenda"
            label="souzabrenda"
          />
          <InformationItem 
            icon={LinkedinSvg}
            link="https://www.linkedin.com/in/brenda-souza-231792210/"
            label="Brenda Souza"
          />
          <InformationItem 
            icon={TwitterSvg}
            link="/"
            label="-"
          />
          <InformationItem 
            icon={GlobeSvg}
            link="/"
            label="-"
          />           
          <InformationItem 
            icon={MailSvg}
            link="souzabrenda.cello@gmail.com"
            label="souzabrenda.cello@gmail.com"
          />
        </ul>
      </Styles.Informations>

      <Styles.Tecnologies>
        <strong>Tecnologias</strong>
        <ul>
          <TecnologyItem 
            name="html"
          />
          <TecnologyItem 
            name="css"
          />
          <TecnologyItem 
            name="javascript"
          />
          <TecnologyItem 
            name="reactjs"
          />
          <TecnologyItem 
            name="typescript"
          />
          <TecnologyItem 
            name="githuub"
          />
        </ul>        
      </Styles.Tecnologies>

      <Styles.DotedList>
        <strong>Experiências</strong>
        <DotedListItem 
          title="Rocketseat"
          date="2021 - Atualmente"
          nameOf="Community Experience"
        />
      </Styles.DotedList>

      <Styles.DotedList>
        <strong>Educação</strong>
        <DotedListItem 
          title="Curso em Vídeo"
          date="2021"
          nameOf="Curso de Javascript Moderno"
        />
        <DotedListItem 
          title="Rocketseat"
          date="2021 - Atualmente"
          nameOf="Discover"
        />
        <DotedListItem 
          title="Rocketseat"
          date="2021 - Atualmente"
          nameOf="Ignite Pro"
        />
      </Styles.DotedList>

    </Styles.Informative>
  )
    
  
}