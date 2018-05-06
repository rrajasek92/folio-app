import { combineReducers } from 'redux';
import RiskReducer from './RiskReducer';
import PortfolioReducer from './PortfolioReducer';

export default combineReducers({
  risk_level: RiskReducer,
  user_portfolio: PortfolioReducer
});
