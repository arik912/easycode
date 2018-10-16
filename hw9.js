let func =(some) =>{
    let a = some.split('');
    a.map((item)=>{
        setInterval(console.log(item),200)
    });
}
func('test');