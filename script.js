// Menu data structure
var menuLinks = [
    { text: "about", href: "/about" },
    {
      text: "catalog",
      href: "#",
      subLinks: [
        { text: "all", href: "/catalog/all" },
        { text: "top selling", href: "/catalog/top" },
        { text: "search", href: "/catalog/search" },
      ],
    },
    {
      text: "orders",
      href: "#",
      subLinks: [
        { text: "new", href: "/orders/new" },
        { text: "pending", href: "/orders/pending" },
        { text: "history", href: "/orders/history" },
      ],
    },
    {
      text: "account",
      href: "#",
      subLinks: [
        { text: "profile", href: "/account/profile" },
        { text: "sign out", href: "/account/signout" },
      ],
    },
  ]
  
  
  // Task 1.0-1.3
  let mainEl = document.querySelector('main')
  mainEl.style.backgroundColor = 'var(--main-bg)'
  mainEl.innerHTML = "<h1>SEI Rocks!</h1>"
  mainEl.classList.add("flex-ctr")
  
  
  
  // Task 2.0-2.3
  let topMenuEl = document.querySelector('#top-menu')
  topMenuEl.style.height = "100%"
  topMenuEl.style.backgroundColor = "var(--top-menu-bg)"
  topMenuEl.classList.add("flex-around")
  
  // Task 3.0-3.1
  menuLinks.forEach(value => {
    let aTag = document.createElement("a") 
    aTag.setAttribute("href",value.href)
    aTag.textContent = value.text
    //console.log(value.text)
    //console.log(aTag.textContent)
    //console.log(aTag)
    topMenuEl.appendChild(aTag)
    
  })
  
  // Task 4.0-4.5
  let subMenuEl = document.querySelector("#sub-menu")
  subMenuEl.style.height = "100%"
  subMenuEl.style.backgroundColor = "var(--sub-menu-bg)"
  //subMenuEl.className = "flex-around"
  //subMenuEl.className = "this"
  subMenuEl.classList.add("flex-around")
  //console.log(subMenuEl)
  subMenuEl.style.position = "absolute"
  subMenuEl.style.top = "0"
  
  console.log("~~~~checkpoint~~~~")
  // topMenuEl.forEach(value =>{
  //   console.log(value.querySelector("a"))
  // })
  
  // Task 5.0-
  let topMenuLinks = topMenuEl.querySelectorAll("a")
  console.log(topMenuLinks)
  
  let showingSubMenu = false
  
  topMenuEl.addEventListener('click',function(event){
    console.log(event)
    event.preventDefault()
    event.target.tagName == "a"
    
  })
  
  
  