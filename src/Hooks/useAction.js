import { useDispatch } from 'react-redux';
import { useMemo } from 'react';
import { bindActionCreators } from 'redux';

export const useAction = (actions, deps) => {
  const dispatch = useDispatch();
  return useMemo(
    () => {
      return actions.map((action) => bindActionCreators(action, dispatch));
    },
    deps ? [dispatch, ...actions] : [dispatch],
  );
};
