dc(()=>{
    let copy = gid('copy')
    let download = gid('download')
    let downloadA = gid('downloadA')
    


    cl(copy, ()=>{
        navigator.clipboard.writeText('copied');
        alert('link copied')
    })

    cl(download, ()=>{
        downloadA.click()
    })
})
