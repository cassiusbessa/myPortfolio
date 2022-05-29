import React from 'react';
import { Container, Typography } from '@mui/material';
import { SiJavascript, SiTypescript, SiReact, SiCss3, SiMaterialui, SiDocker, SiHtml5, SiTailwindcss, SiSass, SiNodedotjs, SiRedux, SiMysql, SiHeroku, SiGithub, SiGit } from 'react-icons/si';
import TechCard from './TechCard';

const techArray = [
  { icon: <SiJavascript />, name: 'JavaScript' },
  { icon: <SiTypescript />, name: 'TypeScript' },
  { icon: <SiHtml5 />, name: 'HTML5' },
  { icon: <SiReact />, name: 'React' },
  { icon: <SiRedux />, name: 'Redux' },
  { icon: <SiCss3 />, name: 'CSS3' },
  { icon: <SiMaterialui />, name: 'Material-UI' },
  { icon: <SiTailwindcss />, name: 'Tailwind CSS' },
  { icon: <SiSass />, name: 'Sass' },
  { icon: <SiDocker />, name: 'Docker' },
  { icon: <SiNodedotjs />, name: 'Node.js' },
  { icon: <SiMysql />, name: 'MySQL' },
  { icon: <SiHeroku />, name: 'Heroku' },
  { icon: <SiGithub />, name: 'GitHub' },
  { icon: <SiGit />, name: 'Git' },
];

function FrameWorks() {
  return (
    <Container sx={ { bgcolor: 'primary.main', pb: 8 } } maxWidth="xl">
      <Typography
        variant="h3"
        component="h3"
        sx={ { color: 'primary.contrastText', fontWeight: 700, fontFamily: 'monospace', letterSpacing: '.3rem', textAlign: 'center' } }
      >
        FrameWorks
      </Typography>
      <Typography
        variant="p"
        component="p"
        mt={ 2 }
        sx={ { color: 'primary.contrastText', fontFamily: 'monospace', textAlign: 'center' } }
      >
        There are my favorite frameworks:
      </Typography>
      <Container sx={ { display: 'flex', mt: 4, justifyContent: 'center', flexWrap: 'wrap' } }>
        {techArray.map((tech, index) => (
          <TechCard key={ index } techText={ tech.name }>
            {tech.icon}
          </TechCard>
        ))}
      </Container>
    </Container>
  );
}

export default FrameWorks;
