'use client';
import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useMemo,
} from 'react';

type LearnerContextType = {
  selected: 'learner' | 'mentor' | undefined;
  setSelected: React.Dispatch<
    React.SetStateAction<'learner' | 'mentor' | undefined>
  >;
  isMentor: boolean;
  clearSelection: () => void;
};

const LearnerContext = createContext<LearnerContextType | undefined>(undefined);

export const LearnerMentorProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [selected, setSelected] = useState<'learner' | 'mentor' | undefined>(
    undefined
  );

  // Memoize helper functions to prevent unnecessary re-renders
  const clearSelection = useCallback(() => {
    setSelected(undefined);
  }, []);

  // Memoize computed values
  const value = useMemo(
    () => ({
      selected,
      setSelected,
      isMentor: selected === 'mentor',
      clearSelection,
    }),
    [selected, clearSelection]
  );

  return (
    <LearnerContext.Provider value={value}>{children}</LearnerContext.Provider>
  );
};

// Custom hook with better error message
export const useLearnerMentor = () => {
  const ctx = useContext(LearnerContext);
  if (!ctx) {
    throw new Error(
      'useLearnerMentor must be used within LearnerMentorProvider'
    );
  }
  return ctx;
};
