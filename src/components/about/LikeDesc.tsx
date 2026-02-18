import React from 'react';

export const LikeDesc = ({ text }: { text: string | undefined }): React.JSX.Element => {
  return <h1 className="text-center subtitle">{text}</h1>;
};
