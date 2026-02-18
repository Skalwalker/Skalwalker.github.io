import { About } from './views/About';
import { Experience } from './views/Experience';
import { AchievementView } from './views/Achiev';
import { Projects } from './views/Projects';
import Publications from './views/Publications';
import { Core } from './components/about/Core';
import { Likes } from './components/about/Likes';
import { Skills } from './components/about/Skills';
import { Errorscreen } from './views/ErrorScreen';
import { Covid19 } from './views/projects/Covid19';
import { GlobalWarming } from './views/projects/GlobalWarming';
import { Hare } from './views/projects/Hare';
import { Ecosampling } from './views/projects/Ecosampling';
import { VitalSigns } from './views/projects/VitalSigns';

import { Routes, Route, Navigate } from 'react-router';

export function NavRouter() {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Navigate to="/about" />} />
      </Route>
      <Route path="/about" element={<About />}>
        <Route index element={<Core />} />
        <Route path="likes" element={<Likes />} />
        <Route path="skills" element={<Skills />} />
      </Route>
      <Route path="/experience" element={<Experience />} />
      <Route path="/achivements" element={<AchievementView />} />
      <Route path="/publications" element={<Publications />} />
      <Route path="/projects">
        <Route index element={<Projects />} />
        <Route path="covid_19" element={<Covid19 />} />
        <Route path="aurora" element={<Hare />} />
        <Route path="global_warming" element={<GlobalWarming />} />
        <Route path="ecosampling" element={<Ecosampling />} />
        <Route path="vital_signs" element={<VitalSigns />} />
      </Route>
      <Route path="*" element={<Errorscreen />} />
    </Routes>
  );
}

export function AboutRouter() {
  return (
    <Routes>
      <Route index element={<Core />} />
      <Route path="likes" element={<Likes />} />
      <Route path="skills" element={<Skills />} />
    </Routes>
  );
}
