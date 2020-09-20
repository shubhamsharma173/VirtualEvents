import axios from 'axios'

export const register = newUser => {
  return axios
    .post('/register', {
      name: newUser.name,
      username: newUser.email,
      password: newUser.password
    })
    .then(response => {
      console.log(response.data);
      return response.data
    })
}

export const login = user => {
    // console.log(user)
  return axios
    .post('/login', {
      username: user.email,
      password: user.password
    }).then(response => {
        localStorage.setItem('gogo_current_user', response.data)
        console.log("see thi one \t"+localStorage.getItem('gogo_current_user'));
        return response.data
      })
    .catch(err => {
      console.log(err)
    })
}

export const getUser = () => {
  // console.log(user)
return axios
  .get('/user').then(response => {
    console.log("user active----\n"+response.data);
      // localStorage.setItem('usertoken', response.data)
      return response.data
    })
  .catch(err => {
    console.log(err)
  })
}