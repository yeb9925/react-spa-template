
import createHistory from 'history/createBrowserHistory'
import createMemoryHistory from 'history/createMemoryHistory'

const envHistory = process.env.NODE_ENV === 'test' ? createMemoryHistory() : createHistory()

export default envHistory
