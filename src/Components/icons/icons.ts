import { ReactComponent as MapSvg }  from '../../assets/map-pin.svg'
import { ReactComponent as BagSvg } from '../../assets/briefcase.svg'
import { ReactComponent as GithubSvg } from '../../assets/github.svg'
import { ReactComponent as LinkedinSvg } from '../../assets/linkedin.svg'
import { ReactComponent as TwitterSvg } from '../../assets/twitter.svg'
import { ReactComponent as GlobeSvg } from '../../assets/globe.svg'
import { ReactComponent as MailSvg } from '../../assets/mail.svg'
import { ReactComponent as BriefcaseSvg } from '../../assets/briefcase.svg'
import { ReactComponent as ElipseSvg } from '../../assets/elipse.svg'
import { ReactComponent as FolderSvg } from '../../assets/folder.svg'
import { ReactComponent as GitBranchSvg } from '../../assets/git-branch.svg'
import { ReactComponent as StarSvg } from '../../assets/star.svg'





export const icons = {
  mail: MailSvg,
  globe: GlobeSvg,
  twitter: TwitterSvg,
  linkedin: LinkedinSvg,
  github: GithubSvg,
  bag: BagSvg,
  map: MapSvg,
  briefcase: BriefcaseSvg,
  elipse: ElipseSvg,
  folder: FolderSvg,
  gitbranch: GitBranchSvg,
  star: StarSvg,
  
}

export type IconNames = keyof typeof icons

