import {ScoreSvg, HomeSvg,DiagnosticSvg } from '../Svgs/SvgFiles';

export const Links = [
  {
    to: '/?',
    text: 'Home',
    icon: <HomeSvg/>
  },
  {
    to: '/',
    text: 'test',
    icon: <DiagnosticSvg/>
  },
  {
    to: '/diagnostic',
    text: 'Diagnostic',
    icon: <ScoreSvg/>
  }
]