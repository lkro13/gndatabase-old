function characterimg(name){
  switch(name){
case "albedo":return "/gndatabase/img/character/head/Albedo.png";
case "aloy":return "/gndatabase/img/character/head/Aloy.png";
case "amber":return "/gndatabase/img/character/head/Amber.png";
case "ayaka":return "/gndatabase/img/character/head/Ayaka.png";
case "barbara":return "/gndatabase/img/character/head/Barbara.png";
case "beidou":return "/gndatabase/img/character/head/Beidou.png";
case "bennett":return "/gndatabase/img/character/head/Bennett.png";
case "chongyun":return "/gndatabase/img/character/head/Chongyun.png";
case "diluc":return "/gndatabase/img/character/head/Diluc.png";
case "diona":return "/gndatabase/img/character/head/Diona.png";
case "eula":return "/gndatabase/img/character/head/Eula.png";
case "fischl":return "/gndatabase/img/character/head/Fischl.png";
case "ganyu":return "/gndatabase/img/character/head/Ganyu.png";
case "hu tao":return "/gndatabase/img/character/head/Hu Tao.png";
case "jean":return "/gndatabase/img/character/head/Jean.png";
case "kaeya":return "/gndatabase/img/character/head/Kaeya.png";
case "kazuha":return "/gndatabase/img/character/head/Kazuha.png";
case "keqing":return "/gndatabase/img/character/head/Keqing.png";
case "klee":return "/gndatabase/img/character/head/Klee.png";
case "kokomi":return "/gndatabase/img/character/head/Kokomi.png";
case "lisa":return "/gndatabase/img/character/head/Lisa.png";
case "mona":return "/gndatabase/img/character/head/Mona.png";
case "ningguang":return "/gndatabase/img/character/head/Ningguang.png";
case "noelle":return "/gndatabase/img/character/head/Noelle.png";
case "qiqi":return "/gndatabase/img/character/head/Qiqi.png";
case "raiden":return "/gndatabase/img/character/head/Raiden.png";
case "razor":return "/gndatabase/img/character/head/Razor.png";
case "rosaria":return "/gndatabase/img/character/head/Rosaria.png";
case "sara":return "/gndatabase/img/character/head/Sara.png";
case "sayu":return "/gndatabase/img/character/head/Sayu.png";
case "sucrose":return "/gndatabase/img/character/head/Sucrose.png";
case "tartaglia":return "/gndatabase/img/character/head/Tartaglia.png";
case "thoma":return "/gndatabase/img/character/head/Thoma.png";
case "traveler":return "/gndatabase/img/character/head/Traveler.png";
case "venti":return "/gndatabase/img/character/head/Venti.png";
case "xiangling":return "/gndatabase/img/character/head/Xiangling.png";
case "xiao":return "/gndatabase/img/character/head/Xiao.png";
case "xingqiu":return "/gndatabase/img/character/head/Xingqiu.png";
case "xinyan":return "/gndatabase/img/character/head/Xinyan.png";
case "yanfei":return "/gndatabase/img/character/head/Yanfei.png";
case "yoimiya":return "/gndatabase/img/character/head/Yoimiya.png";
case "zhongli":return "/gndatabase/img/character/head/Zhongli.png";
case "gorou":return "/gndatabase/img/character/head/Gorou.png";
case "itto":return "/gndatabase/img/character/head/AratakiItto.png";

  }
}

function charactertimes(name){
  switch(name){
    case "albedo": return ["wednesday"]; 
case "aloy": return ["monday"]; 
case "amber": return ["monday"]; 
case "ayaka": return ["tuesday"]; 
case "barbara": return ["monday"]; 
case "beidou": return ["wednesday"]; 
case "bennett": return ["tuesday"]; 
case "chongyun": return ["tuesday"]; 
case "diluc": return ["tuesday"]; 
case "diona": return ["monday"]; 
case "eula": return ["tuesday"]; 
case "fischl": return ["wednesday"]; 
case "ganyu": return ["tuesday"]; 
case "hu tao": return ["tuesday"]; 
case "jean": return ["tuesday"]; 
case "kaeya": return ["wednesday"]; 
case "kazuha": return ["tuesday"]; 
case "keqing": return ["monday"]; 
case "klee": return ["monday"]; 
case "kokomi": return ["monday"]; 
case "lisa": return ["wednesday"]; 
case "mona": return ["tuesday"]; 
case "ningguang": return ["monday"]; 
case "noelle": return ["tuesday"]; 
case "qiqi": return ["monday"]; 
case "raiden": return ["wednesday"]; 
case "razor": return ["tuesday"]; 
case "rosaria": return ["wednesday"]; 
case "sara": return ["tuesday"]; 
case "sayu": return ["wednesday"]; 
case "sucrose": return ["monday"]; 
case "tartaglia": return ["monday"]; 
case "traveler": return ["monday","tuesday","wednesday"]; 
case "thoma": return ["monday"]; 
case "venti": return ["wednesday"]; 
case "xiangling": return ["tuesday"]; 
case "xiao": return ["monday"]; 
case "xingqiu": return ["wednesday"]; 
case "xinyan": return ["wednesday"]; 
case "yanfei": return ["wednesday"]; 
case "yoimiya": return ["monday"]; 
case "zhongli": return ["wednesday"]; 
case "gorou": return ["wednesday"]; 
case "itto": return ["tuesday"]; 

  }
}

function characterimage(name){
  var imagefile = characterimg(name)
  var days = charactertimes(name)
  document.cookie= name+"=1"
  for (let step = 0; step < days.length; step++) {
    var day = document.getElementById(days[step])
    var image = document.createElement("img")
    image.src = imagefile
    image.style.width="120px"
    image.style.margin="5px 0px 5px 0px"
    image.id=name+days[step]
    image.onclick = function(){location.href = "/gndatabase/character/"+name+".html#talent"}
    image.classList.add("w3-hover-opacity")
    day.appendChild(image)
  }
  var day = document.getElementById("sunday")
    var image = document.createElement("img")
    image.src = imagefile
    image.style.width="120px"
    image.style.margin="5px 0px 5px 0px"
    image.id=name+"sunday"
    image.onclick = function(){location.href = "/gndatabase/character/"+name+".html#talent"}
    image.classList.add("w3-hover-opacity")
    day.appendChild(image)
}


function removecha(name){
  var day = charactertimes(name)
  document.cookie= name+"=; expires=Thu, 01 Jan 1970 00:00:00 UTC"
  for (let step = 0; step < day.length; step++) {
    var days = document.getElementById(name+day[step])
    days.remove()
  }
  var days = document.getElementById(name+"sunday")
    days.remove()
}

function characterimagev(name,element){
  var imagefile = characterimg(name)
  if(element == "") var parent = document.getElementById("character")
  else var parent = document.getElementById(element)
  var image = document.createElement("img")
  image.src = imagefile
  image.style.width="120px"
  image.style.margin="5px 0px 5px 0px"
  image.onclick = function(){location.href = "/gndatabase/character/"+name+".html"}
  image.classList.add("w3-hover-opacity")
  parent.appendChild(image)
}
