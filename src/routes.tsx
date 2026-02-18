import { Routes, Route, Navigate } from 'react-router';

import { Core, Likes, Skills } from './components';
import {
  About,
  AchievementView,
  Errorscreen,
  Experience,
  Projects,
  Covid19,
  Ecosampling,
  GlobalWarming,
  Hare,
  VitalSigns,
  Publications,
} from './views';

export const NavRouter = (): React.JSX.Element => {
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
};

export const AboutRouter = (): React.JSX.Element => {
  return (
    <Routes>
      <Route index element={<Core />} />
      <Route path="likes" element={<Likes />} />
      <Route path="skills" element={<Skills />} />
    </Routes>
  );
};
