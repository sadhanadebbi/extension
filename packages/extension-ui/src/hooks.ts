// Copyright 2019 @polkadot/extension-ui authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { useEffect, RefObject } from 'react';

export const useOutsideClick = (ref: RefObject<HTMLDivElement>, callback: () => void): void => {
  const handleClick = (e: MouseEvent): void => {
    if (ref.current && !ref.current.contains(e.target as HTMLInputElement)) {
      callback();
    }
  };
  useEffect(() => {
    document.addEventListener('click', handleClick);
    return (): void => {
      document.removeEventListener('click', handleClick);
    };
  });
};