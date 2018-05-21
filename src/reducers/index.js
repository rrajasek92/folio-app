import { combineReducers } from 'redux';
import RiskReducer from './RiskReducer';
import PortfolioReducer from './PortfolioReducer';
import DonutReducer from './DonutReducer';

export default combineReducers({
  ideal_portfolio: RiskReducer,
  user_portfolio: PortfolioReducer,
  donut_reducer: DonutReducer
});
