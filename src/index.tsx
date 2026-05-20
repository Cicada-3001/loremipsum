import React from 'react'
import { createRoot } from 'react-dom/client'
import { Router, Route, Switch } from 'wouter'
import AuthorizedArea from './components/AuthorizedArea'
import ResizeObserver from './components/ResizeObserver'
import { UserProvider } from './context/UserContext'
import { LocationProvider } from './context/LocationContext'
import useLocationContext from './hooks/useLocationContext'

import 'sanitize.css'
import './appMainStyles.css'
import Onboarding from './views/Onboarding'
import JobDetailsView from './views/JobDetailsView'

const container = document.getElementById('app-container')
const root = createRoot(container!) // createRoot(container!) if you use TypeScript

root.render(
  <React.StrictMode>
    <LocationProvider>
      <UserProvider>
        <ResizeObserver>
          <Router hook={useLocationContext}>
            <Switch>
              <Route path="/signin" component={Onboarding} />

              <AuthorizedArea>
                <Route path="/" component={JobDetailsView} />
              </AuthorizedArea>
            </Switch>
          </Router>
        </ResizeObserver>
      </UserProvider>
    </LocationProvider>
  </React.StrictMode>,
)
