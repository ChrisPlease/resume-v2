import { library, dom } from '@fortawesome/fontawesome-svg-core'

import {
  faCheck as falCheck,
  faEnvelope as falEnvelope,
  faFileUser as falFileUser,
  faHandWave as falHandWave,
  faHashtag as falHashtag,
  faHome as falHome,
  faListTree as falListTree,
  faLocationDot as falLocationDot,
  faPrint as falPrint,
  faRight as falRight,
} from '@fortawesome/pro-light-svg-icons'

import {
  faMoon as fasMoon,
  faHome as fasHome,
  faFileUser as fasFileUser,
  faSun as fasSun,
  faCircle as fasCircle,
  faArrowRight as fasArrowRight,
} from '@fortawesome/pro-solid-svg-icons';

import {
  faEnvelope as farEnvelope,
  faLocationDot as farLocationDot,
} from '@fortawesome/pro-regular-svg-icons';

import {
  faEnvelope as fadEnvelope
} from '@fortawesome/pro-duotone-svg-icons';

import {
  faCodepen as fabCodepen,
  faGithub as fabGithub,
  faGithubAlt as fabGithubAlt,
  faLinkedin as fabLinkedin,
  faLinkedinIn as fabLinkedinIn,
} from '@fortawesome/free-brands-svg-icons'

library.add(
  fabCodepen,
  fabGithub,
  fabGithubAlt,
  fabLinkedin,
  fabLinkedinIn,

  fadEnvelope,

  fasArrowRight,
  fasHome,
  fasFileUser,
  fasCircle,
  fasMoon,
  fasSun,

  falCheck,
  falEnvelope,
  falFileUser,
  falHandWave,
  falHashtag,
  falHome,
  falListTree,
  falLocationDot,
  falPrint,
  falRight,

  farEnvelope,
  farLocationDot,
)

dom.watch()
