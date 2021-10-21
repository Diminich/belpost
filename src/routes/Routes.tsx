import styles from './../app.module.scss'
import { Redirect, Route, Switch } from "react-router-dom";
import Page from "../components/page/Page";
import HomePage from '../components/homePage/HomePage';
import SecondaryPage from '../components/secondaryPage/SecondaryPage';

const Routes = () => {
  return (
    <Switch>
      <Route exact path='/belpost' render={() => <HomePage />} />
      <Route exact path='/belpost/administrativeProcedures' render={() => <SecondaryPage />} />
      <Route exact path='/belpost/administrativeProcedures/page1' render={() => <Page />} />
      <Route exact path='/belpost/administrativeProcedures/page2' render={() => <Page />} />
      <Route exact path='/belpost/management' render={() => <SecondaryPage />} />
      <Route exact path='/belpost/management/page1' render={() => <Page />} />
      <Route exact path='/belpost/management/page2' render={() => <Page />} />
      <Route path={'/404'} render={() => <div className={styles.notFound}>404 NOT FOUND</div>} />
      <Redirect from={'*'} to={'/404'} />
    </Switch>
  );
}

export default Routes;