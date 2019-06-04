export default store => {
  console.log("store初始化了")
  if(localStorage.state) state.replaceState(JSON.stringify(localStorage.state))
  // 每次提交 mutation的时候 调用
  store.subscribe((mutation, state)  => {
    //
    console.log("提交mutation")
    // 存储localStorage
    localStorage.state = JSON.stringify(state)
  })
}
