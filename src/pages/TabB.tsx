import React from 'react';

import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonToolbar,
} from '@ionic/react';
import { useRouteMatch } from 'react-router';
import { Link } from 'react-router-dom';

import Title from '../components/common/Title';

const TabB: React.FC = () => {
  const match = useRouteMatch();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color='primary'>
          <IonButtons slot='start'>
            <IonMenuButton />
          </IonButtons>
          <Title title='Stage A' styleType='toolbar' fontSize='text-2xl' />
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className='ion-padding mistary-game-bg'>
        <h1>STAGE A</h1>
        <ul className='flex flex-wrap items-center justify-center gap-4'>
          {' '}
          <Link to={`${match.url}/color-game`} className='blob stage-category'>
            <figure className='ball ball-game ball-colors-game'>
              <span className='shadow'></span>
              <span className='label'></span>
            </figure>
          </Link>
        </ul>
      </IonContent>
    </IonPage>
  );
};

export default TabB;
