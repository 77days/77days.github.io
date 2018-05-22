
function menu(name,price,type)
{
    this.name = name;
    this.price = price;
    this.type = type;
    this.getName = function() {
        return this.name;
    };
    
}

function arrayList(){
  
  this.list=[]; //데이터를 저장할 수 있는 배열을 멤버필드로 선언한다.
  //인자로 전달되는 데이터를 저장하는 함수
  
  this.add = function(item){
   //인자로 전달된 데이터를 자기 자신의 필드에 저장
   this.list.push(item);
  };
  
  //인자로 전달되는 해당 인덱스의 값을 리턴 하는 함수
  this.get = function(index){
   return this.list[index];
  };
  
  //인자로 전달되는 해당 인덱스의 값을 삭제하는 함수
  this.removeAll = function(){
   this.list=[]; //빈 배열을 대입해서 삭제하는 효과를 준다
  };
  
  //현재 저장된 크기를 리턴하는 메소드
  this.size = function(){
   return this.list.length;
  };
   
  this.remove = function(index){
   //새로운 배열을 정의
   var newList=[];
   //반복문을 돌면서 인자로 전달된 인덱스를 제외한 모든 요소를 새 배열에 담는다.
   for(var i=0;i<this.list.length;i++){
    if(i!=index){ //삭제할 인덱스가 아니라면
     newList.push(this.list[i]);
    };
   };
   //새로 만든 배열을 멤버 필드에 저장한다.
   this.list = newList;
  };
 };
 
var menuList = new arrayList();

window.onload = function(){
   
    if (storageAvailable('localStorage')) {
	   // 야호! 우리는 localStorage를 사용할 수 있습니다.
    }
    else {
	    // 슬픈소식, localStorage를 사용할 수 없습니다.
    }
    
    document.getElementById("chicken").onclick = function(){
        menuList.add( new menu("chicken","5","burrito"));
        display();
    }
    
    document.getElementById("bulgogi").onclick = function(){
       
         menuList.add(new menu("bulgogi","5","burrito"));
         display();
    }
    
    document.getElementById("meat").onclick = function(){
       
        menuList.add(new menu("meat","5","burrito"));
        display();
    }
    
    document.getElementById("tofu").onclick = function(){
       
         menuList.add(new menu("tofu","5","burrito"));
         display();
    }
    
        document.getElementById("vegitable").onclick = function(){
       
        menuList.add(new menu("burrito","5","burrito"));
        display();
    }
        document.getElementById("coffee").onclick = function(){
        
        menuList.add(new menu("coffee","3","drink"));
        display();
    }
    
    document.getElementById("coke").onclick = function(){
        
         menuList.add(new menu("coke","3","drink"));
         display();
    }
    
    document.getElementById("sikhye").onclick = function(){
        
        menuList.add(new menu("sikhye","3","drink"));
        display();
    }
    
    document.getElementById("flour").onclick = function(){
        
         menuList.add(new menu("flour","0","tortilla"));
         display();
    }
    
    document.getElementById("corn").onclick = function(){
     
        menuList.add(new menu("corn","0","tortilla"));
        display();
    }
    document.getElementById("kimchi").onclick = function(){
     
        menuList.add(new menu("kimchi","0","tortilla"));
        display();
    }
    document.getElementById("sendMessageButton").onclick = function(){
     
        menuList.removeAll();
        display();
    }
    document.getElementById("removeall").onclick = function(){
     
        menuList.removeAll();
        display();
    }
    
}
function remove(index)
{
    menuList.remove(index);
    display();
}
function display()
{   
    var text = " ";
    if(menuList.size() == 0 )
    {
        document.getElementById("table").innerHTML = "blank";
    }
    else
   {
        for( var i =0; i < menuList.size(); i++)
        {
           
            text += "<tr>";    
            text += "<th scope = \"row\" >" + (i+1) + "</th>";
            text += "<th>"+menuList.get(i).name+"</th>";
            text += "<th>"+menuList.get(i).type+"</th>"
            text += "<th>"+menuList.get(i).price+"</th>"
            text += "<th><a href = \"#contact\" onclick ="+ "\'remove("+i+")\' >X</a></th>"
            text += "</tr>";
        }
        document.getElementById("table").innerHTML = text;
        text = "";
   }
   
}



function storageAvailable(type) {
    try {
        var storage = window[type],
            x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    }
    catch(e) {
        return e instanceof DOMException && (
            // Firefox를 제외한 모든 브라우저
            e.code === 22 ||
            // Firefox
            e.code === 1014 ||
            // 코드가 존재하지 않을 수도 있기 때문에 테스트 이름 필드도 있습니다.
            // Firefox를 제외한 모든 브라우저
            e.name === 'QuotaExceededError' ||
            // Firefox
            e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
            // 이미 저장된 것이있는 경우에만 QuotaExceededError를 확인하십시오.
            storage.length !== 0;
    }
}