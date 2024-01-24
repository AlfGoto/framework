dc(()=>{
    let copy = gid('copy')
    let download = gid('download')
    let downloadA = gid('downloadA')
    


    cl(copy, ()=>{
        navigator.clipboard.writeText("<script src='https://alframework.netlify.app/alframework.js'></script");
        alert('link copied')
    })

    cl(download, ()=>{
        downloadA.click()
    })
})
