function toggleMode(){
  const html= document.documentElement

  if(html.classList.contains("light"))
html.classList.remove("light")
  else(
  html.classList.add("light")
)
const img=document.querySelector("#profile img")

if(img.classList.contains("light"))
  img.setAttribute("src", "./assets/avatar-light.png")

  else(
    img.setAttribute("src", "./assets/avatar.png")
  )
}