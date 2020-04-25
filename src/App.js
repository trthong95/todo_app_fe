import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter';
import { makeStyles } from '@material-ui/core/styles';
import AuthContext from './contexts/auth';
import { useAuth } from './hooks/auth';
import TodosContext from './contexts/todos';
import { useTodos } from './hooks/todos';
const useStyles = makeStyles({
  app: {
    height: '100vh',
    display: 'flex',
    flexFlow: 'column',
  },
});
function App() {
  const classes = useStyles();
  const { userInfo, ...authContext } = useAuth();
  return (
    <div className={classes.app}>
      <BrowserRouter>
        <AuthContext.Provider value={{ userInfo, ...authContext }}>
          <TodosContext.Provider value={useTodos(userInfo)}>
            <AppRouter />
          </TodosContext.Provider>
        </AuthContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
