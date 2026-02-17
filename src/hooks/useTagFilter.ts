import { useState, useCallback } from 'react';

export const useTagFilter = (): {
  activeTags: string[];
  toggleTag: (tag: string) => void;
  isTagActive: (tag: string) => boolean;
  matchesTags: (tags: string[]) => boolean;
} => {
  const [activeTags, setActiveTags] = useState<string[]>([]);

  const toggleTag = useCallback((tag: string) => {
    setActiveTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  }, []);

  const isTagActive = useCallback(
    (tag: string) => activeTags.includes(tag),
    [activeTags]
  );

  const matchesTags = useCallback(
    (tags: string[]) =>
      activeTags.length === 0 || tags.some((t) => activeTags.includes(t)),
    [activeTags]
  );

  return { activeTags, toggleTag, isTagActive, matchesTags };
};
