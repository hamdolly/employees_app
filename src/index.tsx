import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */

/* import '@ionic/react/css/palettes/dark.always.css'; */
/* import '@ionic/react/css/palettes/dark.class.css'; */
import '@ionic/react/css/palettes/dark.system.css';

/* Theme variables */
import './theme/variables.css';
import Start from './pages/Start/Start';
import AddNewEmployee from './pages/AddNewEmployee/AddNewEmployee';
import Attendance from './pages/Attendance/Attendance';
import Template from './pages/Attendance/Template';
import SelectShift from './pages/Attendance/SelectShift';
import ShiftTime from './pages/Attendance/ShiftTime';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>

      <IonRouterOutlet>

        <Route exact path="/home">
          <Home />
        </Route>

        <Route exact path="/">
          <Redirect to="/home" />
        </Route>

        <Route exact path="/start">
          <Start />
        </Route>

        <Route exact path="/new-employee">
          <AddNewEmployee />
        </Route>

        <Route exact path="/attendance1/:shift">
        <Attendance shift={1} />
        </Route>

        <Route exact path="/attendance2/:shift">
          <Attendance shift={2} />
        </Route>

        <Route exact path="/attendance3/:shift">
        <Attendance shift={3} />
        </Route>

        <Route exact path="/attendance4/:shift">
        <Attendance shift={4} />
        </Route>

        <Route exact path="/attendance5/:shift">
        <Attendance shift={5} />
        </Route>

        <Route exact path="/attendance/template/:data">
          <Template />
        </Route>

        <Route exact path="/select/shift">
          <SelectShift />
        </Route>

        <Route exact path="/select/shift/time/:time">
          <ShiftTime />
        </Route>

      </IonRouterOutlet>

    </IonReactRouter>
  </IonApp>
);

export default App;
