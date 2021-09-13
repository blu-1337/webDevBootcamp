function validUserNames (usernames){
  return usernames.filter(user =>{
    return user.length < 10
  })
}