window.addEventListener('load',function(){


    const text = ['chúc c 20/10 vui vẻ nha:3','tớ muốn nói là..........','t đã thích c rất lâu rồi']
    

    var soundEffect = document.querySelector('.audio')
    soundEffect.volume= 0.2;
    var content = document.querySelector('.content')
    var select = document.querySelector('.select')
    var main = this.document.querySelector('.main')
    
    var video = document.querySelector('.video')
    video.pause();
    
    document.querySelector('.start').addEventListener('click',function(){
        this.remove();
        text.forEach(function(item,index){
            setTimeout(function(){
                
                setTimeout(function(){
                    soundEffect.play();
                },500)
                setTimeout(function(){
                    soundEffect.pause();
                },5000);
                
                var line = document.createElement("p")
                line.innerText = `${item}`;
            
                line.classList.add('line')
            
                line.classList.add('animation-typewriter')
            
                content.appendChild(line);
            },index*5500)
    
        })
        setTimeout(function(){
            setTimeout(function(){
                soundEffect.play();
            },500)
            setTimeout(function(){
                soundEffect.pause();
            },5000);
            var line = document.createElement("p")
                line.innerText = `thế c có thích t ko ???:(`;
            
                line.classList.add('line')
            
                line.classList.add('animation')
            
                content.appendChild(line);
        },3*5500)
    
        setTimeout(function(){
            select.innerHTML=`<button class="btn success">Có :3</button>
            <button class="btn failure">Không :(</button>`
            soundEffect.pause();
        },4*5300)
    })


    let dem = 0;

    main.addEventListener('click', function(event){
        if(event.target.matches('.failure')){
            dem+=1;
            event.target.style.transform = `translate(${Math.floor(Math.random() * 200) - 100}px,${Math.floor(Math.random() * 300) - 200}px)`;
            if(dem ===7){
                content.innerHTML=''
                var line = document.createElement("h1")
                line.innerText = `Tớ bt cậu thích t mà đừng bấm không nữa :(`;
                line.classList.add('failureN')
                content.appendChild(line);
                content.style.backgroundImage = `url(./1642572455_853_Nhung-Hinh-Anh-Meo-Bua-Buon-Cuoi-Lay-Hai-Huoc.jpg)`
            }
        }
        if(event.target.matches('.success')){
            content.style.backgroundImage = `url(./meme-meo-nham-hiem.jpg)`
            content.innerHTML = `<h2 class="successN">Awww tớ biết mà :3</h2>`;
            select.innerHTML=``;
            setTimeout(function(){
                video.play();
                document.querySelector('.meme').style.visibility ='visible'
            },2000)
        }

    })
})


