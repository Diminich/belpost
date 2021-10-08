import styles from './../app.module.scss'
import { Redirect, Route, Switch } from "react-router-dom";
import AdministrativeProcedures from "../components/administrativeProcedures/AdministrativeProcedures";
import Page from "../components/administrativeProcedures/page/Page";
import HomePage from '../components/homePage/HomePage';

const Routes = () => {
  return (
    <Switch>
      <Route exact path='/' render={() => <HomePage />} />
      <Route exact path='/AdministrativeProcedures' render={() => <AdministrativeProcedures />} />
      <Route exact path='/Page' render={() => <Page />} />
      <Route path={'/404'} render={() => <div className={styles.notFound}>404 NOT FOUND</div>} />
      <Redirect from={'*'} to={'/404'} />
    </Switch>
  );
}

export default Routes;