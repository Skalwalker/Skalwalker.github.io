import React from 'react';

import { Subtitle } from '../../styles/primitives';

export const LikeDesc = ({ text }: { text: string | undefined }): React.JSX.Element => {
  return (
    <Subtitle as="p" className="text-center" aria-live="polite">
      {text}
    </Subtitle>
  );
};
