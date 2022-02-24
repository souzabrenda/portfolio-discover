import { RecentPost } from './RecentPost'
import { ProjectItem } from './ProjectItem'

import * as Styles from './styles'

import { ReactComponent as FolderSvg } from '../../assets/folder.svg'
import { ReactComponent as StarSvg } from '../../assets/star.svg'
import { ReactComponent as BranchesSvg } from '../../assets/git-branch.svg'
import { ReactComponent as LanguageIcon } from '../../assets/elipse.svg'




export function Feed() {

  return(
    <Styles.Feed>
      <div className="header-feed">
        <strong>My Projects</strong>
        <a href="https://github.com/souzabrenda?tab=repositories" target="_blank">Veja todos</a>
      </div>
      <Styles.Container>
        <ProjectItem 
          icon={FolderSvg}
          title="my-onix"
          link="https://github.com/souzabrenda?tab=repositories"
          description="Consulte os códigos de erro que aparecem no painel do veículo Onix.
          "
          starIcon={StarSvg}
          starAmount={10}
          branchesIcon={BranchesSvg}
          branchesAmount={2}
          languageIcon={LanguageIcon}
          languageName="Javascript"
        />
        <ProjectItem 
          icon={FolderSvg}
          title="my-onix"
          link="https://github.com/souzabrenda?tab=repositories"
          description="Consulte os códigos de erro que aparecem no painel do veículo Onix.
          "
          starIcon={StarSvg}
          starAmount={10}
          branchesIcon={BranchesSvg}
          branchesAmount={2}
          languageIcon={LanguageIcon}
          languageName="Javascript"
        /> 
      </Styles.Container>
      <div className="header-feed">
        <strong>Recent Posts</strong>
      </div>
      <RecentPost />
    </Styles.Feed>
  )
}