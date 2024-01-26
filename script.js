dc(() => {
    let copy = gid('copy')
    let download = gid('download')
    let downloadA = gid('downloadA')
    cl(copy, () => {
        navigator.clipboard.writeText("<script src='https://alframework.netlify.app/alframework.js'></script>");
        alert('link copied')
    })
    cl(download, () => {
        downloadA.click()
    })


    let alfjaxcopy = gid('alfjaxcopy')
    let alfjaxdownload = gid('alfjaxdownload')
    let alfjaxdownloadA = gid('alfjaxdownloadA')


    cl(alfjaxcopy, () => {
        navigator.clipboard.writeText("<script src='https://alframework.netlify.app/AlfJAX.js'></script>");
        alert('link copied')
    })

    cl(alfjaxdownload, () => {
        alfjaxdownloadA.click()
    })




    // alframeworkhelp()

    alfjax('ajax.php')

})
