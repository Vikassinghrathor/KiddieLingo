import { useState } from 'react';

import { CapacitorHttp, HttpResponse } from '@capacitor/core';
import { useIonViewWillEnter } from '@ionic/react';

import { API } from '../../constants';
import { Animal } from '../../types';

export const useStageBAnimals = () => {
  const [isAnimalsLoading, setisAnimalsLoading] = useState<boolean>(false);
  const [animals, setAnimals] = useState<Animal[]>([]);

  const getAnimals = async () => {
    setisAnimalsLoading(true);

    try {
      const res: HttpResponse = await CapacitorHttp.get({
        url: `${API}/stages/stageb/animals`,
      });

      const data = (await res.data) || {};

      if (!data || !data[0].stage_b) {
        throw new Error('Invalid response format');
      }
      return data[0].stage_b;
    } catch (error) {
      console.error('Fetch error: ', error);
    } finally {
      setisAnimalsLoading(false);
    }
  };

  useIonViewWillEnter(() => {
    const loadAnimals = async () => {
      const { animals } = await getAnimals();
      setAnimals(animals);
      setisAnimalsLoading(false);
    };
    loadAnimals();
  });

  return { animals, setAnimals, getAnimals, isAnimalsLoading };
};
