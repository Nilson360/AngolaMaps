var map = document.querySelector('#map');
var paths = map.querySelectorAll('.map__image a');
var links = map.querySelectorAll('.map__list a');

var activeArea= function(id){
    map.querySelectorAll('.is_active').forEach(function(item){
        item.classList.remove('is_active');
    })
    if(id !== undefined){
        document.querySelector('#AO-'+id).classList.add('is_active');
        document.querySelector('#AO-'+id).classList.add('is_active');
    }
}

if(NodeList.prototype.forEach === undefined){
    NodeList.prototype.forEach = function(callback){
        [].forEach.call(this, callback);
    }
}

paths.forEach(function(path){
    path.addEventListener('mouseenter', function(e){
       /* debugger
        console.log('salut!');*/
       // debugger
        var id = this.id.replace('AO-','');
        activeArea(id);
        
    })
})

links.forEach(function(link){
    var id = this.id.replace('AO-', '');
    activeArea(id);
})

map.addEventListener('mouseleave',function(){
    activeArea();
})