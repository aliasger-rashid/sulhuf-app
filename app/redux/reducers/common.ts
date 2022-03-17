/* eslint-disable consistent-return */
/* eslint-disable no-param-reassign */
import produce from "immer"
import {
  FETCH_ERROR,
  FETCH_START,
  FETCH_SUCCESS,
  RESET,
  RESTORE_SPLASH,
} from "../actions/action-types"

const INIT_STATE = {
  loading: true,
  error: "",
}

export default produce((draft, action) => {
  switch (action.type) {
    case FETCH_START: {
      return { ...draft, error: "", loading: true }
    }
    case FETCH_SUCCESS: {
      return { ...draft, error: "", loading: false }
    }
    case FETCH_ERROR: {
      return { ...draft, loading: false, error: action.payload }
    }
    case RESTORE_SPLASH: {
      return {
        ...draft,
        loading: false,
      }
    }

    case RESET:
      return INIT_STATE // Always return the initial state
    default:
      return draft
  }
}, INIT_STATE)
