dc(()=>{
    let copy = gid('copy')
    let download = gid('download')
    


    cl(copy, ()=>{
        navigator.clipboard.writeText(copyText.value);
    })
})
