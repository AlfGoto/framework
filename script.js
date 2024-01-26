dc(() => {

    let logoBorder = gid('logoBorder')
    let evebetterP = gid('evebetterP')
    let h1Logo = gid('h1Logo')
    let separator = gid('separator')
    let logo = gid('logo')


    h1Logo.classList.add('h1LogoANIMATION')
    setTimeout(() => {
        evebetterP.classList.add('pANIMATION')
        setTimeout(() => {
            logoBorder.classList.add('borderANIMATION')
            setTimeout(() => { 
                separator.style.height = '20vh'
                logo.style.top = '10vh'
            }, 500)
        }, 1000)
    }, 1000)



    let copy = gid('copy')
    let download = gid('download')
    let downloadA = gid('downloadA')
    cl(copy, () => {
        navigator.clipboard.writeText("<script src='https://alframework.netlify.app/alframework.js'></script>");
        addAnimateButton(copy)
    })
    cl(download, () => {
        downloadA.click()
        addAnimateButton(download)
    })

    let alfjaxcopy = gid('alfjaxcopy')
    let alfjaxdownload = gid('alfjaxdownload')
    let alfjaxdownloadA = gid('alfjaxdownloadA')
    cl(alfjaxcopy, () => {
        navigator.clipboard.writeText("<script src='https://alframework.netlify.app/AlfJAX.js'></script>");
        addAnimateButton(alfjaxcopy)
    })
    cl(alfjaxdownload, () => {
        alfjaxdownloadA.click()
        addAnimateButton(alfjaxdownload)
    })

    let Shortercopy = gid('Shortercopy')
    let Shorterdownload = gid('Shorterdownload')
    let downloadSHORTER = gid('downloadSHORTER')
    cl(Shortercopy, () => {
        navigator.clipboard.writeText("<script src='https://alframework.netlify.app/Shorter.js'></script>");
        addAnimateButton(Shortercopy)
    })
    cl(Shorterdownload, () => {
        downloadSHORTER.click()
        addAnimateButton(Shorterdownload)
    })




    function addAnimateButton(arg){
        arg.classList.add('buttonANIMATION')
        setTimeout(()=>{arg.classList.remove('buttonANIMATION')},1500)
    }

    alframeworkhelp()
})
