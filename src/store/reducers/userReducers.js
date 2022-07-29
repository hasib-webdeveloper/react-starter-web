import { createSlice } from '@reduxjs/toolkit'
import { api } from '../../plugins/axios'


export const userSlice = createSlice({
  name: 'user',
  initialState: {
    loggedIn: false,
    loading: false,
    user: null
  },
  reducers: {
    updateUser(state, action) {
      state.loggedIn = action.payload.loggedIn
      state.user = action.payload.user
    },
    setState(state, action) {
      state[action.payload.field] = action.payload.data
    }
  }
})
export const { updateUser, setState } = userSlice.actions

export const setupLogin = ({ loggedIn, user, token }) => dispatch => {
  localStorage.setItem('auth_token', token)
  dispatch(updateUser({ loggedIn, user }))
}

export const initUser = () => async dispatch => {
  if (!localStorage.getItem('auth_token')) return

  console.log(userSlice.getInitialState().loggedIn)

  try {
    dispatch(setState({ field: 'loading', data: true }))
    const res = await api.get('user/profile')
    dispatch(updateUser({ loggedIn: true, user: res.data }))
  } catch (error) {
    // 
  } finally {
    dispatch(setState({ field: 'loading', data: false }))
  }
}

export default userSlice.reducer