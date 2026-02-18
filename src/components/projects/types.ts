interface ProjectBase {
  title: string;
  banner: string;
  tags: string[];
  language: string;
  year: string;
  url: string;
  highlight: boolean;
  headline: string;
}

export interface InternalProject extends ProjectBase {
  target: '';
  skills: string;
  abstract: string;
  codeUrl: string;
  paperUrl: string;
}

export interface ExternalProject extends ProjectBase {
  target: '_blank';
  skills?: string;
  abstract?: string;
  codeUrl?: string;
  paperUrl?: string;
}

export type ProjectData = InternalProject | ExternalProject;

export type ProjectInfo = Pick<
  InternalProject,
  'title' | 'banner' | 'abstract' | 'skills' | 'codeUrl' | 'paperUrl'
>;

export type ProjectCardInfo = Pick<
  ProjectBase,
  'title' | 'banner' | 'headline' | 'language' | 'year' | 'url'
> & { target: string };

export interface FooterSectionType {
  heading: string;
  desc: string;
}
