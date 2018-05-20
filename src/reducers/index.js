import { combineReducers } from 'redux';
import RiskReducer from './RiskReducer';
import PortfolioReducer from './PortfolioReducer';

export default combineReducers({
  ideal_portfolio: RiskReducer,
  user_portfolio: PortfolioReducer
});
