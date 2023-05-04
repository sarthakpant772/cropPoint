import * as React from 'react'
import Box from '@mui/material/Box'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import HomePage from './component/HomePage'
import { store } from './app/store'
import CreateUnit from './component/unitSystem/CreateUnit'
import Unit from './component/unitSystem/Unit'
import UnitCategory from './component/unitSystem/UnitCategory'
import CreateUnitCategory from './component/unitSystem/CreateUnitCategory'
function App() {
  return (
    <Box>
      <Provider store={store}>
        <Router>
          <Routes>
            <Route exact path="/" element={<HomePage />}>
              <Route path="unitCategory" element={<UnitCategory />} />
              <Route path="unit" element={<Unit />}></Route>
              <Route path="createUnit" element={<CreateUnit />} />
              <Route
                path="createUnitCategory"
                element={<CreateUnitCategory />}
              />
            </Route>
          </Routes>
        </Router>
      </Provider>
    </Box>
  )
}

export default App
