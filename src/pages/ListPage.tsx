import React from 'react';
import {
  IonFab,
  IonFabButton,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  useIonViewWillEnter,
} from '@ionic/react';
import { Redirect, Route, useRouteMatch } from 'react-router';
import Fab from '../assets/images/dragon-game.png';
import { useUIContext } from '../shared/context/tab-context';
import ColorStageBPage from './ColorStageBPage';
import ColorSecondLevelPage from './second.level/ColorSecondLevelPage';
import TabB from './TabB';
import TabC from './TabC';

const ListPage: React.FC = () => {
  const { showTabs, setShowTabs } = useUIContext();
  const match = useRouteMatch();

  useIonViewWillEnter(() => {
    setShowTabs(true);
  });

  const tabBarStyle = showTabs ? { display: 'flex' } : { display: 'none' };

  return (
    <>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path={`${match.url}/stagea`} component={TabB} />
          <Route exact path='/app/list/stagea/color-game'>
            <ColorStageBPage />
          </Route>
          <Route exact path='/app/list/stagea/color-game/2nd-level'>
            <ColorSecondLevelPage />
          </Route>
          <Route exact path={`${match.url}/stageb`} component={TabC} />
          <Route exact path={'/app/list'}>
            <Redirect to='/app/list/stagea' />
          </Route>
        </IonRouterOutlet>

        <IonTabBar slot='bottom' mode='md' style={tabBarStyle} color='primary'>
          <IonTabButton tab='stageb' href='/app/list/stageb'></IonTabButton>
        </IonTabBar>
      </IonTabs>

      {showTabs && (
        <div className='custom-fab'>
          <IonFab slot='fixed' vertical='bottom' horizontal='center' edge>
            <IonFabButton routerDirection='root' routerLink='/app/list/stageb'>
              <img src={Fab} alt='Baby Dragon' width={44} height={44} />
            </IonFabButton>
          </IonFab>
        </div>
      )}
    </>
  );
};

export default ListPage;