import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteUser, getUsers } from './store/activeUsers/actions'

export default function App() {
  const { users } = useSelector((state) => state.activeUsers)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getUsers())
  }, [])

  return (
    <div>
      <ul>
        {users.map((user) => {
          return (
            <li key={user.id}>
              {user.name} {user.surname}{' '}{user.phone}
              <button
                onClick={() => {
                  dispatch(deleteUser(user.id))
                }}
              >
                del
              </button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
