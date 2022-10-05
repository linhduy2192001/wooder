function changeClHeader(){
    let header=document.querySelector('.header')
    document.addEventListener('scroll',function(){
        const scrollY = window.pageYOffset
        if (scrollY>header.clientHeight){
            header.classList.add('active')
        }else {
            header.classList.remove('active')
        }
    })
}
changeClHeader()

function backToTop(){
    let backTo=document.querySelector('.btb')
    window.addEventListener('scroll',function(e){
        const y = window.pageYOffset
        if (y>=document.querySelector('body').clientHeight/2){
            backTo.classList.add('active')
        }
        else {
            backTo.classList.remove('active')
        }
    })

    backTo.addEventListener('click',function(e){
        e.preventDefault()
        window.scrollTo({
            'top':0,
        })
    })
}
backToTop()


//change language
let lang=document.querySelector('.header__lang'),
    langCurrent=document.querySelector('.header__lang .header__lang-current span'),
    langSelect=document.querySelector('.header__lang .header__lang-select'),
    langItems=document.querySelectorAll('.header__lang .header__lang-select li a');

lang.addEventListener('click',function(e){
    e.stopPropagation()
    e.preventDefault()
    lang.classList.toggle('active');
})
langItems.forEach(function(item){
    item.addEventListener('click',function(){
        let langText = this.textContent
        let langCurrentSpan=langCurrent.textContent
        langCurrent.innerHTML=langText
        this.innerHTML=langCurrentSpan

    })
})

document.addEventListener('click',function(){
    lang.classList.remove('active')
})

//menumobile
function menuMobile(){
    const btnMenu=document.querySelector('.header__btnmenu'),
    nav=document.querySelector('.nav')

    btnMenu.addEventListener('click',function(){
        this.classList.toggle('active')
        nav.classList.toggle('active')
    })
    function hideNav(){
        btnMenu.classList.remove('active')
        nav.classList.remove('active')
    }
    window.addEventListener('resize',function(){
        let w = window.innerWidth
        if (w > 992){
            hideNav()
        }
    })
}

menuMobile()


let menu=document.querySelectorAll('.header .header__menu .menu  a')
let heightHeader=document.querySelector('.header').offsetHeight
let sections=[]

function removeActiveMenu(){
    menu.forEach(function(menu_element, menu__index){
        menu_element.classList.remove('active')
    })
}

menu.forEach(function(element,index){
    let className=element.getAttribute('href').replace('#','')
    let section = document.querySelector('.'+className)
    sections.push(section)
    console.log(sections)
    element.addEventListener('click',function(e){
        e.preventDefault()
        window.scrollTo({
            top:section.offsetTop - heightHeader + 1 ,
            behavior:'smooth'
        })
        removeActiveMenu()
        element.classList.add('active')
    })
})

window.addEventListener('scroll',function(e){
    let positonScroll = window.pageYOffset
    sections.forEach(function(section,index){
        if(positonScroll>section.offsetTop - heightHeader && positonScroll < section.offsetTop + section.offsetHeight){
            removeActiveMenu()
            menu[index].classList.add('active')
        }else{
            menu[index].classList.remove('active')

        }
    })
})


// //slider
// let listItemSlider = document.querySelectorAll('.slider .slider__list .slider__list-item')
// let currentSlider=0
// let number=document.querySelector('.slider .slider__bottom .slider__bottom-paging .num')
// let dot_a=document.querySelectorAll('.slider .slider__bottom .slider__bottom-paging .dots a')
// listItemSlider.forEach(function(itemSlider,index){
//     if(itemSlider.classList.contains('active')){
//         currentSlider=index
//     }
// })
// function showNumber(index){
//     number.innerHTML= (index).toString().padStart(2, '0')
// }
// //defaul active
// showNumber(currentSlider+1)

// document.querySelector('.slider .slider__bottom .slider__btnarrow .btnarrow.next').addEventListener('click',function(){
//     if (currentSlider<listItemSlider.length-1){
//         // listItemSlider[currentSlider].classList.remove('active')
//         // listItemSlider[currentSlider+1].classList.add('active')
//         // currentSlider++
//         goTo(currentSlider+1)
//     }else{
//         // listItemSlider[currentSlider].classList.remove('active')
//         // listItemSlider[0].classList.add('active')
//         // currentSlider=0
//         goTo(0)
//     }
// })

// document.querySelector('.slider .slider__bottom .slider__btnarrow .btnarrow.prev').addEventListener('click',function(){
//     if (currentSlider>0){
//         // listItemSlider[currentSlider].classList.remove('active')
//         // listItemSlider[currentSlider - 1].classList.add('active')
//         // currentSlider--
//         goTo(currentSlider-1)
//     }else{
//         // listItemSlider[currentSlider].classList.remove('active')
//         // listItemSlider[listItemSlider.length -1 ].classList.add('active')
//         // currentSlider=listItemSlider.length -1
//         goTo(listItemSlider.length -1)
//     }
// })

