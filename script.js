dc(()=>{
    let copy = gid('copy')
    let download = gid('download')
    


    cl(copy, ()=>{
        navigator.clipboard.writeText('copied');
        alert('link copied')
    })

    cl(download, ()=>{

    })
})
