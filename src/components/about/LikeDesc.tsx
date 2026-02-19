import React from 'react';

import { Subtitle } from '../../styles/primitives';

export const LikeDesc = ({ text }: { text: string | undefined }): React.JSX.Element => {
  return (
    <Subtitle as="h1" className="text-center">
      {text}
    </Subtitle>
  );
};
