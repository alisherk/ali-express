import { createSelector } from 'reselect';

const selecDir = state => state.directory;

export const selectDirSection = createSelector(
  selecDir,
  directory => directory.sections
);