// function goTo(index){
//     listItemSlider[currentSlider].classList.remove('active')
//     listItemSlider[index].classList.add('active')
//     dot_a[currentSlider].classList.remove('is-selected')
//     dot_a[index].classList.add('is-selected')
//     currentSlider=index
//     showNumber(currentSlider+1)
// }

// dot_a.forEach(function(a,index){
//     a.addEventListener('click',function(){
//         // dot_a[currentSlider].classList.remove('is-selected')
//         // dot_a[index].classList.add('is-selected')
//         goTo(index)
//     })
// })



//progressbar 
function progressBar(){
    let progress=document.querySelector('.progressbar')
    window.addEventListener('scroll',function(){
        let scrollY = window.scrollY
        let percent = scrollY/ (document.body.offsetHeight - window.innerHeight) * 100
        progress.style.width= `${percent}%`
    })
}
// progressBar()

//modalvideo 
function handleModalVideo(){
    let videos=document.querySelectorAll('.videos .videos__list .videos__list-item .circle'),
        modalVideo=document.querySelector('.popupvideo'),
        iframeModalVideo=document.querySelector('.popupvideo .popupvideo__inner .popupvideo__inner-iframe iframe'),
        btnClose=document.querySelector('.popupvideo .popupvideo__inner .popupvideo__inner-close')
    
        videos.forEach(function(video){
            video.addEventListener('click',function(){
                //show modal
                modalVideo.classList.add('active')
                console.log(video)
                //get dataid 
                let dataID = video.getAttribute('data-video-src')
                //set id iframe
                iframeModalVideo.setAttribute('src',`https://www.youtube.com/embed/${dataID}?autoplay=1`)
            })
        })
        
        function closeModal(){
            modalVideo.classList.remove('active')
            iframeModalVideo.setAttribute('src','')
        }
        btnClose.addEventListener('click',function(){
            closeModal()
        })
        modalVideo.addEventListener('click',function(){
            closeModal()
        })
}
handleModalVideo()



//tabs
function handleTabsNews(){
    let tabs=document.querySelectorAll('.news__tabs-item'),
        newsLists=document.querySelectorAll('.news__list')
    tabs.forEach(function(tab){
        tab.addEventListener('click',function(){
            tabs.forEach(function(tab){
                tab.classList.remove('active')
            })
            this.classList.add('active')
            
            //hide all list
            newsLists.forEach(function(list){
                list.classList.remove('active')
            })

            let idTab=this.getAttribute('data-tab')
            //add classlist
            document.querySelector('.news__list-' + idTab).classList.add('active')
        })
    })
}
handleTabsNews()


//sliderhero
function handleSliderHero(){
    //Khoi tao slider
    var slider = document.querySelector('.slider__list');
    var flktySLider = new Flickity( 
    slider, 
        {
        // options
        cellAlign: 'left',
        contain: true,
        wrapAround:true,
        prevNextButtons:false,
        autoPlay:true,
        on: {
            ready: function() {
              console.log('Flickity is ready');
              handleDotsSlider()
            },
            change: function( index ) {
              console.log( 'Slide changed to' + index );
              handlePagingSlider(index)

            }
          }
        }
    );
    
    let btnPrev = document.querySelector('.slider__bottom .slider__btnarrow .btnarrow.prev'),
        btnNext = document.querySelector('.slider__bottom .slider__btnarrow .btnarrow.next')
    btnPrev.addEventListener('click',function(){
        flktySLider.previous(true)
    })
    btnNext.addEventListener('click',function(){
        flktySLider.next(true)
    })


    //dots  
    function handleDotsSlider(){
        let dotsSlider=document.querySelector('.flickity-page-dots'),
            dotsSliderBottom=document.querySelector('.slider__bottom .slider__bottom-paging')
            dotsSliderBottom.appendChild(dotsSlider)  
    }
    function handlePagingSlider(index){
        let number=document.querySelector('.slider__bottom .slider__bottom-paging .num')
        number.innerHTML=(index+1).toString().padStart(2,'0')

    
    }
}


//slider 
function handlePhotoSlider(){
    var photo = document.querySelector('.imgdrag__slider');
    var flktySLider = new Flickity( 
    photo, 
        {
        // options
        cellAlign: 'left',
        contain: true,
        // wrapAround:true,
        freeScroll:true,
        prevNextButtons:false,
        lazyLoad: 3
        // on: {
        //     ready: function() {
        //       console.log('Flickity is ready');
        //     },
        //     change: function( index ) {
        //       console.log( 'Slide changed to' + index );
        //     }
        //   }
        }
    );
}
function imgProgressBar(){
    let imgProgressBar = document.querySelector('.imgdrag__bar')
    var flktyProgress = new Flickity('.imgdrag__slider',{
        cellAlign: 'left',
        contain: true,
        // wrapAround:true,
        freeScroll:true,
        prevNextButtons:false,
        lazyLoad: 3,
        autoPlay:true
    });
    flktyProgress.on('scroll',function(progress){
        progress = Math.max( 0, Math.min( 1, progress ))
        imgProgressBar.style.width = progress * 100 + '%';
    })
}
imgProgressBar()
window.addEventListener('load',function(){
    progressBar()
    handlePhotoSlider()
    handleSliderHero()
})


